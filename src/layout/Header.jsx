import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const [isClick, setIsClick] = useState(true);
	const [showNav, setShowNav] = useState('mobile_nav-container hidden');

	const handleClick = () => {
		setIsClick(!isClick);
		console.log(isClick);
		if (!isClick) {
			setShowNav('mobile_nav-container hidden');
		} else {
			setShowNav('mobile_nav-container');
		}
	};

	return (
		<header>
			<div className='logo_container'>
				<a href='https://shrtco.de/tools/shorten'>
					<img src={logo} alt='shortly-logo' />
				</a>

				<div className='nav_links'>
					<ul>
						<li>Features</li>
						<li>Pricing</li>
						<li>Resources</li>
					</ul>
				</div>
			</div>

			<div className='bars_container' onClick={handleClick}>
				{isClick ? (
					<FontAwesomeIcon icon={faBars} size='2xl' />
				) : (
					<FontAwesomeIcon icon={faRectangleXmark} size='2xl' />
				)}
			</div>

			<div className={showNav}>
				<div className='mobile_nav-links'>
					<ul>
						<li>Features</li>
						<li>Pricing</li>
						<li>Resources</li>
					</ul>
				</div>
				<div className='mobile_login_signUp'>
					<div className='login'>Login</div>
					<div className='signUp'>Sing Up</div>
				</div>
			</div>

			<div className='login_signUp-container'>
				<div className='login'>Login</div>
				<div className='signUp'>Sing Up</div>
			</div>
		</header>
	);
};

export default Header;
