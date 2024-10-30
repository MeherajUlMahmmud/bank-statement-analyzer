import { AppUrls } from "@/utils/constants";

const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-3xl font-bold mb-4">
          <span>404</span> Page Not Found
        </h2>
        <h2 className="text-xl font-normal mt-4 text-red-500">
          Sorry, the page you are looking for does not exist.
        </h2>
        <h3 className="text-xl font-normal mt-4">
          You can always go back to the
          <a href={AppUrls.homeRoute} className="text-indigo-600 hover:text-indigo-500 ml-1 underline">
            Home Page
          </a>.
        </h3>
      </div>
    </>
  );
};

export default ErrorPage;
