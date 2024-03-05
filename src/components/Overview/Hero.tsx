import React, { useEffect } from 'react';
import Container from '../Container';
import DownloadBtn from '../DownloadBtn';

const text = [
	'identify plants',
	'see gestures',
	'count reps',
	'feel emotion',
	'sense colors',
	'check safety',
];
const Hero = () => {
	const [animatedText, setAnimatedText] = React.useState(text[0]);

	useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			setAnimatedText(text[i]);
			i = (i + 1) % text.length;
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Container>
			<div>
				<h1>Train apps to</h1>
				<h1>{animatedText}</h1>
				<p>
					Lobe helps you train machine learning models with a free, easy to use
					tool.
				</p>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '20em',
					}}
				>
					<DownloadBtn />
					<button>Watch Tour</button>
				</div>
			</div>
			<div></div>
		</Container>
	);
};

export default Hero;
