/**
 * © Copyrights 2019
 * Wikunamu.LK - Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 * DS PROJECT - PLYMOUTH UNIVERSITY
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  ListView,
  TouchableOpacity,
  StatusBar,
  BackHandler,
  AsyncStorage
} from 'react-native';

// Global Config File
import _CONFIG_ from '../../Global/_CONFIG_';
var API_URL = _CONFIG_.GET_CATDETAILS_URL;

// Device width and height
import Metrics from '../../Dimensions/Metrics';

import { Dialog , ProgressDialog , ConfirmDialog} from "react-native-simple-dialogs";
import LinearGradient from 'react-native-linear-gradient';

export default class WomensFashionMain extends Component{

  constructor(props) {
    super(props);
    this.state = {
      jsonData: null,
      progress:false,
      noAdsMessage:false,
    };
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

}


componentWillMount(){
 
}

componentDidMount(){
     //Retrieve user logged email address from local storage and pass to API call

  this.fetchCategoryDetailsAPI();

  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

//Fetch Category Details and get values from API
fetchCategoryDetailsAPI(){

  // let userLoggedEmail = JSON.parse(value)


      this.setState({progress:true});

      fetch(API_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify( {
          "Ad_Category_Name": 'Womens Fashion',
        })


    })
        .then((response) => response.json())
        .then((responseText) => {
            if(responseText.status_code == '400'){
              this.setState({
                    progress:false,
                    noAdsMessage:true,
                  });
            }else if(responseText.data[0].status_code == '200'){
              this.setState({
                jsonData:responseText.data,
                progress:false,
              });
            }
            
        })
        .catch((error) => {
            //If connection error on main API 
        API_URL = _CONFIG_.GET_CATDETAILS_URL_BACKUP;
        this.fetchCategoryDetailsAPI();
            
        });

}

//Back button handle event - Android Only
handleBackButtonClick() {
    this.props.navigation.goBack();
    return true;
}

getClickedAd(service){
  alert(service.ad_title)
}

 //Refresh Auto When Back To Mens Fashion Screen
 autoRefresh(){
  this.fetchCategoryDetailsAPI();
}

//Navigate More Information Screen
navigateMensFashionMore(service){
  this.props.navigation.navigate("WomensFashionMore",{screen: "WomensFashionMore",Service:service,onGoBack: () => this.autoRefresh(),})
}

  render() {
    return (

     
      <View style={styles.containerr}>

        <StatusBar backgroundColor="#3764ad" barStyle="light-content"/>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <TouchableOpacity style={styles.drawerIcon} onPress={this.handleBackButtonClick}>
            <Image style={styles.imagestyle}
                source={require('../../../Assets/Mobile-Phones/back_icon_new.png')} />
            </TouchableOpacity>
        
            <Text style={styles.headerTextMain}>Womens Fashion
            </Text>
        </LinearGradient>

        {this.state.jsonData &&
        <ListView enableEmptySections={true}
         dataSource={this.dataSource.cloneWithRows(this.state.jsonData)}
        renderRow={(service) => {
          return (
            <TouchableOpacity onPress={this.navigateMensFashionMore.bind(this,service)}>
            <View style={styles.box}>
               <Image style={styles.image} source={require('../../../Assets/Test/iphone3.jpg')} />
              <View style={styles.boxContent}>
                <Text style={styles.title}>{service.Ad_Title}</Text>
                <Text style={styles.description}>LKR {service.Ad_Price}</Text>
                <View style={styles.buttons}>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          )
        }}/> }

        <ProgressDialog
              visible={this.state.progress}
              title="Loading Data"
              message="Please, wait..."
          />
          <ConfirmDialog
            title="Sorry !!! No Ads"
            message="No any items for this category ..."
            visible={this.state.noAdsMessage}
            onTouchOutside={() => this.setState({noAdsMessage: true})}
            positiveButton={{
                title: "OK",
                onPress: () => this.handleBackButtonClick()
            }}

        /> 
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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

  image: {
    width: 100,
    height:100,
  },
  box: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
  },
  title:{
    fontSize:18,
    color:"#151515",
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  buttons:{
    flexDirection: 'row',
  },
  button: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    width:90,
    marginRight:5,
    marginTop:5,
  },
  icon:{
    width:20,
    height:20,
  },
  view: {
    backgroundColor: "#2774d8",
  },
  profile: {
    backgroundColor: "#1E90FF",
  },
  message: {
    backgroundColor: "#228B22",
  },
  
  




});
