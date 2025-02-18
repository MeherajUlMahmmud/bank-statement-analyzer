import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import { Toaster } from './components/ui/toaster'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import FileUpload from './pages/FileUpload'
import AboutPage from './pages/AboutUsPage'
import ContactPage from './pages/ContactUsPage'
import { AppUrls } from './configs/constants'
import ErrorPage from './pages/common/ErrorPage'

export default function App() {
    return (
        <ErrorBoundary>
            <Router>
                <Layout>
                    <Routes>
                        <Route path={AppUrls.homeRoute} element={<HomePage />} />
                        <Route path={AppUrls.fileUploadRoute} element={<FileUpload />} />
                        <Route path={AppUrls.aboutRoute} element={<AboutPage />} />
                        <Route path={AppUrls.contactRoute} element={<ContactPage />} />
                        <Route path="/*" element={<ErrorPage />} />
                    </Routes>
                </Layout>
                <Toaster />
            </Router>
        </ErrorBoundary>
    )
}
