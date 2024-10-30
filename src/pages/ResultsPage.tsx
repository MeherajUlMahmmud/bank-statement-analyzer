import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Document, Page } from 'react-pdf'
import { statementRepository } from '@/repository/api'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Download, ChevronLeft } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

interface LocationState {
	csvUrl: string
}

export default function ResultsPage() {
	const navigate = useNavigate();
	const location = useLocation()

	const { csvUrl } = location.state as LocationState

	const [csvData, setCsvData] = useState<string[][]>([])
	const [numPages, setNumPages] = useState<number | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		loadCsvData()
	}, [csvUrl])

	const loadCsvData = async () => {
		setIsLoading(true)
		try {
			const data = await statementRepository.fetchCsvData(csvUrl)
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
			const timestamp = new Date().toISOString().replace(/[-:.]/g, '').slice(0, 15).replace('T', "_"); // e.g., "20231027_142530"
			link.setAttribute('href', url);
			link.setAttribute('download', `exported_data_${timestamp}.csv`);
			link.style.visibility = 'hidden';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	};

	return (
		<div className="container mx-auto py-8">
			<Button
				variant={"default"}
				className='mb-4 bg-slate-800 text-white'
				onClick={() => navigate(-1)}
			>
				<ChevronLeft className='mr-2 h-4 w-4' /> Go Back
			</Button>
			<div className="grid md:grid-cols-2 gap-8">
				<Card className='bg-white'>
					<CardHeader>
						<CardTitle>PDF Document</CardTitle>
					</CardHeader>
					<CardContent>
						{/* <div className="rounded-lg overflow-hidden">
							<Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
								{Array.from(new Array(numPages), (el, index) => (
									<Page key={`page_${index + 1}`} pageNumber={index + 1} width={450} />
								))}
							</Document>
						</div> */}
					</CardContent>
				</Card>
				<Card className='bg-white'>
					<CardHeader className="flex flex-row items-center justify-between">
						<CardTitle>CSV Data</CardTitle>
						<Button onClick={exportCsv} disabled={isLoading} variant={"outline"}>
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
													className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border"
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
													<td key={cellIndex} className="px-3 py-2 whitespace-nowrap text-xs text-gray-500 border">
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
	)
}