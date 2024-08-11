import { useState } from "react";
import Uploader from "../components/Uploader";
import "../styles/HomePage.scss";

const HomePage = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [apiResponse, setApiResponse] = useState<any | null>(null);

	return (
		<div className="maxWidth homePageContainer">
			<Uploader
				loading={loading}
				setLoading={setLoading}
				setApiResponse={setApiResponse}
			/>
			{
				apiResponse &&
				<div className="apiResponseContainer">
					<h2>API Response:</h2>
					<pre>{JSON.stringify(apiResponse, null, 2)}</pre>
				</div>
			}
		</div>
	)
}

export default HomePage;
