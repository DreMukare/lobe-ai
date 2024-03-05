import React, { useEffect } from 'react';
import Container from '../Container';
import DownloadBtn from '../DownloadBtn';
import styled from 'styled-components';

const WatchTourButton = styled.button`
	border-radius: 100px;
	color: #04ddb2;
	background-color: #fff;
	font-weight: 700;
	text-align: center;
	border: none;
	height: 3em;
	padding: 0 1.5em;
	cursor: pointer;
	font-size: 1.2em;
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 2em;
	button {
		transition: 0.25s linear;
	}

	button:hover {
		transform: scale(1.2);
	}
`;

const text = [
	'identify plants',
	'see gestures',
	'count reps',
	'feel emotion',
	'sense colors',
	'check safety',
];
const Hero = () => {
	let i = 0;
	const [animatedText, setAnimatedText] = React.useState<string>(text[i]);

	useEffect(() => {
		const interval = setInterval(() => {
			setAnimatedText(text[i]);
			i = (i + 1) % text.length;
		}, 3500);
		return () => clearInterval(interval);
	}, []);

	return (
		<Container>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row-reverse',
					justifyContent: 'space-between',
					alignItems: 'center',
					height: '100%',
					padding: '0 2em',
				}}
			>
				<video
					src="https://www.lobe.ai/assets/hero/Home.mp4"
					autoPlay={true}
					loop={true}
					title="Video showing examples of ways to use Lobe to easily create machine learning models."
					style={{
						width: '32em',
						height: 'auto',
					}}
					muted
				/>

				<div
					style={{
						width: '70em',
					}}
				>
					<h1
						style={{
							fontSize: '4em',
							fontWeight: 700,
							margin: 0,
						}}
					>
						Train apps to
					</h1>
					<h1
						style={{
							fontSize: '4em',
							fontWeight: 700,
							margin: 0,
							marginTop: '-0.1em',
							lineHeight: '1em',
							color: '#04ddb2',
						}}
					>
						{animatedText}
					</h1>
					<p
						style={{
							fontSize: '1.5em',
							lineHeight: '1.5em',
							fontWeight: '300',
						}}
					>
						Lobe helps you train machine learning models with a free, easy to
						use tool.
					</p>
					<ButtonContainer>
						<DownloadBtn />
						<WatchTourButton>Watch Tour</WatchTourButton>
					</ButtonContainer>
				</div>
			</div>
		</Container>
	);
};

export default Hero;
