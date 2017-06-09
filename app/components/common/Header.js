// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
// **because header is a 'child' Component, it is handed the "props" Object
const Header = (props) => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{props.headerText}</Text>
		</View>
	);
};

// Styles will be in every component
const styles = {
	viewStyle: {
		backgroundColor: '#415DAE',
		justifyContent: 'center', // pushes from top to bottom (flex-start -> flex-end)
		alignItems: 'center', // // pushes from left to right (flex-start -> flex-end)
		height: 60,
		paddingTop: 15,
		position: 'relative'
	},
	textStyle: {
		color: '#FFF',
		fontSize: 20
	}
};

// Make the component available to other parts of the app
// This Component is not AppRegistry, so only needs to be exported.

export { Header };  //  Must export like this when mass importing to index.js
