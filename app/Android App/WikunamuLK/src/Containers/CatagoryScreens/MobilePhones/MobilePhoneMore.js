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
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  StatusBar,
  BackHandler
} from 'react-native';


import Metrics from '../../Dimensions/Metrics';
import LinearGradient from 'react-native-linear-gradient';
import AwesomeAlert from 'react-native-awesome-alerts';


export default class ProductDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bookImage: this.props.navigation.state.params.Item.bookImage,
      bookName: this.props.navigation.state.params.Item.bookName,
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



  render() {
    return (
      <View style={styles.container}>

      <StatusBar backgroundColor="#3764ad" barStyle="light-content"/>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <TouchableOpacity style={styles.drawerIcon} onPress={this.handleBackButtonClick}>
            <Image style={styles.imagestyle}
                source={require('../../../Assets/Mobile-Phones/back_icon_new.png')} />
            </TouchableOpacity>
        
            <Text style={styles.headerTextMain}>Mobile Phones
            </Text>
        </LinearGradient>



        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.productImg} source={{uri:this.state.bookImage}}/>
            <Text style={styles.name}>{this.state.bookName}</Text>
            <Text style={styles.price}>$ 12.22</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
              natoque penatibus et magnis dis parturient montes, 
              nascetur ridiculus mus. Donec quam felis, ultricies nec
            </Text>
          </View>
      
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Contact Seller</Text>  
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
  


});     