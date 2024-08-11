export const handleAPIError = (error: any, navigate: any) => {
	console.error(error);
	console.error(error?.response?.status);
};
