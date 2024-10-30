import { AppUrls } from "./constants";
import { deleteLocalStorage } from "./persistLocalStorage";

export class Helper {
	static capitalize = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	static getImagePreview = (file: File) => {
		return URL.createObjectURL(file); // Create a local URL for the file
	};

	static getRandomColor = () => {
		const letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};

	static commaSeparated = (str: string) => str.toLocaleString();

	static detailedDate = (dateTime: string) => {
		// format as Today, 8:00 PM, Yesterday, 8:00 PM, Tomorrow, 8:00 PM or July 16, 2023, 8:00 PM
		const date = new Date(dateTime);
		const today = new Date();
		const yesterday = new Date();
		const tomorrow = new Date();

		yesterday.setDate(yesterday.getDate() - 1);
		tomorrow.setDate(tomorrow.getDate() + 1);

		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		};

		if (date.toDateString() === today.toDateString()) {
			return `Today, ${date.toLocaleString("en-US", {
				hour: "numeric",
				minute: "numeric",
				hour12: true,
			})}`;
		} else if (date.toDateString() === yesterday.toDateString()) {
			return `Yesterday, ${date.toLocaleString("en-US", {
				hour: "numeric",
				minute: "numeric",
				hour12: true,
			})}`;
		} else if (date.toDateString() === tomorrow.toDateString()) {
			return `Tomorrow, ${date.toLocaleString("en-US", {
				hour: "numeric",
				minute: "numeric",
				hour12: true,
			})}`;
		} else {
			return date.toLocaleString("en-US", options as any);
		}
	};

	static formatDateTime = (dateTime: string) => {
		// July 16, 2023 at 12:00 PM
		const date = new Date(dateTime);
		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		};
		return date.toLocaleString("en-US", options as any);
	};

	static formatDateTimeShort = (dateTime: string) => {
		// May 6, 8:00 PM
		const date = new Date(dateTime);
		const options = {
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		};
		return date.toLocaleString("en-US", options as any);
	};

	static formatDateShort = (dateTime: string) => {
		// May 6, 8:00 PM
		const date = new Date(dateTime);
		const options = {
			month: "short",
			day: "numeric",
			hour12: true,
		};
		return date.toLocaleString("en-US", options as any);
	};

	static formatTime = (dateTime: string) => {
		const date = new Date(dateTime);
		const options = {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		};
		return date.toLocaleString("en-US", options as any);
	};

	static calculateTimeAgo = (date: string | number | Date) => {
		const timeAgo = new Date(date).getTime();
		const now = new Date().getTime();
		const diff = now - timeAgo;
		const diffInDays = diff / (1000 * 60 * 60 * 24);
		const diffInHours = diff / (1000 * 60 * 60);
		const diffInMinutes = diff / (1000 * 60);
		const diffInSeconds = diff / 1000;
		if (diffInDays >= 1) {
			return `${Math.floor(diffInDays)} days ago`;
		} else if (diffInHours >= 1) {
			return `${Math.floor(diffInHours)} hours ago`;
		} else if (diffInMinutes >= 1) {
			return `${Math.floor(diffInMinutes)} minutes ago`;
		} else if (diffInSeconds >= 1) {
			return `${Math.floor(diffInSeconds)} seconds ago`;
		} else {
			return "Just now";
		}
	};

	static calculateRemainingTime = (dueTime: string | number | Date) => {
		const due = new Date(dueTime).getTime();
		const now = new Date().getTime();
		const diff = due - now;
		const diffInDays = diff / (1000 * 60 * 60 * 24);
		const diffInHours = diff / (1000 * 60 * 60);
		const diffInMinutes = diff / (1000 * 60);
		const diffInSeconds = diff / 1000;
		if (diffInDays >= 1) {
			return `${Math.floor(diffInDays)} days`;
		} else if (diffInHours >= 1) {
			return `${Math.floor(diffInHours)} hours`;
		} else if (diffInMinutes >= 1) {
			return `${Math.floor(diffInMinutes)} minutes`;
		} else if (diffInSeconds >= 1) {
			return `${Math.floor(diffInSeconds)} seconds`;
		} else {
			return "Time up";
		}
	};

	static closeModal = (
		e: any,
		setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		e.stopPropagation();
		if (e.target.id === "modal-bg") {
			setIsModalOpen(false);
		}
	};

	static isAuthenticated = (user: any, tokens: any) => {
		if (user && tokens) {
			return true;
		}
		return false;
	};

	static isAuthorized = (error: any) => {
		if (error.response.status === 401) {
			return false;
		}
		return true;
	};

	static notFound = (error: any) => {
		if (error.response.status === 404) {
			return true;
		}
		return false;
	};

	static logout = (navigate: any) => {
		deleteLocalStorage("user");
		deleteLocalStorage("tokens");
		deleteLocalStorage("cart");
		navigate(AppUrls.loginRoute);
	};
}
