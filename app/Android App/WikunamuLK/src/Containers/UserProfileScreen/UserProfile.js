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
  Image,
  TouchableOpacity,
  StatusBar,
  BackHandler,
  AsyncStorage
} from 'react-native';


import Toolbar from '../Toolbar/Toolbar';
//Device width and height
import Metrics from '../Dimensions/Metrics';
import AwesomeAlert from 'react-native-awesome-alerts';

//Global URL File
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



export default class UserProfile extends Component{


  constructor(props) {
    super(props);
    this.state = {
      progress:false,
      user_fullname:'',
      user_email:'',
      user_contactnumber:'',
      data:[],
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}


  
  componentWillMount(){
  
  }

  
  componentDidMount(){

    //Retrieve user logged email address from local storage and pass to API call
    retrieve('userEmail').then(result =>{
        this.fetchUserDetailsAPI(result);
    });

     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
   }

    //Fetch User Details API Link and values
    fetchUserDetailsAPI(value){

      let userLoggedEmail = JSON.parse(value)

      this.setState({progress:true});

      fetch(_CONFIG_.USER_PROFILE_URL, {
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
              user_fullname:responseText.data[0].full_name,
              user_email:responseText.data[0].email,
              user_contactnumber:responseText.data[0].contact_number,
              progress:false,
            });
            
        })
        .catch((error) => {
          this.setState({
            
          });
            
        });
    }


componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

deleteMyAccountButton(){
  alert('Still Developing');
}

//Back button handle event - Android Only
handleBackButtonClick() {
  this.props.navigation.goBack();
    return true;
}

editMyProfileScreen(){
  var { navigate} = this.props.navigation;
  navigate("UserProfileEdit",{});
}


  render() {
    return (
      <View style={styles.container}>

      <StatusBar backgroundColor="#3764ad" barStyle="light-content"/>

      <Toolbar navigation={this.props.navigation}/>


      <View style={styles.header}></View>
      <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{this.state.user_fullname}</Text>
          <Text style={styles.info}>{this.state.user_email}</Text>
          <Text style={styles.info}>{this.state.user_contactnumber}</Text>
          
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.editMyProfileScreen()}>
            <Text style={styles.buttonText}>Edit My Details</Text>  
          </TouchableOpacity>              
          <TouchableOpacity style={styles.buttonContainerDelete}  onPress={() => this.deleteMyAccountButton()}>
            <Text style={styles.buttonText}>Delete My Account</Text> 
          </TouchableOpacity>
        </View>
    </View>
     {/* All Notification Alerts  */}
     <AwesomeAlert
          title="Please wait ..."
          show={this.state.progress}
          showProgress={true}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
        />
  </View>
);
}

  
}

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'flex-start',
//     // alignItems: 'flex-start',
//     // backgroundColor: '#ffff',

// },
header:{
  backgroundColor: "#00BFFF",
  height:200,
},
avatar: {
  width: 130,
  height: 130,
  borderRadius: 63,
  borderWidth: 4,
  borderColor: "white",
  marginBottom:10,
  alignSelf:'center',
  position: 'absolute',
  marginTop:130
},
name:{
  fontSize:22,
  color:"#FFFFFF",
  fontWeight:'600',
},
body:{
  marginTop:40,
},
bodyContent: {
  flex: 1,
  alignItems: 'center',
  padding:30,
},
name:{
  fontSize:28,
  color: "#696969",
  fontWeight: "600"
},
info:{
  fontSize:16,
  color: "#00BFFF",
  marginTop:10
},
description:{
  fontSize:16,
  color: "#696969",
  marginTop:10,
  textAlign: 'center'
},
buttonContainer: {
  marginTop:10,
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  width:250,
  borderRadius:30,
  backgroundColor: "#00BFFF",
},
buttonContainerDelete: {
  marginTop:10,
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  width:250,
  borderRadius:30,
  backgroundColor: "#e24141",
},
buttonText:{
  color:"white"
}





});
