/**
 * © Copyrights 2018
 * Wikunamu.LK - Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  StatusBar,
  BackHandler
} from 'react-native';
//System Files
import Toolbar from '../Toolbar/Toolbar';
//Device width and height
import Metrics from '../Dimensions/Metrics';
//Custom Library
import { SearchBar,Tile,Divider,Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

//importing catagory pages
import MobilePhoneMain from '../CatagoryScreens/MobilePhones/MobilePhoneMain';
import ElectronicsMain from '../CatagoryScreens/Electroinics/ElectronicsMain';
import VehiclesMain from '../CatagoryScreens/Vehicles/VehiclesMain';
import MensFashionMain from '../CatagoryScreens/MensFashion/MensFashionMain';
import WomensFashionMain from '../CatagoryScreens/WomensFashion/WomensFashionMain';
import PostAdScreenSecond from '../PostAdScreen/PostAdSecondary';
import JobsMain from '../CatagoryScreens/JobsPage/JobsMain';
import HouseRentMain from '../CatagoryScreens/HouseRent/HouseRentMain';
import OthersMain from '../CatagoryScreens/OthersPage/OthersMain';

import MobileTest from '../CatagoryScreens/MobilePhones/MobileTest';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Mobile Phones", image:require('../../Assets/Catagories/phone.png')},
        {id:2, title: "Electronics", image:require('../../Assets/Catagories/electronics.png')},
        {id:3, title: "Mens Fashion", image:require('../../Assets/Catagories/mens-fashion.png')} ,
        {id:4, title: "Womens Fashion", image:require('../../Assets/Catagories/womens-fashion.png')} ,
        {id:5, title: "Vehicles", image:require('../../Assets/Catagories/vehicles.png')} ,
        {id:6, title: "Jobs", image:require('../../Assets/Catagories/jobs.png')} ,
        {id:7, title: "House Rent", image:require('../../Assets/Catagories/rent.png')} ,
        {id:8, title: "Others", image:require('../../Assets/Catagories/other.png')} ,
      ]
    };
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


  clickEventListener(item) {
    if(item == 1){
      this.props.navigation.navigate("MobileTest" , {screen:MobileTest});
    }else if(item == 2){
      this.props.navigation.navigate("ElectronicsMain" , {screen:ElectronicsMain});
    }else if(item == 3){
      this.props.navigation.navigate("MensFashionMain" , {screen:MensFashionMain});
    }else if(item == 4){
      this.props.navigation.navigate("WomensFashionMain" , {screen:WomensFashionMain});
    }else if(item == 5){
      this.props.navigation.navigate("VehiclesMain" , {screen:VehiclesMain});
    }else if(item == 6){
      this.props.navigation.navigate("JobsMain" , {screen:JobsMain});
    }else if(item == 7){
      this.props.navigation.navigate("HouseRentMain" , {screen:HouseRentMain});
    }else if(item == 8){
      this.props.navigation.navigate("OthersMain" , {screen:OthersMain});
    }
  }

  //post ad button
postMyAdSecondScreen(){
  this.props.navigation.navigate("PostAdScreenSecond" , {screen:PostAdScreenSecond});
}


  render() {
    return (
      <View style={styles.container}>

<StatusBar backgroundColor="#3764ad" barStyle="light-content"/>

<Toolbar navigation={this.props.navigation}/>
        
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item.id)}}>
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} source={item.image}/>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>

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
                onPress={ () =>  this.postMyAdSecondScreen()}
              />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"white",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor:"white",
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:15,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
});    