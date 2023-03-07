import React from 'react';

const Title = ({title}) => {
	const titleStyle={
		padding: "60px 0",
		textAlign: "center",
		fontSize: "24px"
	}
	return (
		<div style={titleStyle}>
			<h2>{title}</h2>
		</div>
	);
};

export default Title;