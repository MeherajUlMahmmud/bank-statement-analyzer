import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppUrls } from '../utils/constants';
import Footer from '@/components/common/Footer';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation(); // Get the current path

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Utility to set active link color
	const linkClasses = (path: string) =>
		`font-semibold ${location.pathname === path ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`;

	return (
		<div className="min-h-screen flex flex-col bg-gray-100">
			<header className="bg-white shadow-lg w-full">
				<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
					<nav className="flex justify-between items-center">
						<Link to={AppUrls.homeRoute} className="text-2xl font-bold text-gray-900">
							Bank Statement Analyzer
						</Link>
						<div className="hidden md:flex space-x-4">
							<Link to={AppUrls.homeRoute} className={linkClasses(AppUrls.homeRoute)}>
								Home
							</Link>
							<Link to={AppUrls.aboutRoute} className={linkClasses(AppUrls.aboutRoute)}>
								About
							</Link>
							<Link to={AppUrls.contactRoute} className={linkClasses(AppUrls.contactRoute)}>
								Contact
							</Link>
							<Link to={AppUrls.fileUploadRoute} className={linkClasses(AppUrls.fileUploadRoute)}>
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
							<Link to={AppUrls.homeRoute} className={linkClasses(AppUrls.homeRoute)} onClick={toggleMenu}>
								Home
							</Link>
							<Link to={AppUrls.aboutRoute} className={linkClasses(AppUrls.aboutRoute)} onClick={toggleMenu}>
								About
							</Link>
							<Link to={AppUrls.contactRoute} className={linkClasses(AppUrls.contactRoute)} onClick={toggleMenu}>
								Contact
							</Link>
							<Link to={AppUrls.fileUploadRoute} className={linkClasses(AppUrls.fileUploadRoute)} onClick={toggleMenu}>
								Analyze Statement
							</Link>
						</div>
					</div>
				)}
			</header>
			<main className="flex-grow">
				{children}
			</main>
			<Footer />
		</div>
	);
}
