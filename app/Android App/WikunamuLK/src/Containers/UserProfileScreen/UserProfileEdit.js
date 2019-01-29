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


export default class UserProfileEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
      contact_no:'',
      full_name:'',
    }

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentDidMount(){
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

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
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
        <Image style={styles.logo} source={{uri: 'https://png.icons8.com/google/color/120'}}/>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Full Name"
              underlineColorAndroid='transparent'
              onChangeText={(full_name) => this.setState({full_name})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>

        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/speech-bubble/ultraviolet/50'}}/>
          <TextInput style={[ styles.messageInput]}
              placeholder="Contact Number"
              underlineColorAndroid='transparent'
              onChangeText={(contact_no) => this.setState({contact_no})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/speech-bubble/ultraviolet/50'}}/>
          <TextInput style={[ styles.messageInput]}
              placeholder="Password"
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.buttonText}>Update My Profile</Text>
        </TouchableHighlight>

        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    backgroundColor: '#eaeaea',
  },
  logo:{
    width:120,
    height:120,
    justifyContent: 'center',
    marginBottom:20,
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
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