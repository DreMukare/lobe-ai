const Container = (props: { children: React.ReactNode }) => {
	return (
		<div
			style={{
				height: '100vh',
			}}
		>
			{props.children}
		</div>
	);
};

export default Container;
