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
//Device width and height
import Metrics from '../Dimensions/Metrics';

//Global Config File
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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
         {image: "https://images-na.ssl-images-amazon.com/images/I/81vB-Irbk9L._SX355_.jpg"},
         {image: "https://images-na.ssl-images-amazon.com/images/I/81vB-Irbk9L._SX355_.jpg"},
         {image: "https://images-na.ssl-images-amazon.com/images/I/81vB-Irbk9L._SX355_.jpg"},
         {image: "https://images-na.ssl-images-amazon.com/images/I/81vB-Irbk9L._SX355_.jpg"},
         {image: "https://images-na.ssl-images-amazon.com/images/I/81vB-Irbk9L._SX355_.jpg"},
      ]),

      newData:[],

    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

}


componentWillMount(){
 
}

componentDidMount(){

  //Retrieve user logged email address from local storage and pass to API call
  retrieve('userEmail').then(result =>{
      this.fetchAdDetails(result);
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


      fetch(_CONFIG_.GET_ADDETAILS_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify( {
          "email": userLoggedEmail,
        })


    })
        .then((response) => response.json())
        .then((responseText) => {
          // alert(responseText.data);
          // console.log(responseText.data[0].full_name)
            this.setState({
              newData:responseText.data,
            });
            
        })
        .catch((error) => {
          this.setState({
            
          });
            
        });
    }

  render() {
    return (

     
      <View style={styles.container}>

        <StatusBar backgroundColor="#3764ad" barStyle="light-content"/>

        <Toolbar navigation={this.props.navigation}/>

        <ListView enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(service) => {
          return (
            <View style={styles.box}>
              <Image style={styles.image} source={{uri: service.image}} />
              <View style={styles.boxContent}>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.description}>Price</Text>
                <View style={styles.buttons}>
                  <TouchableHighlight style={[styles.button, styles.view]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={require('../../Assets/MyAds/delete.png')}/>
                  </TouchableHighlight>

                  <TouchableHighlight style={[styles.button, styles.profile]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={require('../../Assets/MyAds/edit.png')}/>
                  </TouchableHighlight>

          
                </View>
              </View>
            </View>
          )
        }}/>
     
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
  width:50,
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
profile: {
  backgroundColor: "#1E90FF",
},
message: {
  backgroundColor: "#228B22",
},


});
