/**
 * © Copyrights 2019
 * Wikunamu.LK - Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 * DS PROJECT - PLYMOUTH UNIVERSITY
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  StatusBar,
  BackHandler,
  ImageBackground
} from 'react-native';


import Toolbar from '../Toolbar/Toolbar';
//Device width and height
import Metrics from '../Dimensions/Metrics';


export default class About extends Component {

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


  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed ");
  }

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>

        <StatusBar backgroundColor="#3764ad" barStyle="light-content"/>

        <Toolbar navigation={this.props.navigation}/>

        <ImageBackground source={require('../../Assets/About/about_bg.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>

        

          <Image style={styles.logo} source={require('../../Assets/About/about_header_logo.png')}/>
          <Text style={styles.companyName}>Wikunamu.LK</Text>
          <Text style={styles.slogan}>Buy-Sell-Trade</Text>
          <View style={styles.descriptionContent}>
            <Text style={styles.description}>
              Wikunamu.LK is a non - commercial application which was build for final year Distributed System Project
            </Text>
          </View>
          <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.onClickListener('login')}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </TouchableHighlight>
        </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer:{
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width:Metrics.DEVICE_WIDTH,
    height:Metrics.DEVICE_HEIGHT
  },
  logo:{
    width:120,
    height:120,
    justifyContent: 'center',
    marginBottom:10,
    marginTop:30,
  },
  companyName: {
    fontSize:32,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  slogan:{
    fontSize:18,
    fontWeight: '600',
    color: 'white',
    marginTop:10,
  },
  descriptionContent:{
    padding:30
  },
  description:{
    fontSize:18,
    textAlign:'center',
    marginTop:10,
    color: '#FFFFFF',
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:30,
  },
  sendButton: {
    backgroundColor: "#FFFFFF",
  },
  buttonText: {
    color: '#EE82EE',
  }
}); 