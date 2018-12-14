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
  Image,Dimensions,ImageBackground,AsyncStorage,StatusBar,ScrollView
} from 'react-native';

//System Files
import Toolbar from '../Toolbar/Toolbar';
//Device width and height
import Metrics from '../Dimensions/Metrics';
//Custom Library
import { SearchBar, Icon,Tile,Divider } from 'react-native-elements'



export default class Home extends Component{

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

        <SearchBar
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
           
            />

            <ScrollView>

            <Tile
              imageSrc={require('../../Assets/Catagories/phones.jpg')}
              title="Mobile Phones"
              featured
              caption="-102 Items"
              height={Metrics.DEVICE_WIDTH*0.5}
              />

              <Divider style={{ backgroundColor: 'white',height: 20 }} />

            <Tile
              imageSrc={require('../../Assets/Catagories/electronics.jpg')}
              title="Electronics"
              featured
              caption="-102 Items"
              height={Metrics.DEVICE_WIDTH*0.5}
              />
              
              <Divider style={{ backgroundColor: 'white',height: 20 }} />

            <Tile
              imageSrc={require('../../Assets/Catagories/vehicles.jpg')}
              title="Vehicles"
              featured
              caption="-102 Items"
              height={Metrics.DEVICE_WIDTH*0.5}
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
