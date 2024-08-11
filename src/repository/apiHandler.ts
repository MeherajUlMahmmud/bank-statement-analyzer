import axios from "axios";
import { authPassword, authUsername } from "../utils/constants";

export const sendGetRequest = (url: string) => {
	return axios({
		method: "GET",
		url: url,
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Basic ${btoa(authUsername + ":" + authPassword)}`,
		},
	});
};

export const sendPostRequest = (url: string, data: any) => {
	return axios({
		method: "POST",
		url: url,
		data: data,
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Basic ${btoa(authUsername + ":" + authPassword)}`,
		},
	});
};
