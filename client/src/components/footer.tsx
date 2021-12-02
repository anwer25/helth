import React from 'react';
import logo1 from '../images/icons/logo1.svg';
import logo2 from '../images/icons/logo2.svg';

// @ts-ignore

const Footer: React.FC = () => (
	<footer className="d-flex justify-content-center align-items-center fixed-bottom">
		<img className="logo" src={logo1} alt="logo1" />
		<img className="logo" src={logo2} alt="logo2" />
	</footer>
);

export default Footer;
