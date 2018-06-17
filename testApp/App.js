/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const postOption = {    method: 'post',
headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}, 
}

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
  
}


handleShoeDevice=()=>{

  const dataToserver ={userToken: "c91aded2-b1eb-4a43-ad76-8ff654525c97", rowCount: 50}
  fetch(URL+'/core.svc/GetDevices', {
    ...postOption,
            body:JSON.stringify({dataToserver})
    
        })
        .then(res => res.json())
        .then((data)=>{

          Alert.alert(JSON.stringify(data));
        })

  


}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
asdfasdf

        </Text>
        <Text style={styles.instructions}>
         sdfsdf
        </Text>
        <Text style={styles.instructions}>
  `
        </Text>

        <Button
  onPress={this.handleShoeDevice}
  title="Press Me"
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
