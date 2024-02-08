import styled from 'styled-components';
import Video from '../assets/Video.jpg';

const ImageContainer = styled.button`
	position: absolute;
	width: 840px;
	height: 473px;
	border: none;
	cursor: pointer;
	background: none;
	transition: width 0.35s, height 0.35s;
	transition-timing-function: ease-in-out;

	&:hover {
		width: 940px;
		height: 573px;
	}
`;

const VideoImage = styled.img`
	max-width: 100%;
	height: auto;
	border-radius: 25px;
	transition: box-shadow 0.35s;
	transition-timing-function: ease-in-out;

	&:hover {
		box-shadow: 1px 25px 100px 5px rgba(51, 51, 51, 0.3);
	}
`;

const TourContent = (props: {
	modalOpen: boolean;
	setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { setModalOpen, modalOpen } = props;

	return (
		<ImageContainer
			onClick={() => {
				setModalOpen(!modalOpen);
			}}
		>
			<VideoImage
				src={Video}
				alt="Learn more about Lobe by watching our tour video."
				loading="lazy"
			/>
		</ImageContainer>
	);
};

export default TourContent;
