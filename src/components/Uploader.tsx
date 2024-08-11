import React, { useState } from 'react';
import '../styles/Uploader.scss';
import { BANK_LIST } from '../utils/constants';
import { sendPostRequest } from '../repository/apiHandler';
import { PDF_TO_CSV_URL } from '../utils/urls';

interface UploaderProps {
	loading: boolean;
	setLoading: (loading: boolean) => void;
	setApiResponse: (response: any) => void;
}

const Uploader: React.FC<UploaderProps> = ({ loading, setLoading, setApiResponse }) => {
	const [selectedBank, setSelectedBank] = useState<string>('');
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

			// Perform upload or other actions here
			console.log('Uploading:', { file, selectedBank });

			const data = new FormData();
			data.append("bank_name", selectedBank);
			data.append("pdf_file", file);

			try {
				const response = await sendPostRequest(PDF_TO_CSV_URL, data);
				console.log('Response:', response);
				setApiResponse(response.data);
				setLoading(false);
			} catch (error) {
				console.error('Error:', error);
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
				onDragOver={(event) => event.preventDefault()}
			>
				<p>Drag and drop a PDF file here, or click to select a file.</p>
				<input type="file" accept=".pdf" onChange={handleFileChange} />
			</div>

			{file && <p className="uploader__file">Selected file: {file.name}</p>}
			{error && <p className="uploader__error">{error}</p>}

			<div className="uploader__bank-select">
				<label htmlFor="bank">Select Bank:</label>
				<select id="bank" value={selectedBank} onChange={handleBankChange}>
					<option value="" disabled>
						-- Select a Bank --
					</option>
					{BANK_LIST.map((bank) => (
						<option key={bank.value} value={bank.value}>
							{bank.name}
						</option>
					))}
				</select>
			</div>

			<button onClick={handleSubmit} disabled={!file || !selectedBank || loading}>
				{loading ? 'Loading...' : 'Upload'}
			</button>
		</div>
	);
};

export default Uploader;
