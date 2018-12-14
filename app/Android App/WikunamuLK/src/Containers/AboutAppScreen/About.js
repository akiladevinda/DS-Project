/**
 * © Copyrights 2018
 * Wikunamu.LK - Mobile Application
 * Version 1.o
 * Author : Akila Devinda
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,Dimensions,ImageBackground,AsyncStorage,StatusBar
} from 'react-native';

import Toolbar from '../Toolbar/Toolbar';
//Device width and height
import Metrics from '../Dimensions/Metrics';



export default class About extends Component{

  constructor(props) {
    super(props);

}


componentWillMount(){



}

  render() {
    return (

     
      <View style={styles.container}>

        <StatusBar backgroundColor="#3764ad" barStyle="light-content"/>

        <Toolbar navigation={this.props.navigation}/>
     
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ffff',

},




});
