import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FileUpload from './pages/FileUpload'
import ResultsPage from './pages/ResultsPage'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import ErrorPage from './pages/ErrorPage'
import { Toaster } from './components/ui/toaster'

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow fixed w-full">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-bold text-gray-900 text-center">Bank Statement Analyzer</h1>
            </div>
          </header>
          <main className='pt-12 bg-primary-100'>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
              <Routes>
                <Route path="/" element={<FileUpload />} />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="/*" element={<ErrorPage />} />
              </Routes>
            </div>
            <Toaster />
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  )
}