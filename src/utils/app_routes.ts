class AppRoutes {
	public static homeRoute = "/";
	public static useCaseRoute = "/#use-cases";
	public static featuresRoute = "/#features";
	public static signInRoute = "/sign-in";
	public static dashboardRoute = "/dashboard";
	public static getPdfDetailsRoute = (id: string) => `/pdf-details/${id}`;
}

export default AppRoutes;
