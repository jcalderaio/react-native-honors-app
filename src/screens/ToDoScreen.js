import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TextInput, ListView } from 'react-native';
import Firebase from 'firebase';
import { Navigation } from 'react-native-navigation';
import { styles } from '../components/common/styles';
import { CardSection, Button } from '../components/common';



var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ToDoScreen extends Component {

  constructor(props) {
    super(props);
    //const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([]),
      items: []
    };
  }

  _renderRow(rowData) {
  	return (<View style={{ height: 55, borderBottomColor: '#ededed', borderBottomWidth: 1,
            paddingLeft:10, paddingTop:10}}>
            	<Text style={{ fontSize:16 }}>{rowData}</Text>
            </View>
           )
  }

  render() {
    return (
    <View style={{ marginTop:60 }}>

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => this.setState({ text })}
        value={this.state.text}
      />
     <Text>{this.state.text}</Text>
     <CardSection>
       <Button
         onPress={() => {
           var newItem = this.state.text;
           this.state.items.push(newItem);
            this.setState({
            	dataSource: ds.cloneWithRows(this.state.items),
              text: ''
            })

         }}

       >
         Add Item
       </Button>
     </CardSection>

      	<ListView
      dataSource={this.state.dataSource}
      renderRow={this._renderRow}
    />
    </View>
  );
  }
};


/*
import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TextInput, ListView } from 'react-native';
import Firebase from 'firebase';
import { Navigation } from 'react-native-navigation';
import { styles } from '../components/common/styles';
import { CardSection, Button } from '../components/common';

export default class ToDoScreen extends Component {

  constructor(props) {
    super(props);
    //const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      message: 'its working',
      dataSource: ['fucker', 'bitch']
    };
  }

  render() {
      return (
        <View style={{ flex: 1 }}>
          <View style={styles.containerCenter}>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            />
           <Text>{this.state.text}</Text>
           <CardSection>
             <Button
               onPress={() => {
                 var ds = this.state.dataSource;
                 ds.push(this.state.text);
                 alert(ds[ds.size - 1]);

               }}

             >
               Add Item
             </Button>
           </CardSection>


          </View>
        </View>
      );
  }
}
*/
