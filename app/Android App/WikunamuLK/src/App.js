/**
 * © Copyrights 2018
 * Wikunamu.LK - Mobile Application
 * Version 1.o
 * Author : Akila Devinda
 */

import React, {Component} from 'react';
import { Animated, Easing,Dimensions,StyleSheet,View,Image,AsyncStorage,ScrollView} from 'react-native';
import { StackNavigator,DrawerNavigator, DrawerActions , DrawerItems,NavigationActions } from 'react-navigation';


//import route pages
import Splash from './Containers/SplashScreen/Splash';
import Home from './Containers/HomeScreen/Home';
import PostAdScreenMain from './Containers/PostAdScreen/PostAddMain';
import MyAdsMainScreen from './Containers/MyAdScreen/MyAdsMainScreen';
import UserProfile from './Containers/UserProfileScreen/UserProfile';
import About from './Containers/AboutAppScreen/About';

//Device width and height
import Metrics from './Containers/Dimensions/Metrics';

//Drawer Header Image
const CustomeDrawerImage = (props) => (

  <View style={{width: Metrics.DEVICE_WIDTH/1.3, height: 190,}}>
 
    <Image
      style={styles.drawerHeaderImage}
      source={require('./Assets/Drawer/header_new.png')}/>
      <View >
      <ScrollView style={{width:Metrics.DEVICE_WIDTH,height:Metrics.DEVICE_HEIGHT/1.6}}>
      <DrawerItems
              {...props}
            />

            </ScrollView>
            </View>
  </View>

)



//Drawer icons and pages
const Drawer = DrawerNavigator({
  
  'All ads':{
      screen: Home,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("./Assets/Drawer/m_home.png")}
            resizeMode="contain"
            style={{ width: 25, height: 25, tintColor: "white" }}
          />
        )
      }
  },

  'Post your ad':{
    screen: PostAdScreenMain,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("./Assets/Drawer/m_postad.png")}
          resizeMode="contain"
          style={{ width: 25, height: 25, tintColor: "white" }}
        />
      )
    }
},
'My ads':{
  screen: MyAdsMainScreen,
  navigationOptions: {
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./Assets/Drawer/m_myads.png")}
        resizeMode="contain"
        style={{ width: 25, height: 25, tintColor: "white" }}
      />
    )
  }
},
  
'My profile':{
  screen: UserProfile,
  navigationOptions: {
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./Assets/Drawer/m_userprofile.png")}
        resizeMode="contain"
        style={{ width: 25, height: 25, tintColor: "white"}}
      />
    )
  }
},

'About':{
  screen: About,
  navigationOptions: {
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./Assets/Drawer/m_about.png")}
        resizeMode="contain"
        style={{ width: 25, height: 25, tintColor: "white" }}
      />
    )
  }
},

'Log out':{
  screen: About,
  navigationOptions: {
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./Assets/Drawer/m_logout.png")}
        resizeMode="contain"
        style={{ width: 25, height: 25, tintColor: "white"  }}
      />
    )
  }
},



},{
drawerWidth: Metrics.DEVICE_WIDTH/1.3,
contentComponent: CustomeDrawerImage,
drawerPosition: 'left',
contentOptions: {
  labelStyle: {
    fontSize:16,
    color: 'white',
  },
},
drawerOpenRoute: 'DrawerOpen',
drawerCloseRoute: 'DrawerClose',
drawerToggleRoute: 'DrawerToggle',
drawerBackgroundColor: "#626263",
});

// Main App Navigation
const NavigationApp = StackNavigator({ 

  Splash:{ screen: Splash,navigationOptions: { title: 'Splash', header: null, gesturesEnabled: false},},
  Drawer:{ screen: Drawer,navigationOptions: { title: 'Drawer', header: null, gesturesEnabled: false},},
  Home:{ screen: Home,navigationOptions: { title: 'Home', header: null, gesturesEnabled: false},},
  PostAdScreenMain:{ screen: PostAdScreenMain,navigationOptions: { title: 'HoPostAdScreenMainme', header: null, gesturesEnabled: false},},
  MyAdsMainScreen:{ screen: MyAdsMainScreen,navigationOptions: { title: ' MyAdsMainScreen', header: null, gesturesEnabled: false},},
  UserProfile:{ screen: UserProfile,navigationOptions: { title: ' UserProfile', header: null, gesturesEnabled: false},},
  About:{ screen: About,navigationOptions: { title: ' About', header: null, gesturesEnabled: false},},

});

  
  
  
  export default class App extends Component{
  
    constructor(props) {
      super(props);
  
    }
  

    render() {
    
      return (
   
        <NavigationApp />
      
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffff',
    },
    drawerHeaderImage:{
      width: Metrics.DEVICE_WIDTH/1.3,
      height: 150,
      resizeMode: 'stretch',
  
    }
  
  
  });