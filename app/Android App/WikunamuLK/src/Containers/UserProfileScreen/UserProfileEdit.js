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
  TouchableHighlight,
  Image,
  Alert,
  StatusBar,
  BackHandler,
  AsyncStorage,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

//Device width and height
import Metrics from '../../Containers/Dimensions/Metrics';

//Custom Library
import LinearGradient from 'react-native-linear-gradient';
import AwesomeAlert from 'react-native-awesome-alerts';
import { ConfirmDialog , ProgressDialog} from 'react-native-simple-dialogs';

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


export default class UserProfileEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
      contact_no:'',
      full_name:'',
      userEmailForUpdating:'',
      progress:false,
    }

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentDidMount(){

    // Retrieve user logged email address from local storage and pass to API call
    retrieve('userEmail').then(result =>{
        this.fetchUserDetailsAPI(result);
        this.setState({
          userEmailForUpdating:JSON.parse(result)
        })
    });

    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

 //back button method
handleBackButtonClick() {
  this.props.navigation.state.params.onGoBack();
  this.props.navigation.goBack(null);
  return true;
}

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  //user detail fetch API mwthod
  fetchUserDetailsAPI(value){

    let userLoggedEmail = JSON.parse(value)

    this.setState({
      progress:true,
    });

    fetch(_CONFIG_.USER_PROFILE_URL_SEC, {
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

        if(responseText.data[0].status_code == '200'){
            this.setState({
                full_name:responseText.data[0].full_name,
                email:responseText.data[0].email,
                contact_no:responseText.data[0].contact_number,
                password:responseText.data[0].password,
                progress:false,
              });
        }else if(responseText.data[0].status_code == '400'){
            this.setState({progress:false});
        }
          
            
        })
        .catch((error) => {
          this.setState({
            
          });
            
        });

  }

  //Update User Details To database
  updateUserDetailsAPI(){

    this.setState({
      progress:true,
    });
    
    fetch(_CONFIG_.UPDATE_DETAILS_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify( {
          "email": this.state.userEmailForUpdating,
          "full_name": this.state.full_name,
          "contact_number":this.state.contact_no,
          "passowrd":this.state.password
        })
  
    })
        .then((response) => response.json())
        .then((responseText) => {

        if(responseText.status_code == '200'){

          this.setState({progress:false});
          
        }else if(responseText.status_code == '400'){
            //API Error
            this.setState({progress:false});
        }
          
            
        })
        .catch((error) => {
          this.setState({
            
          });
            
        });


  }


  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#3764ad" barStyle="light-content" />
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.drawerIcon} onPress={this.handleBackButtonClick}>
            <Image style={styles.imagestyle}
              source={require('../../Assets/Mobile-Phones/back_icon_new.png')} />
          </TouchableOpacity>

          <Text style={styles.headerTextMain}>Wikunamu.LK
            </Text>
        </LinearGradient>

        <ScrollView>
        <View style={{flex: 1,alignContent:'center',alignItems:'center'}}>
        <Image style={styles.logo} source={require('../../Assets/MyProfile/user.png')}/>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../../Assets/MyProfile/fullname.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Full Name"
              underlineColorAndroid='transparent'
              value={this.state.full_name}
              onChangeText={(full_name) => this.setState({full_name})}/>
        </View>
   
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../../Assets/MyProfile/contactno.png')}/>
          <TextInput style={[ styles.messageInput]}
              placeholder="Contact Number"
              underlineColorAndroid='transparent'
              value={this.state.contact_no}
              onChangeText={(contact_no) => this.setState({contact_no})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../../Assets/MyProfile/password.png')}/>
          <TextInput style={[ styles.messageInput]}
              placeholder="Password"
              underlineColorAndroid='transparent'
              value={this.state.password}
              textContentType='password'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.updateUserDetailsAPI()}>
          <Text style={styles.buttonText}>Update My Profile</Text>
        </TouchableHighlight>

        </View>
        </ScrollView>

        {/* All Custom Alerts */}
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

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    backgroundColor: '#4371b2',
  },
  logo:{
    width:200,
    height:200,
    justifyContent: 'center',
    marginBottom:20,
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: 'white',
      borderRadius:30,
      borderBottomWidth: 1,
      width:300,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
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
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:200,
    borderRadius:30,
  },
  sendButton: {
    backgroundColor: "#FF4500",
  },
  buttonText: {
    color: 'white',
  },
  drawerIcon: {
    width: 40,
    height: 40,
    position: 'absolute',
    marginTop: 18,
    left: Metrics.DEVICE_WIDTH / 60,

  },
  imagestyle: {
    width: 40,
    height: 40,
    position: 'absolute',
    left: Metrics.DEVICE_WIDTH / 60,
  },
  headerTextMain: {
    color: 'white',
    fontSize: 21,
    marginLeft: Metrics.DEVICE_WIDTH / 3.1,
    width:Metrics.DEVICE_WIDTH,
    height: 60,
    marginTop: 20,
  },
}); 