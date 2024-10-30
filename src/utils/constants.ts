// Application Constants
export class AppConstants {
	static appName = "Renuka Mart";
	static appTitle = "QuickQuiz - Your Ultimate Project Management Tool";
	static appDescription =
		"QuickQuiz is a project management tool that allows you to organize your tasks and projects in a visual way. Create boards, lists, and cards to manage your work and collaborate with your team.";
	static email = "renukamart@yahoo.com";
	static phone = "+8801765391918";
	static facebook = "https://www.facebook.com/mart.renuka";
	static instagram = "https://www.instagram.com/renukamart";
	static twitter = "https://twitter.com/renukamart";
	static whatsapp = "https://wa.me/8801312275636";

	static genericErrorMessage =
		"Something went wrong. Please try again later.";
}

// API Routes
export class ApiRoutes {
	static BASE_URL = "http://localhost:8000/api";
}

// App URLs
export class AppUrls {
	static loginRoute = "/auth/login";
	static signUpRoute = "/auth/sign-up";
	static resetPasswordRoute = "/auth/reset-password";
	static newPasswordRoute = "/auth/new-password";
	static logoutRoute = "/auth/logout";

	static homeRoute = "/";
	static cartRoute = "/cart";
	static checkoutRoute = "/checkout";

	static productsRoute = "/products";
	static productDetailsRoute = "/products/:productId";
	static buildProductDetailsRoute = (productId: string) =>
		`/products/${productId}`;

	static categoriesRoute = "/categories";
	static categoryDetailsPage = "categories/:id";
	static buildCategoryDetailsPage = (categoryId: string) =>
		`/categories/${categoryId}`;

	static faqRoute = "/faqs";
	static aboutUsRoute = "/about-us";
	static contactUsRoute = "/contact-us";
	static policyRoute = "/privacy-policy";
	static termsRoute = "/terms-and-conditions";
	static cookiePolicyRoute = "/cookie-policy";

	static profileRoute = "/profile";
	static updateProfileRoute = "/profile/update";

	static errorRoute = "/error";
}

// Assets
export class Assets {
	static logo = "/src/assets/logo.png";
}
