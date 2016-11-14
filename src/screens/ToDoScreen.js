import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TextInput, ListView } from 'react-native';
import Firebase from 'firebase';
import { Navigation } from 'react-native-navigation';


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

  addTodo() {
    if (this.state.newTodo !== '') {
      var newItem = this.state.newTodo;
      this.state.items.push(newItem);
      this.setState({
        dataSource: ds.cloneWithRows(this.state.items),
        newTodo: ''
      });
    }
  }

  _renderRow(rowData) {
  	return (<View
              style={{
                height: 55,
                borderBottomColor: '#ededed',
                borderBottomWidth: 1,
                paddingLeft: 10,
                paddingTop: 10 }}
            >
            <Text style={{ fontSize: 16 }}>
              {rowData}
            </Text>
            </View>
          );
  }

  render() {
    return (
    <View style={styles.appContainer}>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.input}
                   onChangeText={(text) => this.setState({newTodo: text})}
                   value={this.state.newTodo}
                   placeholder='+ Add Task'
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.addTodo()}
          underlayColor='#dddddd'
        >
          <Text style={styles.btnText}>Add</Text>
        </TouchableHighlight>
      </View>
      	<ListView
      dataSource={this.state.dataSource}
      renderRow={this._renderRow}
       />
    </View>
  );
  }
};

const styles = {
  appContainer: {
    flex: 1
  },
  inputcontainer: {
    marginTop: 5,
    padding: 10,
    flexDirection: 'row'
  },
  btnText: {
    fontSize: 18,
    color: 'steelblue',
    marginTop: 6,
    marginRight: 25,
    marginLeft: 20,

  },
  input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4
  },
  row: {
    flexDirection: 'row',
    padding: 12,
    height: 44
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  todoText: {
    flex: 1,
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
