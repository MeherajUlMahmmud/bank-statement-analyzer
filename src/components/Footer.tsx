import React from 'react';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="footer__content">
				<p>&copy; {new Date().getFullYear()} Dutch-bangla Bank PLC. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
