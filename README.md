# Bank Statement Analyzer - Frontend

This is the frontend application for the Bank Statement Analyzer, a web-based tool that allows users to upload and analyze their bank statements in a streamlined and user-friendly interface. Built with modern technologies like **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Shadcn components**, this project delivers a high-performance and responsive UI.

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Project Setup](#project-setup)
-   [Environment Variables](#environment-variables)
-   [Project Structure](#project-structure)
-   [Usage](#usage)
-   [License](#license)

## Features

-   **Bank Statement Upload**: Users can upload their bank statements in supported formats.
-   **Data Analysis**: Frontend integration with backend APIs for analyzing statement data.
-   **Responsive Design**: Seamless experience across devices using Tailwind CSS.
-   **Reusable Components**: Custom components via Shadcn library for consistency and modularity.
-   **Environment Configurations**: Environment variables for secure configuration.

## Technologies Used

-   **React** with **Vite** - Fast and optimized development experience.
-   **TypeScript** - Strong typing for improved code quality and maintainability.
-   **Tailwind CSS** - Utility-first CSS for responsive and customizable design.
-   **Shadcn Components** - Reusable UI components to streamline UI consistency.

## Project Setup

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later) and [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/MeherajUlMahmmud/bank-statement-analyzer.git
    cd bank-statement-analyzer
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

## Environment Variables

Set up your environment variables in a `.env` file at the root of the project. These might include:

-   `VITE_API_BASE_URL`: The base URL for API endpoints.
-   `VITE_AUTH_USERNAME`: The username for API authentication.
-   `VITE_AUTH_PASSWORD`: The password for API authentication.

Example `.env`:

```plaintext
VITE_API_BASE_URL=https://api.yourapp.com
VITE_AUTH_USERNAME=basic-auth-username
VITE_AUTH_PASSWORD=basic-auth-password
```

## Project Structure

-   **src/**: Source code for the application.
    -   **components/**: Reusable React components.
    -   **pages/**: Page-level components for routing.
    -   **utils/**: Utility functions and constants.

## Usage

This app is designed to be used as the frontend interface of the Bank Statement Analyzer. To use the full functionality, ensure it’s connected to the respective backend service.

1. Launch the app:

    ```bash
    npm run dev
    ```

2. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
