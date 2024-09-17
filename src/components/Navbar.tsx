import React from 'react';
import { homeRoute } from '../utils/app_routes';
import { appName } from '../utils/constants';

const Navbar: React.FC = () => {
	return (
		<nav className="flex items-center justify-center w-full h-16 bg-gray-800 px-4 py-2 shadow-md">
			<div className="flex items-center justify-center w-full h-full">
				<a href={homeRoute} className='font-medium text-white text-xl'>
					{appName}
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
