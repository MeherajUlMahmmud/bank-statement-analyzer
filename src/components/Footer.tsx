import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="flex justify-center items-center w-full h-16 bg-gray-800 px-4 py-2 shadow-md">
			<div className="flex items-center justify-center w-full h-full">
				<p>&copy; {new Date().getFullYear()} Dutch-bangla Bank PLC. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
