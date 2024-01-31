import { useState } from 'react';
import styled from 'styled-components';
import DownloadBtn from './DownloadBtn';

const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90%;
	margin: 0 auto;
`;

const NavLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 3em;
`;

const NavLink = styled.a<{ $active: boolean }>`
	font-size: 18px;
	color: ${(props) => (props.$active ? '#333333' : '#767676')};
	font-weight: 500;
	cursor: pointer;
`;

const Logo = styled.h2`
	font-size: 24px;
	color: #333333;
`;

function Navbar() {
	// TODO: Change to Overview once that view is built and react-router is setup
	const [activeLink, setActiveLink] = useState('Tour');
	const linkTitles = ['Overview', 'Examples', 'Tour', 'Blog', 'Help'];

	return (
		<Nav>
			<Logo>Lobe</Logo>
			<NavLinks>
				{linkTitles.map((title: string, idx: number) => {
					return (
						<NavLink
							key={idx}
							$active={title === activeLink}
							onClick={() => setActiveLink(title)}
						>
							{title}
						</NavLink>
					);
				})}
			</NavLinks>
			<DownloadBtn />
		</Nav>
	);
}

export default Navbar;
