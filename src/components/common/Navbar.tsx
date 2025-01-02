import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppUrls } from '../../utils/constants';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
	location: any;
}

export default function Navbar({ location }: NavbarProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Utility to set active link color
	const linkClasses = (path: string) =>
		`font-medium text-md ${location.pathname === path ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`;

	return (
		<header className="bg-white shadow-lg w-full">
			<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
				<nav className="flex justify-between items-center">
					<Link to={AppUrls.homeRoute} className="text-xl font-medium text-gray-900">
						Bank Statement Analyzer
					</Link>
					<div className="hidden md:flex items-center space-x-6">
						<Link to={AppUrls.homeRoute} className={linkClasses(AppUrls.homeRoute)}>
							Home
						</Link>
						<Link to={AppUrls.aboutRoute} className={linkClasses(AppUrls.aboutRoute)}>
							About
						</Link>
						<Link to={AppUrls.contactRoute} className={linkClasses(AppUrls.contactRoute)}>
							Contact
						</Link>
						<Link to={AppUrls.fileUploadRoute} className={`px-3 py-2 rounded-md bg-primary-600 text-white`}>
							Analyze Statement
						</Link>
					</div>
					<button
						className="md:hidden text-gray-600 hover:text-primary-600 focus:outline-none"
						onClick={toggleMenu}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</nav>
			</div>
			{isMenuOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link to={AppUrls.homeRoute} className={linkClasses(AppUrls.homeRoute)}
							onClick={toggleMenu}>
							Home
						</Link>
						<Link to={AppUrls.aboutRoute} className={linkClasses(AppUrls.aboutRoute)}
							onClick={toggleMenu}>
							About
						</Link>
						<Link to={AppUrls.contactRoute} className={linkClasses(AppUrls.contactRoute)}
							onClick={toggleMenu}>
							Contact
						</Link>
						<Link to={AppUrls.fileUploadRoute} className={linkClasses(AppUrls.fileUploadRoute)}
							onClick={toggleMenu}>
							Analyze Statement
						</Link>
					</div>
				</div>
			)}
		</header >
	);
}
