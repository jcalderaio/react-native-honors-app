/**
 * Day 5
 * find my location
 */
'use strict';

import React,{ Component } from 'react';
import { Image,MapView,StatusBar,StyleSheet,Text,TouchableHighlight,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons.js';
import Util from './utils';

export class MapScreen extends Component {
  static defaultProps = {
      mapType: 'standard',
      showsUserLocation: false,
      followUserLocation: false,
  };

  static propTypes = {
      mapType: React.PropTypes.oneOf(['standard', 'satellite', 'hybrid']),
      // mapStyle: View.PropTypes.style,
      showsUserLocation: React.PropTypes.bool.isRequired,
      followUserLocation: React.PropTypes.bool.isRequired,
  };

  constructor() {
    super();
    this.state = {
      isFirstLoad: true,
      mapRegion: undefined,
      annotations: []
    };
  }

  _getAnnotations(region) {
    return [{
      longitude: region.longitude,
      latitude: region.latitude,
      title: 'You Are Here',
    }];
  }

  _onRegionChangeComplete(region) {
    if (this.state.isFirstLoad) {
      this.setState({
        annotations: this._getAnnotations(region),
        isFirstLoad: false,
      });
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <MapView
          style={this.props.mapStyle}
          mapType = {this.props.mapType}
          showsUserLocation={this.props.showsUserLocation}
          followUserLocation={this.props.followUserLocation}
          onRegionChangeComplete={(region) => this._onRegionChangeComplete(region)}
          region={this.state.mapRegion}
        />
      </View>
    )
  }
}

export default class extends Component{
  constructor() {
    super();
    this.state = {
      showGeo:false
    };
  }

  componentDidMount() {
    StatusBar.setBarStyle(0);
    this.setState({
      showGeo: true
    });
  }

  _getLocation() {

  }

	render() {
		return(
			<View style={styles.container}>
        <MapScreen mapTyle="standard" mapStyle={styles.map} showsUserLocation={this.state.showGeo} followUserLocation={this.state.showGeo}></MapScreen>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  map:{
    width: Util.size.width,
    height: Util.size.height
  },
  btn:{
    backgroundColor:"#00a803",
    width: Util.size.width-80,
    height: 40,
    borderWidth:Util.pixel,
    borderColor: "#009302",
    borderRadius: 4,
    justifyContent:"center",
    marginTop:10
  }
});

/*
,
btnText:{
  textAlign:"center",
  fontSize:18,
  color:"#fff"
},

*/
