import styled from 'styled-components';
import DownloadBtn from './DownloadBtn';

const FooterContainer = styled.footer`
	width: inherit;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	top: 100%;
`;

const CallToAction = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin-bottom: 3em;
`;

const CallToActionText = styled.h1`
	font-size: 3.5em;
	font-weight: 900;
	width: 70%;
	color: #;
`;

const Hr = styled.hr`
	width: 70%;
	height: 1px;
	background-color: #767676;
`;

const FooterBottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

const FooterColumnHeader = styled.h3`
	font-size: 1.5em;
	font-weight: 700;
	color: #333333;
`;

const FooterColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2em;
`;

const FooterColumnLink = styled.div`
	text-decoration: none;
	cursor: pointer;
`;

const SocialMediaLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2em;
`;

const SocialMediaLink = styled.a`
	border-radius: 100%;
	background-color: #04ddb2;
	color: #fff;
	cursor: pointer;
`;

const Footer = () => {
	const columnData = [
		{ title: 'About', links: ['Download', 'Overview', 'Examples', 'Blog'] },
		{
			title: 'General',
			links: ['Notice', 'License', 'Press Inquiry', 'Press Images'],
		},
		{ title: 'Resources', links: ['Help', 'Tour', 'Contact', 'Privacy'] },
	];

	return (
		<FooterContainer>
			<CallToAction>
				<CallToActionText>Train your app with Lobe</CallToActionText>
				<DownloadBtn />
			</CallToAction>
			<Hr />
			<FooterBottom>
				<FooterColumn>
					<FooterColumnHeader>Lobe</FooterColumnHeader>
					<p>A product by Microsoft.</p>
					<p></p>
					<p></p>
				</FooterColumn>
				{columnData.map((column, idx: number) => {
					return (
						<FooterColumn key={idx}>
							<FooterColumnHeader>{column.title}</FooterColumnHeader>
							{column.links.map((link, idx: number) => {
								return <FooterColumnLink key={idx}>{link}</FooterColumnLink>;
							})}
						</FooterColumn>
					);
				})}
			</FooterBottom>
		</FooterContainer>
	);
};

export default Footer;
