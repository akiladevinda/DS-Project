/**
 * © Copyrights 2018
 * Wikunamu.LK - Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, Dimensions, ImageBackground, AsyncStorage, StatusBar, BackHandler, TouchableOpacity, ScrollView, KeyboardAvoidingView,TouchableHighlight
} from 'react-native';
import Toolbar from '../Toolbar/Toolbar';
//Device width and height
import Metrics from '../../Containers/Dimensions/Metrics';

//Custom Library
import LinearGradient from 'react-native-linear-gradient';
import { Tile, Divider, Button } from 'react-native-elements'
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';
import DeviceInfo from 'react-native-device-info';

//get device information
const uniqueId = DeviceInfo.getUniqueID();

//Global CONFIG File
import _CONFIG_ from '../Global/_CONFIG_';

//image upload options
const options = {
  title: 'Select Photo',
  takePhotoButtonTitle:'Take a Photo',
  chooseFromLibraryButtonTitle:'Upload From Library',
  quality:1,

};


//Category and Condition Date
const categoryData = [
  { value: 'Mobile Phone' },
  { value: 'Electronics' },
  { value: 'Mens Fashion' },
  { value: 'Womens Fashion' },
  { value: 'Vehicle' },
  { value: 'Jobs' },
  { value: 'House Rent' },
  { value: 'Others' },
];
const conditionData = [
  { value: 'Brand New' },
  { value: 'Used' },
];



export default class PostAddMain extends Component{

  constructor(props) {
    super(props);
    
    //Dropdown Reference Testing
    this.onChangeTextForCategory = this.onChangeTextForCategory.bind(this);
    this.onChangeTextForCondition = this.onChangeTextForCondition.bind(this);
    this.categorySelect = this.updateRef.bind(this, 'Category');
    this.conditionSelect = this.updateRef.bind(this, 'Condition');

    this.state = {
      fullname: '',
      model: '',
      title: '',
      itemname:'',
      description: '',
      price: '',
      city: '',
      contact_number:'',
      imageSource:null,

      Category:'',
      Condition:'',
      selectCategory:'',
      selectCondition:'',
      userLoggedEmail:'',

      progress:false,
      postAdSuccess:false,
      postAdError:false,
      fillDetails:false,
    };

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

}

  //Get user email address from local storage
  getUserId = async () => {
    let email = await AsyncStorage.getItem('userEmail');
    return email;
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



 
  //Post Ad API Fetch Method
  fetchPostAdAPI(){

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
        "category_name": this.state.selectCategory,
        "item_condition":this.state.selectCondition,
        "item_name": this.state.itemname,
        "ad_title":this.state.title,
        "ad_description": this.state.description,
        "city":this.state.city,
        "price": this.state.price,
        "image":'Still Testing',
        "user_email":this.state.userLoggedEmail,
        "user_uniqueID": uniqueId,
        "user_contactnum": this.state.contact_number,
      })
  };


  fetch(_CONFIG_.USER_POSTAD_URL,object)
    .then((response) => response.json())
    .then((responseText) => {

      if(responseText.status_code == '200'){
        this.setState({
          progress:false,
          postAdSuccess:true,
        });
   
      }else if(responseText.status_code=='400'){
        this.setState({
          progress:false,
          postAdError:true
        });
      }

    })
    .catch((error) => {
      this.setState({
       
      });
    });
  }


  //Category Select Text Change Mehthod
  onChangeTextForCategory(text) {
    ['Category',]
      .map((name) => ({ name, ref: this[name] }))
      .filter(({ ref }) => ref && ref.isFocused())
      .forEach(({ name, ref }) => {
      this.setState({ [name]: text , selectCategory:text});
    
      });

     
  }
  //Condition Select Text Change Method
  onChangeTextForCondition(text) {
    ['Condition',]
      .map((name) => ({ name, ref: this[name] }))
      .filter(({ ref }) => ref && ref.isFocused())
      .forEach(({ name, ref }) => {
      this.setState({ [name]: text , selectCondition:text});
    
      });

     
  }
  // Category and Condition Update Method
  updateRef(name, ref) {
    this[name] = ref;
   
  }

componentWillMount(){
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    //Getting user logged email
    this.getUserId().then((userEmail) => {
      console.log(userEmail);
      this.setState({
        userLoggedEmail:JSON.parse(userEmail)
      });
    })

   
}

//Post Ad Button Click Event
onPostAdButtonClicked(){

  if(this.state.selectCondition.length <= 0 || this.state.selectCategory.length <=0 ||
     this.state.itemname.length<=0 || this.state.title.length<=0 || 
     this.state.description.length<=0 || this.state.city.length<=0 || 
     this.state.price.length<=0|| this.state.contact_number<=0){
              this.setState({
                fillDetails:true,
              });
  }else{

    this.fetchPostAdAPI();

  }

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

    let { fullname, model, title, itemname,description, price, city, contact_number , Condition , Category} = this.state;



    return (

     
      <View style={styles.container}>

        <StatusBar backgroundColor="#3764ad" barStyle="light-content"/>

        <Toolbar navigation={this.props.navigation}/>


        <ScrollView style={{ backgroundColor: 'white' }}>
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={{ flex:1 , flexDirection:'column', width: Metrics.DEVICE_WIDTH, padding:10 }}>

            <Dropdown
                ref={this.categorySelect}
                value={Category}
                onChangeText={this.onChangeTextForCategory}
                label='Category'
                data={categoryData}
                rippleOpacity={0.1}
              />

              <Dropdown
                ref={this.conditionSelect}
                value={Condition}
                onChangeText={this.onChangeTextForCondition}
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
                label='Item Name'
                value={itemname}
                onChangeText={(itemname) => this.setState({ itemname })}
              />

              <TextField
                label='Title'
                value={title}
                onChangeText={(title) => this.setState({ title })}
              />
              <TextField
                label='Description'
                value={description}
                multiline={true}
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

              <TextField
                label='Contact Number'
                value={contact_number}
                onChangeText={(contact_number) => this.setState({ contact_number })}
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

            <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.onPostAdButtonClicked()}>
                <Text style={styles.buttonText}>Post My Ad</Text>
              </TouchableHighlight>

            </View>

          </KeyboardAvoidingView>
        </ScrollView>
        {/* All Notification Alerts  */}
          <AwesomeAlert
          title="Please wait ..."
          show={this.state.progress}
          showProgress={true}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
        />
          <AwesomeAlert
          show={this.state.postAdSuccess}
          showProgress={false}
          title="Congratulations !!!"
          message="Your Ad Has Been Posted..."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
               //Navigate to Home Screen
              var { navigate} = this.props.navigation;
              navigate("Drawer",{});
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
          show={this.state.postAdError}
          showProgress={false}
          title="Error Occured"
          message="Please try again later..."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            this.setState({postAdError:false});
          }}
          />

     
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

uploadButton: {
  width: Metrics.DEVICE_WIDTH / 3
},
uploadImage:{
  marginLeft:Metrics.DEVICE_WIDTH/5,
},

buttonContainer: {
  height:55,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  width:300,
  borderRadius:30,
  marginLeft:Metrics.DEVICE_WIDTH/8,
},
sendButton: {
  backgroundColor: "#ce4040",
},
buttonText: {
  color: 'white',
  fontSize:17,
},





});
