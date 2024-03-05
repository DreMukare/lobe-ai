const Container = (props: { children: React.ReactNode; alt?: boolean }) => {
	return (
		<div
			style={{
				height: '90vh',
				backgroundColor: props.alt ? '#F2F3F5' : '#fff',
			}}
		>
			{props.children}
		</div>
	);
};

export default Container;
