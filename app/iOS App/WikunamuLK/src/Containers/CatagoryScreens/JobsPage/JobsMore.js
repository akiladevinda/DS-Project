/**
 * © Copyrights 2019
 * Wikunamu.LK - Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 * DS PROJECT - PLYMOUTH UNIVERSITY
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
  Button,
  StatusBar,
  BackHandler,
  Linking
} from 'react-native';


import Metrics from '../../Dimensions/Metrics';
import LinearGradient from 'react-native-linear-gradient';
import AwesomeAlert from 'react-native-awesome-alerts';


export default class JobsMore extends Component {

  constructor(props) {
    super(props);

    this.state = {
      item_title: this.props.navigation.state.params.Service.Ad_Title,
      item_price: this.props.navigation.state.params.Service.Ad_Price,
      item_description:this.props.navigation.state.params.Service.Ad_Description,
      item_condition:this.props.navigation.state.params.Service.Ad_Item_Condiiton,
      item_city:this.props.navigation.state.params.Service.Ad_City,
      item_user_email : this.props.navigation.state.params.Service.Ad_User_Email,
      item_user_contactnumber:this.props.navigation.state.params.Service.Ad_User_Contact_No,
    }


    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);


  }

  clickEventListener() {
    Alert.alert("Success", "Product has beed added to cart")
  }

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  
  //Back button handle event - Android Only
  handleBackButtonClick() {
    this.props.navigation.state.params.onGoBack();
    this.props.navigation.goBack(null);
    return true;
  }
  //Get Call to Ad owner
  getCallButtonPress(){
    Linking.openURL('tel:'+this.state.item_user_contactnumber)
  }

  //Send email to ad owner
  sendEmailButtonPress(){
    Linking.openURL('mailto:'+this.state.item_user_email)
  }



  render() {
    return (
      <View style={styles.container}>

      <StatusBar backgroundColor="#3764ad" barStyle="light-content"/>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <TouchableOpacity style={styles.drawerIcon} onPress={this.handleBackButtonClick}>
            <Image style={styles.imagestyle}
                source={require('../../../Assets/Mobile-Phones/back_icon_new.png')} />
            </TouchableOpacity>
        
            <Text style={styles.headerTextMain}>Jobs
            </Text>
        </LinearGradient>



        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.productImg} source={require('../../../Assets/Test/iphone3.jpg')}/>
            <Text style={styles.name}>{this.state.item_title}</Text>
            <Text style={styles.price}>LKR {this.state.item_price}</Text>
            <Text style={styles.price}>Condition :  {this.state.item_condition}</Text>
            <Text style={styles.price}>Location :  {this.state.item_city}</Text>
            <Text style={styles.price}>Email :  {this.state.item_user_email}</Text>
            <Text style={styles.price}>Contact Number :  {this.state.item_user_contactnumber}</Text>
            <Text style={styles.description}>
             {this.state.item_description}
            </Text>
          </View>
      
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> this.getCallButtonPress()}>
              <Text style={styles.shareButtonText}>Get Call</Text>  
            </TouchableOpacity>

            <TouchableOpacity style={styles.shareButtonEmail} onPress={()=> this.sendEmailButtonPress()}>
              <Text style={styles.shareButtonText}>Send Email</Text>  
            </TouchableOpacity>
          </View> 
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  productImg:{
    width:200,
    height:200,
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold'
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
  star:{
    width:40,
    height:40,
  },
  btnColor: {
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  btnSize: {
    height:40,
    width:40,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer:{
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentColors:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentSize:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  addToCarContainer:{
    marginHorizontal:30
  },

  drawerIcon:{
    width:40,
    height:40,
    position: 'absolute',
    marginTop:40,
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
      marginTop:50,
    },
    shareButtonEmail: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "#ea3333",
    },
  


});     