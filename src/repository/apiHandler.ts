import axios from "axios";
import { ApiAuth, ApiRoutes } from "../utils/constants";

export const sendGetRequest = (url: string) => {
	return axios({
		method: "GET",
		url: ApiRoutes.BASE_URL + url,
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Basic ${btoa(
				ApiAuth.authUsername + ":" + ApiAuth.authPassword
			)}`,
		},
	});
};

export const sendPostRequest = (url: string, data: any) => {
	return axios({
		method: "POST",
		url: ApiRoutes.BASE_URL + url,
		data: data,
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Basic ${btoa(
				ApiAuth.authUsername + ":" + ApiAuth.authPassword
			)}`,
		},
	});
};
