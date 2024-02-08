import styled from 'styled-components';
import Layout from '../components/Layout';

const ArticlesContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const Blog = () => {
	return (
		<Layout>
			<ArticlesContainer></ArticlesContainer>
		</Layout>
	);
};

export default Blog;
