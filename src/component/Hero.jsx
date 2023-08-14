import illustrationWorking from '../assets/images/illustration-working.svg';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='left_col'>
				<h1>More than just short links</h1>
				<p>
					Build your brand's recognition and get detailed insights on how you
					links are performing.
				</p>
				<button type='button'>Get Started</button>
			</div>
			<div className='right_col'>
				<img src={illustrationWorking} alt='illustration-working' />
			</div>
		</section>
	);
};

export default Hero;
