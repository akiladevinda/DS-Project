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
  Image,
  Dimensions,
  ImageBackground,
  AsyncStorage,
  StatusBar,
  ScrollView,
  BackHandler,
} from 'react-native';

//System Files
import Toolbar from '../Toolbar/Toolbar';
//Device width and height
import Metrics from '../Dimensions/Metrics';
//Custom Library
import { SearchBar,Tile,Divider,Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

//importing catagory pages
import MobilePhoneMain from '../CatagoryScreens/MobilePhones/MobilePhoneMain';
import ElectronicsMain from '../CatagoryScreens/Electroinics/ElectronicsMain';
import VehiclesMain from '../CatagoryScreens/Vehicles/VehiclesMain';
import MensFashionMain from '../CatagoryScreens/MensFashion/MensFashionMain';
import WomensFashionMain from '../CatagoryScreens/WomensFashion/WomensFashionMain';



export default class Home extends Component{

  constructor(props) {
    super(props);
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}


componentWillMount(){
  

}
componentDidMount(){
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
 
}

handleBackButton(){
    BackHandler.exitApp();
    return true;
}

//Handling all screen navigation mehhods

goMobileSection(){
  this.props.navigation.navigate("MobilePhoneMain" , {screen:MobilePhoneMain});
}

goVehicleSection(){
  this.props.navigation.navigate("VehiclesMain" , {screen:VehiclesMain});
}

goElectronicsSection(){
  this.props.navigation.navigate("ElectronicsMain" , {screen:ElectronicsMain});
}

goMensFashionSection(){
  this.props.navigation.navigate("MensFashionMain" , {screen:MensFashionMain});
}

goWomensFashionSection(){
  this.props.navigation.navigate("WomensFashionMain" , {screen:WomensFashionMain});
}

  render() {
    return (

     
      <View style={styles.container}>

        <StatusBar backgroundColor="#3764ad" barStyle="light-content"/>

        <Toolbar navigation={this.props.navigation}/>

        {/* <SearchBar
            ref={search => this.search = search}
            showLoading = {false}
            searchIcon={<Image source={require('../../Assets/Drawer/search.png')}  
                          style={{width:20,height:20}}/>}
            platform="android"
            clearIcon={<Image source={require('../../Assets/Drawer/cancel.png')}  
                          style={{width:20,height:20}}/>}
            cancelIcon={<Image source={require('../../Assets/Drawer/back.png')}  
                          style={{width:20,height:20}}/>}
            placeholder='Search'
            round={true} 
           
            /> */}

              <Button
                icon={
                  <Icon
                    name='plus-circle'
                    size={25}
                    color='white'
                  />
                }
                title='QUICKLY POST YOUR AD'
                raised={true}
                buttonStyle={{  
                backgroundColor: "rgba(92, 99,216, 1)",
                width: Metrics.DEVICE_WIDTH,
                height: 55,
                borderColor: "transparent",
                borderWidth: 0,
                // marginTop:5,
                }}
              />
            
            
            <Divider style={{ backgroundColor: 'white',height: 5 }} />

            <ScrollView>

            {/* Mobile Phone Catagory */}
            <Tile
              imageSrc={require('../../Assets/Catagories/phones.jpg')}
              title="Mobile Phones"
              featured
              caption="-102 Items"
              height={Metrics.DEVICE_WIDTH*0.5}
              onPress={ () =>  this.goMobileSection()}
             
              />

            <Divider style={{ backgroundColor: 'white',height: 20 }} />

            {/* Electronics Catagory */}
            <Tile
              imageSrc={require('../../Assets/Catagories/electronics.jpg')}
              title="Electronics"
              featured
              caption="-102 Items"
              height={Metrics.DEVICE_WIDTH*0.5}
              onPress={ () =>  this.goElectronicsSection()}
              />
              
            <Divider style={{ backgroundColor: 'white',height: 20 }} />

            {/* Vehicles Catagory */}
            <Tile
              imageSrc={require('../../Assets/Catagories/vehicles.jpg')}
              title="Vehicles"
              featured
              caption="-102 Items"
              height={Metrics.DEVICE_WIDTH*0.5}
              onPress={ () =>  this.goVehicleSection()}
              />

            <Divider style={{ backgroundColor: 'white',height: 20 }} />

            {/* Mens-Fashion Catagory */}
            <Tile
            imageSrc={require('../../Assets/Catagories/mens-fashion.jpg')}
            title="Mens Fashion"
            featured
            caption="-102 Items"
            height={Metrics.DEVICE_WIDTH*0.5}
            onPress={ () =>  this.goMensFashionSection()}
            />

               <Divider style={{ backgroundColor: 'white',height: 20 }} />

            {/* Womens-Fashion Catagory */}
            <Tile
            imageSrc={require('../../Assets/Catagories/women-fashion.jpg')}
            title="Womens Fashion"
            featured
            caption="-102 Items"
            height={Metrics.DEVICE_WIDTH*0.5}
            onPress={ () =>  this.goWomensFashionSection()}
            />


            </ScrollView>


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
