import styled from 'styled-components';
import Layout from '../components/Layout';
import TourContent from '../components/TourContent';

const TourContentContainer = styled.div`
	position: relative;
	width: 940px;
	height: 573px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Tour = () => {
	return (
		<Layout>
			<TourContentContainer
				style={{ position: 'relative', width: '940px', height: '573px' }}
			>
				<TourContent />
			</TourContentContainer>
		</Layout>
	);
};

export default Tour;
