// Application Constants
export class AppConstants {
	static appName = "Bank Statement Analyzer";

	static genericErrorMessage =
		"Something went wrong. Please try again later.";
}

// API Routes
export class ApiRoutes {
	static BASE_URL = import.meta.env.VITE_API_BASE_URL;

	static ALLOWED_BANKS_URL = "/allowed-banks";
	static PDF_TO_CSV_URL = "/pdf-to-csv/convert";
}

export class ApiAuth {
	static authUsername = import.meta.env.VITE_AUTH_USERNAME;
	static authPassword = import.meta.env.VITE_AUTH_PASSWORD;
}

// App URLs
export class AppUrls {
	static loginRoute = "/auth/login";
	static signUpRoute = "/auth/sign-up";
	static resetPasswordRoute = "/auth/reset-password";
	static newPasswordRoute = "/auth/new-password";
	static logoutRoute = "/auth/logout";

	static homeRoute = "/";
	static fileUploadRoute = "/upload";

	static errorRoute = "/error";
}

// Assets
export class Assets {
	static logo = "/src/assets/logo.png";
}
