import { Link } from 'react-router-dom'
import { AppUrls } from '../utils/constants'
import Footer from '@/components/common/Footer'

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="min-h-screen flex flex-col bg-gray-100">
			<header className="bg-white shadow-lg w-full">
				<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
					<nav className="flex justify-between items-center">
						<Link to={AppUrls.homeRoute} className="text-2xl font-bold text-gray-900">
							Bank Statement Analyzer
						</Link>
						<div className="space-x-4">
							<Link to={AppUrls.homeRoute} className="text-gray-600 hover:text-primary-600 font-semibold">Home</Link>
							<Link to={AppUrls.aboutRoute} className="text-gray-600 hover:text-primary-600 font-semibold">About</Link>
							<Link to={AppUrls.contactRoute} className="text-gray-600 hover:text-primary-600 font-semibold">Contact</Link>
							<Link to={AppUrls.fileUploadRoute} className="text-primary-600 hover:text-primary-700 font-semibold">
								Analyze Statement
							</Link>
						</div>
					</nav>
				</div>
			</header>
			<main className="flex-grow">
				{children}
			</main>
			<Footer />
		</div>
	)
}