import shortenBg from '../assets/images/bg-shorten-desktop.svg';

const ShortenLinks = ({
	error,
	handleSubmit,
	errorMessage,
	hasValue,
	linkHistory,
	handleButtonClick,
}) => {
	return (
		<section className='shorten_links'>
			<div className={error}>
				<img src={shortenBg} alt='bg-shorten' />
				<form onSubmit={handleSubmit}>
					<input type='url' name='url' placeholder='Shorten a link here...' />
					<button type='submit'>Shorten It!</button>
				</form>
			</div>

			<p className={errorMessage}>Please add a link</p>
			<div className='shorted_links-container'>
				{hasValue && (
					<ul>
						{linkHistory.map((links, key) => (
							<li key={key}>
								<div className='long_links'>
									<span>{links.longLink}</span>
								</div>
								<div className='shorted_links_btn-container'>
									<span>{links.shortedLink}</span>
									<button type='button' onClick={() => handleButtonClick(key)}>
										{links.buttonText}
									</button>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	);
};

export default ShortenLinks;
