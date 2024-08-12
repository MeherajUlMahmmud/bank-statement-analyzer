import React, { useState } from 'react';

import { sendPostRequest } from '../repository/apiHandler';
import { PDF_TO_CSV_URL } from '../utils/urls';

import '../styles/Uploader.scss';
import { IMAGES } from '../utils/assets';

interface UploaderProps {
	allowedBanks: any[];
	setApiResponse: (response: any) => void;
}

const Uploader: React.FC<UploaderProps> = ({ allowedBanks, setApiResponse }) => {
	const [selectedBank, setSelectedBank] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [file, setFile] = useState<File | null>(null);
	const [error, setError] = useState<string | null>(null);

	const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		const droppedFile = event.dataTransfer.files[0];
		handleFile(droppedFile);
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0] || null;
		handleFile(selectedFile);
	};

	const handleFile = (file: File | null) => {
		if (file && file.type === 'application/pdf') {
			setFile(file);
			setError(null);
		} else {
			setFile(null);
			setError('Only PDF files are allowed.');
		}
	};

	const handleBankChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedBank(event.target.value);
	};

	const handleSubmit = async () => {
		if (file && selectedBank) {
			setLoading(true);
			setError(null);
			setApiResponse(null);

			// Perform upload or other actions here
			// console.log('Uploading:', { file, selectedBank });

			const data = new FormData();
			data.append("bank_name", selectedBank);
			data.append("pdf_file", file);

			try {
				const response = await sendPostRequest(PDF_TO_CSV_URL, data);
				// console.log('Response:', response);
				setApiResponse(response.data);
			} catch (error: any) {
				setError('Error: ' + (error.response?.data?.message || 'An unknown error occurred.'));
			} finally {
				setLoading(false);
			}
		} else {
			setError('Please select a bank and upload a PDF file.');
		}
	};

	return (
		<div className="uploader">
			<div
				className="uploader__dropzone"
				onDrop={handleFileDrop}
				onDragOver={(e) => e.preventDefault()}
			>
				<label htmlFor="fileInput">
					<p>Drag and drop a PDF file here, or click to select a file.</p>
					<input
						id="fileInput"
						type="file"
						accept=".pdf"
						onChange={handleFileChange}
					/>
				</label>
			</div>

			{/* {file && <p className="uploader__file">Selected file: {file.name}</p>} */}
			{file && <div className="uploader__file">
				<div className="uploader__file__preview">
					<div className='close_icon'>
						<i className="fa fa-times" onClick={() => setFile(null)}></i>
					</div>
					<img src={IMAGES.PDF_ICON} alt="PDF icon" />
					<p>{file.name}</p>
				</div>
			</div>}
			{error && <p className="uploader__error">{error}</p>}

			<div className="uploader__bank-select">
				<label htmlFor="bank">Select Bank:</label>
				<select id="bank" value={selectedBank} onChange={handleBankChange}>
					<option value="" disabled>
						-- Select a Bank --
					</option>
					{allowedBanks.map((bank) => (
						<option key={bank.value} value={bank.value}>
							{bank.name}
						</option>
					))}
				</select>
			</div>

			<div className='uploader__actions'>
				<button onClick={handleSubmit} disabled={!file || !selectedBank || loading}>
					{loading ? 'Loading...' : 'Upload'}
				</button>
			</div>
		</div>
	);
};

export default Uploader;
