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
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

import Metrics from '../../../Containers/Dimensions/Metrics';
import * as Animatable from 'react-native-animatable';

import Register from '../RegisterScreen/Register';

export default class Login extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }



  fetchRegister(){

    var object = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify( {
        "username": this.state.email,
        "password":this.state.password,
      })
  };


  fetch('http://10.0.2.2/API/post/create.php',object)
    .then((response) => response.json())
    .then((responseText) => {

      if(responseText.message == 'Ok'){
        alert('Registered')
      }else if(responseText.message=='Error'){
        alert('Connection Error')
      }

    })
    .catch((error) => {
      this.setState({
       
      });
    });
  }



  onClickListener = (viewId) => {
    // Alert.alert("Alert", "Button pressed "+viewId);
    this.fetchRegister();
  }

  createAccountButton(){
    this.props.navigation.navigate("Register" , {screen:Register});
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bgImage} source={ require("../../../Assets/Register/newbg.png")}/>
        <Animatable.View  animation="bounceInLeft" style={{marginTop:Metrics.DEVICE_HEIGHT/3}}>

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
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
          <Image style={styles.inputIcon} source={ require("../../../Assets/Register/password.png")}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.createAccountButton()}>
            <Text style={styles.btnText}>Need to create account ?</Text>
        </TouchableOpacity>

        </Animatable.View>
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