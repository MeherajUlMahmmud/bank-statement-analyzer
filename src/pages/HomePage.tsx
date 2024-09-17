import { useEffect, useState } from "react";

import { sendGetRequest } from "../repository/apiHandler";
import { ALLOWED_BANKS_URL } from "../utils/urls";

import "../styles/HomePage.scss";

import Uploader from "../components/Uploader";

const HomePage = () => {
	const [allowedBanks, setAllowedBanks] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [apiResponse, setApiResponse] = useState<any | null>(null);

	useEffect(() => {
		fetchAllowedBankList();
	}, []);

	const fetchAllowedBankList = async () => {
		try {
			const response = await sendGetRequest(ALLOWED_BANKS_URL);
			// console.log(response.data);
			setAllowedBanks(response.data.data);
			setLoading(false);
		} catch (error: any) {
			setError(error.message ?? "Something went wrong");
			setLoading(false);
		}
	};

	return (
		<div className="maxWidth homePageContainer ">
			{
				loading ? (
					<div className="loadingContainer">
						<i className="fa fa-spinner fa-spin"></i>
					</div>
				) : error ? (
					<div className="errorContainer">
						<p className="error">
							{error}
						</p>
					</div>
				) : (
					<Uploader
						allowedBanks={allowedBanks}
						setApiResponse={setApiResponse}
					/>
				)
			}
			{
				apiResponse && (
					apiResponse.is_success ? (
						<div className="apiResponseContainer">
							<p className="success">
								{apiResponse.message}
							</p>
							<div className="apiResponseContainer__download">
								<i className="fa fa-download"></i>
								<a href={apiResponse.data.csv_file} download>
									Download CSV file
								</a>
							</div>
						</div>
					) : (
						<div className="apiResponseContainer">
							<p className="error">
								{apiResponse.message}
							</p>
						</div>
					)
				)
			}
		</div>
	)
}

export default HomePage;
