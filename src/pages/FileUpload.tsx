import { useState, useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { statementRepository } from '@/repository/statement'
import { toast } from '@/hooks/use-toast'
import { FileText, Upload, Download, Loader2, X, Loader } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Document, Page, pdfjs } from 'react-pdf'

interface Bank {
	value: string
	name: string
}

interface JsonData {
	account_name: string;
	account_no: string;
	address: string;
	bank_address: string;
	bank_name: string;
	branch_name: string;
	customer_id: string;
	statement_period: string;
}

interface ApiResponse {
	file_urls: {
		csv_file: string;
		pdf_file: string;
	};
	json_data: JsonData;
}

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function FileUpload() {
	const [banks, setBanks] = useState<Bank[]>([])
	const [file, setFile] = useState<File | null>(null)
	const [selectedBank, setSelectedBank] = useState<string>('')
	const [isUploading, setIsUploading] = useState(false)
	const [response, setResponse] = useState<ApiResponse | null>(
		// {
		// 	"file_urls": {
		// 		"csv_file": "http://127.0.0.1:8000/static/uploads/20250102/20250102_230240_DBBL_1/extracted_csvs/20250102_230240_DBBL_1.csv",
		// 		"pdf_file": "http://127.0.0.1:8000/static/uploads/20250102/20250102_230240_DBBL_1/DBBL_1.pdf"
		// 	},
		// 	"json_data": {
		// 		"account_name": "",
		// 		"account_no": "",
		// 		"address": "",
		// 		"bank_address": "",
		// 		"bank_name": "",
		// 		"branch_name": "",
		// 		"customer_id": "",
		// 		"statement_period": ""
		// 	}
		// }
		null
	)

	const [csvData, setCsvData] = useState<string[][]>([])
	const [numPages, setNumPages] = useState<number | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		loadBanks()
	}, [])

	useEffect(() => {
		if (response) {
			loadCsvData()
		}
	}, [response])

	const loadBanks = async () => {
		try {
			const banksData = await statementRepository.fetchBanks()
			setBanks(banksData.data)
		} catch (error) {
			console.error('Error fetching banks:', error)
			toast({
				title: "Failed to load banks",
				description: "Failed to load banks. Please try again.",
				variant: "destructive",
			})
		}
	}

	const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		const droppedFile = event.dataTransfer.files[0];
		handleFile(droppedFile);
	};

	const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
	};

	const handleFile = (file: File | null) => {
		if (file && file.type === 'application/pdf') {
			setFile(file);
		} else {
			setFile(null);
			toast({
				title: "Error",
				description: "Only PDF files are allowed.",
				variant: "destructive",
			})
		}
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0])
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!file || !selectedBank) {
			toast({
				title: "Error",
				description: "Please select a bank and upload a file.",
				variant: "destructive",
			})
			return
		}

		// check file size
		if (file.size > 5 * 1024 * 1024) {
			toast({
				title: "Error",
				description: "File size exceeds the limit of 5MB.",
				variant: "destructive",
			})
			return
		}

		setIsUploading(true)
		try {
			const response = await statementRepository.uploadPdf(file, selectedBank);
			console.log(response);
			setResponse(response.data)
		} catch (error) {
			console.error('Error uploading file:', error)
			toast({
				title: "Error",
				description: "An error occurred while uploading the file. Please try again.",
				variant: "destructive",
			})
		} finally {
			setIsUploading(false)
		}
	}

	const loadCsvData = async () => {
		if (!response || !response.file_urls.csv_file) return; // Prevent fetching if response is null or csv_file is missing

		setIsLoading(true)
		try {
			const data = await statementRepository.fetchCsvData(response.file_urls.csv_file)
			setCsvData(data)
		} catch (error) {
			console.error('Error fetching CSV data:', error)
			toast({
				title: "Error",
				description: "An error occurred while fetching the CSV data. Please try again.",
				variant: "destructive",
			})
		} finally {
			setIsLoading(false)
		}
	}

	function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
		setNumPages(numPages)
	}

	const exportCsv = () => {
		const csvContent = csvData.map(row => row.join(',')).join('\n');
		const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
		const link = document.createElement('a');

		if (link.download !== undefined) {
			const url = URL.createObjectURL(blob);
			const timestamp = new Date().toISOString().replace(/[-:.]/g, '').slice(0, 15).replace('T', "_");
			link.setAttribute('href', url);
			link.setAttribute('download', `exported_data_${timestamp}.csv`);
			link.style.visibility = 'hidden';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	};

	return (
		<div className="p-16 flex flex-col justify-center items-center space-y-6">
			<div className="w-full bg-white rounded-lg shadow-lg border">
				<div className="w-full p-8 text-gray-800">
					<h3 className="text-2xl font-semibold mb-4">Upload Your Statement</h3>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<Label htmlFor="bank-select" className="text-sm font-medium">Select Your Bank</Label>
							<Select onValueChange={setSelectedBank} value={selectedBank}>
								<SelectTrigger className="w-full mt-1">
									<SelectValue placeholder="Choose a bank" />
								</SelectTrigger>
								<SelectContent className="bg-white">
									{banks && banks.map((bank) => (
										<SelectItem key={bank.value} value={bank.value}>
											{bank.name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div>
							<Label htmlFor="file-upload" className="text-sm font-medium">Upload PDF Statement</Label>
							<div
								className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
								onDrop={handleFileDrop}
								onDragOver={handleDragOver}
							>
								<div className="space-y-1 text-center">
									<FileText className="mx-auto h-12 w-12 text-gray-400" />
									<div className="flex text-sm text-gray-600">
										<label
											htmlFor="file-upload"
											className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
										>
											<span>Select a file</span>
											<Input
												id="file-upload"
												type="file"
												accept="application/pdf"
												multiple={false}
												onChange={handleFileChange}
												className="sr-only"
											/>
										</label>
										<p className="pl-1">or drag and drop</p>
									</div>
									<p className="text-xs text-gray-500">PDF up to 5MB</p>
								</div>
							</div>
							<div className='mt-2 text-sm text-gray-500'>
								{file && (
									<div className="p-3 border rounded-lg bg-gray-50 relative">
										<Button
											variant="ghost"
											size="icon"
											className="absolute right-1 top-1 h-6 w-6"
											onClick={() => setFile(null)}
										>
											<X className="h-4 w-4" />
										</Button>
										<h4 className="font-medium text-sm text-gray-700 truncate pr-6">
											{file.name}
										</h4>
										<p className="text-xs text-gray-500">
											Size: {(file.size / 1024).toFixed(2)} KB
										</p>
									</div>
								)}
							</div>
						</div>
						<Button
							variant={"outline"}
							type="submit"
							disabled={!file || !selectedBank || isUploading}
							className="w-full flex justify-center py-2 px-4"
						>
							{isUploading ? (
								<>
									<Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
									Uploading...
								</>
							) : (
								<>
									<Upload className="-ml-1 mr-3 h-5 w-5 text-white" />
									Upload and Analyze
								</>
							)}
						</Button>
					</form>
				</div>
			</div>

			{response && (
				<div className="w-full flex flex-col md:flex-row gap-4">
					<Card className='md:w-1/2 bg-white'>
						<CardHeader className="h-16 flex flex-row items-center justify-between">
							<CardTitle>PDF Document</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="rounded-lg overflow-hidden">
								<Document
									file={response.file_urls.pdf_file}
									onLoadSuccess={onDocumentLoadSuccess}
									onLoadError={(error) => {
										console.error('Error loading PDF:', error);
										toast({
											title: "Error",
											description: "Failed to load PDF document.",
											variant: "destructive",
										});
									}}
								>
									{Array.from(new Array(numPages), (_, index) => (
										<Page
											className="border mb-2"
											key={`page_${index + 1}`}
											pageNumber={index + 1}
											renderTextLayer={false}
											renderAnnotationLayer={false}
											width={600}
										/>
									))}
								</Document>
							</div>
						</CardContent>
					</Card>
					<Card className='md:w-1/2 bg-white'>
						<CardHeader className="h-16 flex flex-row items-center justify-between">
							<CardTitle>CSV Document</CardTitle>
							<Button onClick={exportCsv} disabled={isLoading || csvData.length === 0} size={"icon"}>
								<Download className="w-4 h-4" />
							</Button>
						</CardHeader>
						<CardContent>
							{isLoading ? (
								<div className="flex justify-center items-center h-64">
									<Loader2 className="h-8 w-8 animate-spin" />
								</div>
							) : (
								<div className="overflow-x-auto">
									<table className="w-full border-collapse">
										<thead>
											<tr>
												{csvData[0]?.map((header, index) => (
													<th
														key={index}
														className="px-3 py-2 bg-gray-50 text-left text-[9px] font-bold text-black uppercase tracking-wider border"
													>
														{header}
													</th>
												))}
											</tr>
										</thead>
										<tbody>
											{csvData.slice(1).map((row, rowIndex) => (
												<tr key={rowIndex}>
													{row.map((cell, cellIndex) => (
														<td key={cellIndex} className="px-3 py-2 whitespace-pre-wrap text-[9px] text-black border">
															{cell}
														</td>
													))}
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
						</CardContent>
					</Card>
				</div>
			)}
		</div>
	)
}
