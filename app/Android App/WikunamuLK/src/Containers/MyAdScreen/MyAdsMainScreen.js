/**
 * © Copyrights 2018
 * Wikunamu.LK - Mobile Application
 * Version 1.0
 * Author : Akila Devinda
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

import Toolbar from '../Toolbar/Toolbar';
// Device width and height
import Metrics from '../Dimensions/Metrics';

import { Dialog , ProgressDialog , ConfirmDialog} from "react-native-simple-dialogs";



// Global Config File
import _CONFIG_ from '../Global/_CONFIG_';

//Get Email From Async Storage
const retrieve = async (key)

 => {
     try{
        let value =  await AsyncStorage.getItem(key)


        return value;
    }catch(error){
        throw error;
    }
};


export default class MyAdsMainScreen extends Component{

  constructor(props) {
    super(props);
    this.state = {
      jsonData: null,
      progress:false,
      email:'',
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
   retrieve('userEmail').then(result =>{
    this.fetchAdDetails(result);
    this.setState({email:JSON.parse(result)});
});

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

  fetchAdDetails(value){

      let userLoggedEmail = JSON.parse(value)

      console.log(userLoggedEmail)

      this.setState({progress:true});

      fetch(_CONFIG_.GET_ADDETAILS_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify( {
          "user_email": userLoggedEmail,
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
          this.setState({
            
          });
            
        });
    }

    //Ad Delete Method From User
    deleteAdFetchAPI(service){
        

      this.setState({progress:true});

      fetch(_CONFIG_.DELETE_AD_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify( {
          "email": this.state.email,
          "ad_title":service.ad_title,
        })


    })
        .then((response) => response.json())
        .then((responseText) => {

          // console.log(responseText.data)
        if(responseText.status_code == '200'){
              this.setState({
                progress:false,

              });
              this.props.navigation.goBack();
              return true;
        }
            
            
        })
        .catch((error) => {
          this.setState({
            
          });
            
        });
    }

     //Refresh Auto When Back To Mens Fashion Screen
 autoRefresh(){
  this.fetchAdDetails();
}

//Navigate More Information Screen
navigateMyAdsMore(service){
  this.props.navigation.navigate("MyAdsMore",{screen: "MyAdsMore",Service:service,})
}


  render() {
    return (

     
      <View style={styles.container}>

        <StatusBar backgroundColor="#3764ad" barStyle="light-content"/>

        <Toolbar navigation={this.props.navigation}/> 
        {this.state.jsonData &&
        <ListView enableEmptySections={true}
         dataSource={this.dataSource.cloneWithRows(this.state.jsonData)}
        renderRow={(service) => {
          return (
            <View style={styles.box}>
               <Image style={styles.image} source={require('../../Assets/Test/iphone3.jpg')} />
              <View style={styles.boxContent}>
                <Text style={styles.title}>{service.ad_title}</Text>
                <Text style={styles.description}>LKR {service.price}</Text>
                <View style={styles.buttons}>
                  <TouchableHighlight style={[styles.button, styles.view]}  onPress={this.deleteAdFetchAPI.bind(this,service)}>
                    <Text style={{fontSize:15,color:'white'}}>Delete Ad</Text>
                  </TouchableHighlight> 

                  <TouchableHighlight style={[styles.button, styles.viewAd]}  onPress={this.navigateMyAdsMore.bind(this,service)}>
                    <Text style={{fontSize:15,color:'white'}}>View Ad</Text>
                  </TouchableHighlight>

                </View>
              </View>
            </View>
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
  width:80,
  marginRight:5,
  marginTop:5,
},
icon:{
  width:20,
  height:20,
},
view: {
  backgroundColor: "#FF1493",
},
viewAd: {
  backgroundColor: "#2774d8",
},
profile: {
  backgroundColor: "#1E90FF",
},
message: {
  backgroundColor: "#228B22",
},


});
