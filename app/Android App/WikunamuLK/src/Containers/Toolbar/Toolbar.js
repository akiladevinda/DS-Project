/**
 * © Copyrights 2018
 * Wikunamu.LK - Mobile Application
 * Version 1.o
 * Author : Akila Devinda
 */


import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  Dimensions,
  TouchableOpacity

} from 'react-native';
import { DrawerActions } from 'react-navigation';
//import custom libraries
import LinearGradient from 'react-native-linear-gradient';


//Device width and height
import Metrics from '../Dimensions/Metrics';

export default class Toolbar extends Component{



  render() {
    return (
    <View style={styles.header}>
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <TouchableOpacity style={styles.drawerIcon} onPress={() =>  this.props.navigation.openDrawer()}>
        <Image style={styles.imagestyle}
              source={require('../../Assets/Toolbar/icon_menu.png')} />
        </TouchableOpacity>

        <Text style={styles.headerTextMain}>Wikunamu.LK

        </Text>
        </LinearGradient>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#4f4f4f',
        width:Metrics.DEVICE_WIDTH,
        height:80,
        justifyContent:'center',
      },
      linearGradient: {
        width:Metrics.DEVICE_WIDTH,
        height:80,
        justifyContent:'center',
      },
      headerTextMain:{
        color: 'white',
        fontSize: 21,
        marginLeft:Metrics.DEVICE_WIDTH/3.2,
        fontFamily:'Roboto-Bold',
        width:Metrics.DEVICE_WIDTH,
        // height:60,
        marginTop:10,
        // marginBottom:-1,
      },

      drawerIcon:{
          width:30,
          height:30,
          position: 'absolute',
          left: Metrics.DEVICE_WIDTH/50,
          right: 0,
       
      },
      imagestyle:{
        width: 40,
        height: 40,
        marginBottom:5,

      },

  

});
