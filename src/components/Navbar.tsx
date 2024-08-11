import React from 'react';
import '../styles/Navbar.scss';
import { homeRoute } from '../utils/app_routes';
import { appName } from '../utils/constants';

const Navbar: React.FC = () => {
	return (
		<nav className="navbar">
			<div className="navbar__logo">
				<a href={homeRoute}>
					{appName}
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
