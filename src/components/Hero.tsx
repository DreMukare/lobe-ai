import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeroContainer = styled.div`
	margin-top: 3em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const HeroTitle = styled.h1`
	font-size: 5em;
	font-weight: 900;
`;

const HeroTitleColored = styled.span`
	color: #04ddb2;
`;

const HeroBody = styled.p`
	font-size: 2em;
	font-weight: 400;
	margin-top: -1em;
	width: 60%;
`;

const Hero = () => {
	const location = useLocation();
	const currentRoute: any = location.pathname;

	if (!currentRoute || currentRoute === '/' || currentRoute === '/overview')
		return null;

	const upperCaseCurrentRoute =
		currentRoute.slice(1)[0].toUpperCase() + currentRoute.slice(2);

	return (
		<HeroContainer>
			<HeroTitle>
				Lobe <HeroTitleColored>{upperCaseCurrentRoute}</HeroTitleColored>
			</HeroTitle>
			{currentRoute === '/examples' && (
				<HeroBody>
					One tool, endless possibilities. Discover all the machine learning
					models you can train with Lobe.
				</HeroBody>
			)}
			{currentRoute === '/tour' && (
				<HeroBody>
					Build your first machine learning model in ten minutes. No code or
					experience required.
				</HeroBody>
			)}
			{currentRoute === '/blog' && (
				<HeroBody>
					Read about our newest releases, and get tips on how to create custom
					machine learning models with Lobe.
				</HeroBody>
			)}
		</HeroContainer>
	);
};

export default Hero;
