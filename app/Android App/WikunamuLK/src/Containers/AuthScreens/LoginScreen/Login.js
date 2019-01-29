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
  Alert,
  AsyncStorage
} from 'react-native';

//Library Files
import Metrics from '../../../Containers/Dimensions/Metrics';
import * as Animatable from 'react-native-animatable';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Dialog , ProgressDialog} from "react-native-simple-dialogs";

//Route Pages
import Register from '../RegisterScreen/Register';
import Home from '../../HomeScreen/Home';

//Global CONFIG File
import _CONFIG_ from '../../Global/_CONFIG_';


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',

      progress:false,
      loginError:false,
      fillDetails:false,
      conErrorNew:false,
      
    };
  }

  //Get user email address from local storage
  getUserId = async () => {
    let email = await AsyncStorage.getItem('userEmail');
    return email;
  }

  componentDidMount(){
      //Local Storage Clearing If Want--- !!!!!
      // AsyncStorage.clear();
      
      //Getting user logged email
      this.getUserId().then((userEmail) => {
        console.log(userEmail);
        // alert(userEmail);
      })
  }

  //Login API Fetch Method
  fetchLogin(){

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
        "email": this.state.email,
        "password":this.state.password,
      })
  };


  fetch(_CONFIG_.USER_LOGIN_URL,object)
    .then((response) => response.json())
    .then((responseText) => {

      if(responseText.status_code == '200'){
        // alert('Login Success')
        this.setState({
          progress:false,
        });
        //Testing method - For saving login details with async storage
        try {
            AsyncStorage.setItem('userEmail', JSON.stringify(this.state.email));
        }
        catch (e) {
          console.log('caught error', e);
        }

        //Tem Solution - Drawer - Real is Homne Screen
        var { navigate} = this.props.navigation;
        navigate("Drawer",{});
  
      }else if(responseText.status_code=='400'){

        this.setState({
          progress:false,
          loginError:true,
        });
     
      }

    })
    .catch((error) => {
      this.setState({conErrorNew:true});
    });
  }



  onClickListener = (viewId) => {
    // Alert.alert("Alert", "Button pressed "+viewId);
    if(this.state.email.length<=0 || this.state.password<=0){
      this.setState({
          fillDetails:true,
      });
    }else{
      this.fetchLogin();
    }
    
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
          show={this.state.loginError}
          showProgress={false}
          title="Invalid Credentials"
          message="Please check your detials"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
              this.setState({
                loginError:false
              });
          }}
          />

          <AwesomeAlert
          show={this.state.fillDetails}
          showProgress={false}
          title="Fill All Fields"
          message="Please fill all the details"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
              this.setState({
                fillDetails:false
              });
          }}
          />


                    <Dialog
                    title="Oops... Something went wrong.."
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    visible={ this.state.conErrorNew }
                >
                  <View>
                    <Text style={ { marginVertical: 30 ,textAlign:'center'} }>
                    Please make sure you have turn on your internet connection to proceed !
                    </Text>
                    <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>

                    <View style={{width:Metrics.DEVICE_WIDTH/3}}>
                    <Button
                        onPress={ () => alert('exit') }
                        title="EXIT APP"
                        backgroundColor="red"
                        fontSize={14}      
                    />
                    </View>
                    <View style={{marginLeft:40,width:Metrics.DEVICE_WIDTH/3}}>
                     <Button
                        onPress={ () => this.fetchLogin() }
                        backgroundColor="#777777"
                        title="RETRY"  
                        fontSize={14}      
                        />
                     </View>
                    </View>
                  </View>
                </Dialog>


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