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
  Image,Dimensions,ImageBackground,AsyncStorage,StatusBar,BackHandler,TouchableOpacity
} from 'react-native';


//Device width and height
import Metrics from '../../Containers/Dimensions/Metrics';

import LinearGradient from 'react-native-linear-gradient';

export default class PostAdSecondary extends Component{

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

     
      <View style={styles.containerr}>

        <StatusBar backgroundColor="#3764ad" barStyle="light-content"/>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <TouchableOpacity style={styles.drawerIcon} onPress={this.handleBackButtonClick}>
            <Image style={styles.imagestyle}
                source={require('../../Assets/Mobile-Phones/back_icon_new.png')} />
            </TouchableOpacity>
        
            <Text style={styles.headerTextMain}>Post Your Ad
            </Text>
        </LinearGradient>
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

drawerIcon:{
  width:40,
  height:40,
  position: 'absolute',
  marginTop:18,
  left: Metrics.DEVICE_WIDTH/60,

},
imagestyle:{
width:40,
height:40,
position: 'absolute',
left: Metrics.DEVICE_WIDTH/60,
},
  headerTextMain:{
    color: 'white',
    fontSize: 21,
    marginLeft:Metrics.DEVICE_WIDTH/3.1,
    // width:Metrics.DEVICE_WIDTH,
    height:60,
    marginTop:20,
  },




});
