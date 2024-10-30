import { useState, useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { statementRepository } from '@/repository/statement'
import { toast } from '@/hooks/use-toast'
import { FileText, Upload, ChevronRight, Download, Loader2 } from 'lucide-react'
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

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function FileUpload() {
	const [banks, setBanks] = useState<Bank[]>([])
	const [file, setFile] = useState<File | null>(null)
	const [selectedBank, setSelectedBank] = useState<string>('')
	const [isUploading, setIsUploading] = useState(false)
	const [response, setResponse] = useState<ApiResponse | null>(null)

	const [pdfPreviewUrl, setPdfPreviewUrl] = useState<string | ArrayBuffer | null>(null)
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
		<div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex flex-col justify-center items-center p-4 space-y-4">
			<div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
				<div className="md:flex">
					<div className="md:w-1/2 bg-primary-600 p-8 text-white">
						<h2 className="text-3xl font-bold mb-6">Bank Statement Analyzer</h2>
						<p className="text-primary-100 mb-8">Unlock insights from your financial data with our advanced analysis tools.</p>
						<ul className="space-y-4">
							<li className="flex items-center">
								<ChevronRight className="mr-2 h-5 w-5 text-primary-300" />
								<span>Convert PDF Statements to Excel Format</span>
							</li>
							<li className="flex items-center">
								<ChevronRight className="mr-2 h-5 w-5 text-primary-300" />
								<span>Quick and Easy Upload Process</span>
							</li>
							<li className="flex items-center">
								<ChevronRight className="mr-2 h-5 w-5 text-primary-300" />
								<span>Support for Multiple banks</span>
							</li>
							<li className="flex items-center">
								<ChevronRight className="mr-2 h-5 w-5 text-primary-300" />
								<span>Automated Error Detection and Fixing</span>
							</li>
						</ul>
					</div>
					<div className="md:w-1/2 p-8">
						<h3 className="text-2xl font-semibold text-gray-800 mb-6">Upload Your Statement</h3>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<Label htmlFor="bank-select" className="text-sm font-medium text-gray-700">Select Your Bank</Label>
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
								<Label htmlFor="file-upload" className="text-sm font-medium text-gray-700">Upload PDF Statement</Label>
								<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
									<div className="space-y-1 text-center">
										<FileText className="mx-auto h-12 w-12 text-gray-400" />
										<div
											className="flex text-sm text-gray-600"
											onDrop={handleFileDrop}
											onDragOver={(e) => e.preventDefault()}
										>
											<label
												htmlFor="file-upload"
												className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
											>
												<span>Upload a file</span>
												<Input
													id="file-upload"
													type="file"
													accept=".pdf"
													onChange={handleFileChange}
													className="sr-only"
												/>
											</label>
											<p className="pl-1">or drag and drop</p>
										</div>
										<p className="text-xs text-gray-500">PDF up to 10MB</p>
									</div>
								</div>
								{file && (
									<p className="mt-2 text-sm text-gray-600">
										Selected file: {file.name}
									</p>
								)}
							</div>
							<Button
								type="submit"
								disabled={!file || !selectedBank || isUploading}
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
							>
								{isUploading ? (
									<>
										<Upload className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
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
			</div>

			{response && (
				<div className="w-full">
					<div className='md:flex gap-4'>
						<Card className='md:w-1/2 bg-white'>
							<CardHeader className="flex flex-row items-center justify-between">
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
										{Array.from(new Array(numPages), (el, index) => (
											<Page key={`page_${index + 1}`} pageNumber={index + 1} width={450} />
										))}
									</Document>
								</div>
							</CardContent>
						</Card>
						<Card className='md:w-1/2 bg-white'>
							<CardHeader className="flex flex-row items-center justify-between">
								<CardTitle>CSV Data</CardTitle>
								<Button onClick={exportCsv} disabled={isLoading || csvData.length === 0} variant={"outline"}>
									<Download className="mr-2 h-4 w-4" />
									Export CSV
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
															<td key={cellIndex} className="px-3 py-2 whitespace-nowrap text-[9px] text-black border">
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
				</div>
			)}
		</div>
	)
}
