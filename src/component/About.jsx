import brandRecognitionIcon from '../assets/images/icon-brand-recognition.svg';
import detailedRecordsIcon from '../assets/images/icon-detailed-records.svg';
import fullyCustomizableIcon from '../assets/images/icon-fully-customizable.svg';

const About = () => {
	return (
		<section className='about'>
			<div className='about_heading'>
				<h2>Advanced Statistics</h2>
				<p>
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</div>
			<div className='about_col-container'>
				<div className="horizontal_line"></div>
				<div className='col col_one'>
					<img src={brandRecognitionIcon} alt='icon-brand-recognition' />
					<h3>Brand Recognition</h3>
					<p>
						Boost your brand recognition with each click. Generic links don't
						mean a thing. Branded links help instil confidence in your content.
					</p>
				</div>
				<div className='col col_two'>
					<img src={detailedRecordsIcon} alt='icon-detailed-records' />
					<h3>Detailed Records</h3>
					<p>
						Gain insights into who is clicking your links. Knowing when and
						where people engage with your content helps inform better decisions.
					</p>
				</div>
				<div className='col col_three'>
					<img src={fullyCustomizableIcon} alt='icon-fully-customizable' />
					<h3>Fully Customizable</h3>
					<p>
						Improve brand awareness and content discoverability through
						customizable links, supercharging audience engagement.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
