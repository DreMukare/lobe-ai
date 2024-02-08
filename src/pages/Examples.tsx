import styled from 'styled-components';
import Layout from '../components/Layout';

const ExamplesContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const Examples = () => {
	return (
		<Layout>
			<ExamplesContainer></ExamplesContainer>
		</Layout>
	);
};

export default Examples;
