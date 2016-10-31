import React, { Component } from 'react';
import { LoginButton } from 'react-native-fbsdk';
import { View } from 'react-native';
import { Header, styles } from './components/common'; // Actually importing from ./components/common/index.js, but index is automattic


class App extends Component {
	render() {
		return (
			<View style={{ backgroundColor: '#4099FF', flex: 1 }}>
				<Header headerText="Facebook Login" />
				<View style={styles.containerCenter}>
					<LoginButton />
				</View>
			</View>
		);
	}
}

export default App;
