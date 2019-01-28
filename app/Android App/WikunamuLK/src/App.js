/**
 * © Copyrights 2018
 * Wikunamu.LK - Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 */

import React, {Component} from 'react';
import { Animated, Easing,Dimensions,StyleSheet,View,Image,AsyncStorage,ScrollView} from 'react-native';
import { StackNavigator,DrawerNavigator, DrawerActions , DrawerItems,NavigationActions ,createStackNavigator ,createDrawerNavigator} from 'react-navigation';


//import route pages
import Splash from './Containers/SplashScreen/Splash';
import Home from './Containers/HomeScreen/Home';
import PostAdScreenMain from './Containers/PostAdScreen/PostAddMain';
import MyAdsMainScreen from './Containers/MyAdScreen/MyAdsMainScreen';
import UserProfile from './Containers/UserProfileScreen/UserProfile';
import About from './Containers/AboutAppScreen/About';

//import Authentication Screens
import Register from './Containers/AuthScreens/RegisterScreen/Register';
import Login from './Containers/AuthScreens/LoginScreen/Login';


//import main catagory list
import MobilePhoneMain from './Containers/CatagoryScreens/MobilePhones/MobilePhoneMain';
import ElectronicsMain from './Containers/CatagoryScreens/Electroinics/ElectronicsMain';
import VehiclesMain from './Containers/CatagoryScreens/Vehicles/VehiclesMain';
import MensFashionMain from './Containers/CatagoryScreens/MensFashion/MensFashionMain';
import WomensFashionMain from './Containers/CatagoryScreens/WomensFashion/WomensFashionMain';
import PostAdScreenSecond from './Containers/PostAdScreen/PostAdSecondary';
import HouseRentMain from './Containers/CatagoryScreens/HouseRent/HouseRentMain';
import JobsMain from './Containers/CatagoryScreens/JobsPage/JobsMain';
import OthersMain from './Containers/CatagoryScreens/OthersPage/OthersMain';

//import more details pages
import MobilePhoneMore from './Containers/CatagoryScreens/MobilePhones/MobilePhoneMore';
import ElectronicsMore from './Containers/CatagoryScreens/Electroinics/ElectronicsMore';
import HouseRentMore from './Containers/CatagoryScreens/HouseRent/HouseRentMore';
import JobsMore from './Containers/CatagoryScreens/JobsPage/JobsMore';
import OthersMore from './Containers/CatagoryScreens/OthersPage/OthersMore';


//testing route pages
import MobileTest from './Containers/CatagoryScreens/MobilePhones/MobileTest';



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
              onItemPress = {({ route, focused }) => {
                  if(route.routeName == 'Log out'){
                    props.navigation.navigate('Drawer');
                     props.navigation.navigate('Login');
                     AsyncStorage.setItem('alreadyLaunched', JSON.stringify(false))

                  }else{
                    props.navigation.navigate(route.routeName);
                  }
                }
                }
            />

            </ScrollView>
            </View>
  </View>

)



//Drawer icons and pages
const Drawer = createDrawerNavigator({
  
  'All ads':{
      screen: Home,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("./Assets/Drawer/m_home.png")}
            resizeMode="contain"
            style={{ width: 25, height: 25,  }}
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
          style={{ width: 25, height: 25,  }}
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
        style={{ width: 25, height: 25,  }}
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
        style={{ width: 25, height: 25, }}
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
        style={{ width: 25, height: 25,  }}
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
        style={{ width: 25, height: 25, }}
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
  },
},
drawerOpenRoute: 'DrawerOpen',
drawerCloseRoute: 'DrawerClose',
drawerToggleRoute: 'DrawerToggle',
drawerBackgroundColor: "white",
});

// Main App Navigation
const NavigationApp = createStackNavigator({ 

  Splash:{ screen: Splash,navigationOptions: { title: 'Splash', header: null, gesturesEnabled: false},},
  Login:{ screen: Login,navigationOptions: { title: 'Login', header: null, gesturesEnabled: false},},
  Register:{ screen: Register,navigationOptions: { title: 'Register', header: null, gesturesEnabled: false},},

  
  
  Home:{ screen: Home,navigationOptions: { title: 'Home', header: null, gesturesEnabled: false},},
  Drawer:{ screen: Drawer,navigationOptions: { title: 'Drawer', header: null, gesturesEnabled: false},},
  PostAdScreenMain:{ screen: PostAdScreenMain,navigationOptions: { title: 'HoPostAdScreenMainme', header: null, gesturesEnabled: false},},
  MyAdsMainScreen:{ screen: MyAdsMainScreen,navigationOptions: { title: ' MyAdsMainScreen', header: null, gesturesEnabled: false},},
  UserProfile:{ screen: UserProfile,navigationOptions: { title: ' UserProfile', header: null, gesturesEnabled: false},},
  About:{ screen: About,navigationOptions: { title: ' About', header: null, gesturesEnabled: false},},
  MobilePhoneMain:{ screen: MobilePhoneMain,navigationOptions: { title: ' MobilePhoneMain', header: null, gesturesEnabled: false},},
  ElectronicsMain:{ screen: ElectronicsMain,navigationOptions: { title: ' ElectronicsMain', header: null, gesturesEnabled: false},},
  VehiclesMain:{ screen: VehiclesMain,navigationOptions: { title: ' VehiclesMain', header: null, gesturesEnabled: false},},
  MensFashionMain:{ screen: MensFashionMain,navigationOptions: { title: ' MensFashionMain', header: null, gesturesEnabled: false},},
  WomensFashionMain:{ screen: WomensFashionMain,navigationOptions: { title: ' WomensFashionMain', header: null, gesturesEnabled: false},},
  PostAdScreenSecond:{ screen: PostAdScreenSecond,navigationOptions: { title: ' PostAdScreenSecond', header: null, gesturesEnabled: false},},
  MobilePhoneMore:{ screen: MobilePhoneMore,navigationOptions: { title: ' MobilePhoneMore', header: null, gesturesEnabled: false},},
  ElectronicsMore:{ screen: ElectronicsMore,navigationOptions: { title: ' ElectronicsMore', header: null, gesturesEnabled: false},},
  HouseRentMain:{ screen: HouseRentMain,navigationOptions: { title: ' HouseRentMain', header: null, gesturesEnabled: false},},
  JobsMain:{ screen: JobsMain,navigationOptions: { title: ' JobsMain', header: null, gesturesEnabled: false},},
  OthersMain:{ screen: OthersMain,navigationOptions: { title: ' OthersMain', header: null, gesturesEnabled: false},},
  HouseRentMore:{ screen: HouseRentMore,navigationOptions: { title: ' HouseRentMore', header: null, gesturesEnabled: false},},
  JobsMore:{ screen: JobsMore,navigationOptions: { title: ' JobsMore', header: null, gesturesEnabled: false},},
  OthersMore:{ screen: OthersMore,navigationOptions: { title: ' OthersMore', header: null, gesturesEnabled: false},},
  MobileTest:{ screen: MobileTest,navigationOptions: { title: ' MobileTest', header: null, gesturesEnabled: false},},

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