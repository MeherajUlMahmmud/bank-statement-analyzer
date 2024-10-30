import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FileUpload from './pages/FileUpload'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import ErrorPage from './pages/ErrorPage'
import { Toaster } from './components/ui/toaster'
import { AppUrls } from './utils/constants'
import HomePage from './pages/HomePage'
import Footer from './components/common/Footer'

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow-lg w-full">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-bold text-gray-900 text-center">Bank Statement Analyzer</h1>
            </div>
          </header>
          {/* <main className='mb-6 bg-primary-100'> */}
          {/* <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-20"> */}
          <Routes>
            <Route path={AppUrls.homeRoute} element={<HomePage />} />
            <Route path={AppUrls.fileUploadRoute} element={<FileUpload />} />

            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          {/* </div>
          </main> */}
          <Toaster />
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  )
}