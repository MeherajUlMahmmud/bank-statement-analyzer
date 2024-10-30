import { ApiRoutes } from "@/utils/constants";
import axios from "axios";

const username = "meheraj";
const password = "meheraj@123";
const credentials = btoa(`${username}:${password}`);

export const sendUnauthenticatedGetRequest = (url: string) => {
	return axios({
		method: "GET",
		url: ApiRoutes.BASE_URL + url,
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const sendUnauthenticatedPostRequest = (url: string, data: any) => {
	return axios({
		method: "POST",
		url: ApiRoutes.BASE_URL + url,
		data: data,
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const sendGetRequest = (url: string) => {
	return axios({
		method: "GET",
		url: ApiRoutes.BASE_URL + url,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Basic ${credentials}`,
		},
	});
};

export const sendPostRequest = (url: string, data: any, hasFile = false) => {
	return axios({
		method: "POST",
		url: ApiRoutes.BASE_URL + url,
		data: data,
		headers: {
			"Content-Type": hasFile
				? "multipart/form-data"
				: "application/json",
			Authorization: `Basic ${credentials}`,
		},
	});
};
