import './style/App.css';
import './style/Responsive.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Hero from './component/Hero';
import ShortLinks from './component/ShortenLinks';
import About from './component/About';
import Banner from './component/Banner';

const getLocalStorage = JSON.parse(localStorage.getItem('linkHistory')) || [];

function App() {
	const [error, setError] = useState('links_input-container');
	const [errorMessage, setErrorMessage] = useState('error_message hidden');
	const [linkToShrink, setLinkToShrink] = useState('');
	const [linkHistory, setLinkHistory] = useState(getLocalStorage);
	const [hasValue, setHasValue] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const inputValue = event.target[0].value;

		if (!inputValue) {
			setError('links_input-container error');
			setErrorMessage('error_message');
		} else {
			setError('links_input-container');
			setErrorMessage('error_message hidden');
			setLinkToShrink(inputValue);
			event.target.reset();
		}
	};

	useEffect(() => {
		const getData = async () => {
			try {
				const request = await axios.get(
					`https://api.shrtco.de/v2/shorten?url=${linkToShrink}`
				);
				const response = await request.data.result.full_short_link;
				if (response) {
					setHasValue(true);
					setLinkHistory((prevHistory) => [
						...prevHistory,
						{
							longLink: linkToShrink,
							shortedLink: response,
							buttonText: 'Copy',
						},
					]);
				} else {
					console.log('error');
				}
			} catch (error) {
				console.log(error.message);
			}
		};
		getData();
	}, [linkToShrink]);

	const handleButtonClick = (key) => {
		navigator.clipboard.writeText(linkHistory[key].shortedLink);
		const updatedHistory = [...linkHistory];
		updatedHistory[key].buttonText = 'Copied!';
		setLinkHistory(updatedHistory);
	};

	useEffect(() => {
		localStorage.setItem('linkHistory', JSON.stringify(linkHistory));
	}, [linkHistory]);

	return (
		<div className='App'>
			<Header />
			<Hero />
			<main>
				<ShortLinks
					error={error}
					handleSubmit={handleSubmit}
					errorMessage={errorMessage}
					hasValue={hasValue}
					linkHistory={linkHistory}
					handleButtonClick={handleButtonClick}
				/>
				<About />
			</main>
			<Banner />
			<Footer />
		</div>
	);
}

export default App;
