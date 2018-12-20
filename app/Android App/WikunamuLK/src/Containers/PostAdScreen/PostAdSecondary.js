/**
 * © Copyrights 2018
 * Wikunamu.LK - Mobile Application
 * Version 1.o
 * Author : Akila Devinda
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, Dimensions, ImageBackground, AsyncStorage, StatusBar, BackHandler, TouchableOpacity, ScrollView, KeyboardAvoidingView
} from 'react-native';


//Device width and height
import Metrics from '../../Containers/Dimensions/Metrics';

//Custom Library
import LinearGradient from 'react-native-linear-gradient';
import { Tile, Divider, Button } from 'react-native-elements'
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const options = {
  title: 'Select Photo',
  takePhotoButtonTitle:'Take a Photo',
  chooseFromLibraryButtonTitle:'Upload From Library',
  quality:1,

};

export default class PostAdSecondary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      model: '',
      title: '',
      description: '',
      price: '',
      city: '',
      imageSource:null,

    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

  }


  //PhotoUpload Method  - Testing 
  selectPhotoUpload(){
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          imageSource: source,
        });
      }
    });
  }




  componentWillMount() {

  }

  componentDidMount() {
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


  render() {

    let { fullname, model, title, description, price, city } = this.state;

    //Catageroy List
    let categoryData = [{
      value: 'Mobile Phones',
    }, {
      value: 'Electronics',
    }, {
      value: 'Vehciles',
    }];


    //Condtion of Item
    let conditionData = [{
      value: 'Brand New',
    }, {
      value: 'Used',
    }];


    return (


      <View style={styles.containerr}>

        <StatusBar backgroundColor="#3764ad" barStyle="light-content" />
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.drawerIcon} onPress={this.handleBackButtonClick}>
            <Image style={styles.imagestyle}
              source={require('../../Assets/Mobile-Phones/back_icon_new.png')} />
          </TouchableOpacity>

          <Text style={styles.headerTextMain}>Wikunamu.LK
            </Text>
        </LinearGradient>

        <Tile
          imageSrc={require('../../Assets/PostAd/post_ad.png')}
          title="Post Your Ad"
          featured
          caption="Quick & Easy Steps"
          height={Metrics.DEVICE_WIDTH * 0.3}
          activeOpacity={30}


        />

        <Divider style={{ backgroundColor: 'white', height: 20 }} />



        <ScrollView style={{ backgroundColor: 'white' }}>
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={{ flex:1 , flexDirection:'column', width: Metrics.DEVICE_WIDTH / 1.2, marginLeft: 30, height: 1200, }}>

              <Dropdown
                label='Category'
                data={categoryData}
                rippleOpacity={0.1}
              />

              <Dropdown
                label='Condtion'
                data={conditionData}
                rippleOpacity={0.1}
              />


              <TextField
                label='Your Name'
                value={fullname}
                onChangeText={(fullname) => this.setState({ fullname })}
              />
              <TextField
                label='Item Model'
                value={model}
                onChangeText={(model) => this.setState({ model })}
              />
              <TextField
                label='Title'
                value={title}
                onChangeText={(title) => this.setState({ title })}
              />
              <TextField
                label='Description'
                value={description}
                onChangeText={(description) => this.setState({ description })}
              />
              <TextField
                label='City'
                value={city}
                onChangeText={(city) => this.setState({ city })}
              />
              <TextField
                label='Price - LKR'
                value={price}
                onChangeText={(price) => this.setState({ price })}
              />
              <Divider style={{ backgroundColor: 'white', height: 10 }} />
              <Button
                raised
                title='UPLOAD IMAGE'
                onPress={ this.selectPhotoUpload.bind(this)}
              />
                 <Divider style={{ backgroundColor: 'white', height: 15 }} />

                  <Tile
                  imageSrc={this.state.imageSource != null ? this.state.imageSource : require('../../Assets/ImageUpload/upload_image.jpg')}
                  featured
                  width={Metrics.DEVICE_WIDTH/1.7}
                  activeOpacity={30}
                  containerStyle={styles.uploadImage}
                    />

            <Divider style={{ backgroundColor: 'white', height: 10 }} />
            <Button
                icon={
                  <Icon
                    name='plus-circle'
                    size={25}
                    color='white'
                  />
                }
                title='POST MY AD'
                raised={true}
                rounded={true}
                buttonStyle={{  
                backgroundColor: "rgba(92, 99,216, 1)",
                width: Metrics.DEVICE_WIDTH/1.2,
                height: 55,
              
                // marginTop:5,
                }}
           
              />

            </View>

          </KeyboardAvoidingView>
        </ScrollView>



      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ffff',

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
    // width:Metrics.DEVICE_WIDTH,
    height: 60,
    marginTop: 20,
  },

  uploadButton: {
    width: Metrics.DEVICE_WIDTH / 3
  },
  uploadImage:{
    marginLeft:50,
  }






});
