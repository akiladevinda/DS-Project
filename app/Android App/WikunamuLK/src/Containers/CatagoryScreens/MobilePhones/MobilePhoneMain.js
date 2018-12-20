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
  StatusBar,
  BackHandler,
} from 'react-native';

import Metrics from '../../Dimensions/Metrics';
import LinearGradient from 'react-native-linear-gradient';
import AwesomeAlert from 'react-native-awesome-alerts';

import MobilePhoneMore from './MobilePhoneMore';

const URL_TESTING = 'http://www.powertrend.lk/backend/web/index.php?r=api/paid-books';


export default class MobilePhoneMain extends Component {

  constructor(props) {
    super(props);

          this.state = {
            paidBooks:[],
            progress:false,
        };

  this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  
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

  addProductToCart = () => {
    this.props.navigation.navigate("MobilePhoneMore" , {screen:MobilePhoneMore});
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

        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.paidBooks}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.bookName}</Text>
                    <Text style={styles.price}>{item.bookName}</Text>
                  </View>
                </View>

                <Image style={styles.cardImage} source={{uri:item.bookImage}}/>
                
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart()}>
                        <Text style={[styles.socialBarLabel, styles.buyNow]}>View More</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>

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
  container:{
    flex:1,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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