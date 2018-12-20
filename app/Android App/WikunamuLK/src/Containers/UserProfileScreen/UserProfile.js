/**
 * © Copyrights 2018
 * Wikunamu.LK - Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,Dimensions,ImageBackground,AsyncStorage,StatusBar,BackHandler
} from 'react-native';

import Toolbar from '../Toolbar/Toolbar';
//Device width and height
import Metrics from '../Dimensions/Metrics';



export default class UserProfile extends Component{


  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

}


componentWillMount(){
 
}

componentDidMount(){
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

//Back button handle event - Android Only
handleBackButtonClick() {
  this.props.navigation.goBack();
    return true;
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
