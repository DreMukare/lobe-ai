import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';
import Hero from './Hero';
import { useLocation } from 'react-router-dom';

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	position: relative;
`;

const InnerLayoutContainer = styled.div`
	max-width: 70%;
`;

function Layout(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<LayoutContainer>
			<Navbar />
			<Hero />
			<InnerLayoutContainer>
				{children}
				<Footer />
			</InnerLayoutContainer>
		</LayoutContainer>
	);
}

export default Layout;
