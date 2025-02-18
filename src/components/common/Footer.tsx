import { AppUrls } from '@/configs/constants'
import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-12">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">Bank Statement Analyzer</h3>
						<p>Empowering you with financial insights.</p>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							<li><Link to={AppUrls.homeRoute} className="hover:text-primary-300">Home</Link></li>
							<li><Link to={AppUrls.fileUploadRoute} className="hover:text-primary-300">Analyze Statement</Link></li>
							<li><Link to={AppUrls.aboutRoute} className="hover:text-primary-300">About Us</Link></li>
							<li><Link to={AppUrls.contactRoute} className="hover:text-primary-300">Contact</Link></li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">Legal</h4>
						<ul className="space-y-2">
							<li><Link to="/terms" className="hover:text-primary-300">Terms of Service</Link></li>
							<li><Link to="/privacy" className="hover:text-primary-300">Privacy Policy</Link></li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
						<div className="flex space-x-4">
							<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-300">
								<TwitterIcon />
							</a>
							<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-300">
								<FacebookIcon />
							</a>
							<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-300">
								<InstagramIcon />
							</a>
							<a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-300">
								<GithubIcon />
							</a>
						</div>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t border-gray-700 text-center">
					<p>&copy; 2023 Bank Statement Analyzer. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer