import heroImg from "../assets/images/hero.jpg";

// Application Constants
export class AppConstants {
	static appName = "Bank Statement Analyzer";

	static MAX_FILES = 10;
	static MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
}

// API Routes
export class ApiRoutes {
	static BASE_URL = import.meta.env.VITE_API_BASE_URL;

	static ALLOWED_BANKS_URL = "/allowed-banks";
	static PDF_TO_CSV_URL = "/pdf-to-csv/convert";
}

// App URLs
export class AppUrls {
	static homeRoute = "/";
	static fileUploadRoute = "/upload";

	static aboutRoute = "/about-us";
	static contactRoute = "/contact-us";

	static errorRoute = "/error";
}

export class ApiAuth {
	static authUsername = import.meta.env.VITE_AUTH_USERNAME;
	static authPassword = import.meta.env.VITE_AUTH_PASSWORD;
}

// Assets
export class Assets {
	static heroImg = heroImg;
}

export class Messages {
	static GENERIC_SUCCESS_MESSAGE = "Process completed successfully";
	static GENERIC_ERROR_MESSAGE = "Failed to complete the process";
}
