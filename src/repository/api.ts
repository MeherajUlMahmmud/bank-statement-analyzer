import axios from "axios";
import { sendGetRequest, sendPostRequest } from "./apiHandler";

export const statementRepository = {
	uploadPdf: async (file: File, bankId: string) => {
		const formData = new FormData();
		formData.append("pdf_file", file);
		formData.append("bank_name", bankId);

		const response = await sendPostRequest(
			"/pdf-to-csv/convert",
			formData,
			true
		);

		return response.data;
	},
	fetchCsvData: async (csvUrl: string) => {
		const response = await axios.get(csvUrl);
		const csvText = response.data;
		return csvText.split("\n").map((row: string) => row.split(","));
	},
	fetchBanks: async () => {
		const response = await sendGetRequest(`/allowed-banks`);
		return response.data;
	},
};
