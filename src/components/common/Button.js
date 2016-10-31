import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={props.onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{props.children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		paddingHorizontal: 5
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',  // Boldness
		paddingVertical: 10  // Space above and below
	}
};

export { Button }; //  Must export like this when mass importing to index.js
