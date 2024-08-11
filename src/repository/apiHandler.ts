import axios from "axios";

export const sendPostRequest = (url: string, data: any) => {
	return axios({
		method: "POST",
		url: url,
		data: data,
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Basic ${btoa(
				import.meta.env.VITE_USERNAME +
					":" +
					import.meta.env.VITE_PASSWORD
			)}`,
		},
	});
};
