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
  Image,Dimensions,ImageBackground,AsyncStorage,StatusBar,BackHandler,TouchableOpacity,ScrollView,FlatList
} from 'react-native';


//Device width and height
import Metrics from '../../Dimensions/Metrics';

//import custom libraries
import LinearGradient from 'react-native-linear-gradient';
import { Card, ListItem, Button } from 'react-native-elements'
import AwesomeAlert from 'react-native-awesome-alerts';


const URL_TESTING = 'http://www.powertrend.lk/backend/web/index.php?r=api/paid-books';


export default class MobilePhoneMain extends Component{

  constructor(props) {
    super(props);
    this.state = {
      paidBooks:[],
      progress:false,
  };

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

}

          fetchData = () => {

            this.setState({
              progress:true
            });

            //Downloaded Books API Call  --------------------------------------
            fetch(URL_TESTING, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body:JSON.stringify( {
                "serialNumber": "0bf3575814103e87",
              })


          })
              .then((response) => response.json())
              .then((responseText) => {
                // alert(responseText.success);
                  this.setState({
                    paidBooks: responseText.data,
                    // progress:false,
                  });

                  if(responseText.success == true){
                    this.setState({
                      progress:false,
                    });
                  }
                  
              })
              .catch((error) => {
                  // alert('errorrrr');
              });
              

          }

          showPaidBooks(){
            return(
              <FlatList
              horizontal={false}
              keyExtractor={item => item.id}
              data={this.state.paidBooks}
              showsHorizontalScrollIndicator={true}
              renderItem={({item}) => this.renderDownloadedBooks(item)}
                />   
            );
          }

          renderDownloadedBooks(item) {
            return(

                          <Card
                            title={item.bookName}
                            image={{uri: item.bookImage}}>
                            <Text style={{marginBottom: 10}}>
                            {item.bookName}
                            </Text>
                            <Button
                            
                              backgroundColor='#03A9F4'
                              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                              title='VIEW NOW' />
                          </Card>
                
            )
          }


componentWillMount(){
 this.fetchData();
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


        <ScrollView style={{width:Metrics.DEVICE_WIDTH}}>

        {this.showPaidBooks()}
        
            {/* <Card
                  title='Samsung Galaxy S9'r
                  image={require('../../../Assets/Catagories/phones.jpg')}>
                  <Text style={{marginBottom: 10}}>
                   Price - 90 000 LKR
                  </Text>
                  <Button
                   
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
                </Card>

                <Card
                  title='iPhone 7 Plus 128GB'
                  image={require('../../../Assets/Catagories/phones.jpg')}>
                  <Text style={{marginBottom: 10}}>
                  Price - 95 000 LKR
                  </Text>
                  <Button
                    
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
                </Card>

                <Card
                  title='Samsung Galaxy S8'
                  image={require('../../../Assets/Catagories/phones.jpg')}>
                  <Text style={{marginBottom: 10}}>
                    Price - 95 000 LKR
                  </Text>
                  <Button
                   
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
                </Card>

                <Card
                  title='iPhone XS Max'
                  image={require('../../../Assets/Catagories/phones.jpg')}>
                  <Text style={{marginBottom: 10}}>
                    Price - 95 000 LKR
                  </Text>
                  <Button
                   
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
                </Card>

                <Card
                  title='iPhone XR'
                  image={require('../../../Assets/Catagories/phones.jpg')}>
                  <Text style={{marginBottom: 10}}>
                    Price - 95 000 LKR
                  </Text>
                  <Button
                   
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
                </Card> */}

            </ScrollView>

            <AwesomeAlert
          title="Loading ..."
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
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ffff',

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
    width:Metrics.DEVICE_WIDTH,
    height:60,
    marginTop:20,
  },




});
