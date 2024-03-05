import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';

const DropDownContainer = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	padding-bottom: 1em;
	width: 35em;
`;

// const DropDownButton = styled.button`
// 	border: 1px solid red;
// 	width: 100%;
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// `;

const TitleText = styled.p`
	font-weight: bold;
`;

const Dropdown = ({
	titleText,
	content,
}: {
	titleText: string;
	content: React.ReactNode;
}) => {
	const [visible, setVisible] = useState(false);

	return (
		<DropDownContainer>
			<button
				style={{
					border: 'none',
					width: '100%',
					backgroundColor: 'white',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					fontSize: '1em',
					paddingTop: '1em',
				}}
				onClick={() => setVisible(!visible)}
			>
				<TitleText>{titleText}</TitleText>
				<FontAwesomeIcon icon={!visible ? faChevronDown : faChevronUp} />
			</button>

			<div>{visible && content}</div>
		</DropDownContainer>
	);
};

export default Dropdown;
