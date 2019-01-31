/**
 * © Copyrights 2019
 * Wikunamu.LK - Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  AsyncStorage
} from 'react-native';

import Metrics from '../../../Containers/Dimensions/Metrics';
import * as Animatable from 'react-native-animatable';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Dialog , ProgressDialog} from "react-native-simple-dialogs";

import Login from '../LoginScreen/Login';

//Global CONFIG File
import _CONFIG_ from '../../Global/_CONFIG_';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
      fullname:'',
      contact_no:'',

      progress:false,
      registerError:false,
      registerComplete:false,
      fillDetails:false,
      weakPassword:false,
      contactNumberError:false,

    };
  }

  
  componentDidMount(){
     
  }

  fetchRegister(){

    this.setState({
      progress:true,
    });

    var object = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify( {
        "full_name": this.state.fullname,
        "email":this.state.email,
        "contact_number": this.state.contact_no,
        "password":this.state.password,
      })
  };


  fetch(_CONFIG_.USER_REGISTER_URL,object)
    .then((response) => response.json())
    .then((responseText) => {

      if(responseText.status_code == '200'){
        this.setState({
          progress:false,
          registerComplete:true,
        });
   
      }else if(responseText.status_code=='400'){
        this.setState({
          progress:false,
          registerError:true,
        });
      }

    })
    .catch((error) => {
      this.setState({
       
      });
    });
  }



  onClickListener = (viewId) => {
    // Alert.alert("Alert", "Button pressed "+viewId);
    if(this.state.fullname.length<=0 || this.state.password<=0 || this.state.email.length<=0 || this.state.contact_no<=0){

        this.setState({fillDetails:true});

    }else if(this.state.password.length<=5){
        this.setState({weakPassword:true});
    }else if(this.state.contact_no.length>10){
        this.setState({contactNumberError:true});
    }else{
      this.fetchRegister();
    }

   
    
  }

  loginButtonClick(){
    this.props.navigation.navigate("Login" , {screen:Login});
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bgImage} source={ require("../../../Assets/Register/newbg.png")}/>
        <Animatable.View  animation="bounceInLeft" style={{marginTop:Metrics.DEVICE_HEIGHT/3}}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              underlineColorAndroid='transparent'
              onChangeText={(fullname) => this.setState({fullname})}/>
          <Image style={styles.inputIcon} source={ require("../../../Assets/Register/fullname.png")}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
          <Image style={styles.inputIcon} source={ require("../../../Assets/Register/email.png")}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Contact Number"
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
              onChangeText={(contact_no) => this.setState({contact_no})}/>
          <Image style={styles.inputIcon} source={ require("../../../Assets/Register/mobile.png")}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
          <Image style={styles.inputIcon} source={ require("../../../Assets/Register/password.png")}/>
        </View>

        <TouchableOpacity style={styles.btnByRegister} onPress={() => this.onClickListener('restore_password')}>
            <Text style={styles.textByRegister}>By registering on this App you confirm that you have read and accept our policy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.loginButtonClick()}>
            <Text style={styles.btnText}>Have an account?</Text>
        </TouchableOpacity>

        </Animatable.View>

         {/* All Notification Alerts  */}
         {/* <AwesomeAlert
          title="Please wait ..."
          show={this.state.progress}
          showProgress={true}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
        /> */}
         <ProgressDialog
            visible={this.state.progress}
            title="Checking Details"
            message="Please, wait..."
        />

        <AwesomeAlert
          show={this.state.registerError}
          showProgress={false}
          title="Email Already In Use"
          message="Try with different email to register"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
              this.setState({
                registerError:false
              });
          }}
          />

        <AwesomeAlert
          show={this.state.registerComplete}
          showProgress={false}
          title="Awesome !!!"
          message="Your account is successfully registered..."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
                 //Navigate to Login Screen
              var { navigate} = this.props.navigation;
              navigate("Login",{});

          }}
          />
           <AwesomeAlert
          show={this.state.fillDetails}
          showProgress={false}
          title="Fill All Fields"
          message="Please fill all fields..."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
             this.setState({fillDetails:false});
          }}
          />
           <AwesomeAlert
          show={this.state.weakPassword}
          showProgress={false}
          title="Weak Password"
          message="Password should be more than 5 characters"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
             this.setState({weakPassword:false});
          }}
          />

        <AwesomeAlert
          show={this.state.contactNumberError}
          showProgress={false}
          title="Contact Number Not Match"
          message="Please re check the provided contact number"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
             this.setState({contactNumberError:false});
          }}
          />



      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnByRegister: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:20,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    resizeMode:'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',

  },
  btnText:{
    color:"white",
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  textByRegister:{
    color:"white",
    fontWeight:'bold',
    textAlign:'center',

    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
}); 