/**
 * © Copyrights 2018
 * Wikunamu.LK - Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 * Global API Configs For Application
 */

/**
 * Change All the links to LIVE before release the application
 */


 /**
 * Primary API LINKS -----------------------------------------------------
 */
//Old One const USER_REGISTER_URL = 'https://wikunamulkapp.000webhostapp.com/API/post/register.php';

//Login URL Fro All Users
const USER_LOGIN_URL = 'https://wikunamulkapp.000webhostapp.com/API/post/login.php';

//New User Register For All Users
const USER_REGISTER_URL = 'https://wikunamulkapp.000webhostapp.com/API/post/register.php';

//User Details For Main Profile Screen
const  USER_PROFILE_URL  = 'https://wikunamulkapp.000webhostapp.com/API/post/user-details.php';

//User Detail Link For Update Screen
const USER_PROFILE_URL_SEC = 'https://wikunamulkapp.000webhostapp.com/API/post/user-detail-second.php';

//User Detail Update URL Link
const UPDATE_DETAILS_URL = 'https://wikunamulkapp.000webhostapp.com/API/post/update-user.php';

//Post Ad Live API Link
const USER_POSTAD_URL = 'https://wikunamulkapp.000webhostapp.com/API/post/post-ad.php';

//Get All Ad Details
const GET_ADDETAILS_URL = 'https://wikunamulkapp.000webhostapp.com/API/post/get-ad-details.php'

//Delete User Account From Database
const DELETE_USERACC_URL = 'https://wikunamulkapp.000webhostapp.com/API/post/delete-user.php'

//Delete Ad Details from Database
const DELETE_AD_URL = 'https://wikunamulkapp.000webhostapp.com/API/post/delete-ad.php'

//Get Category Details
const GET_CATDETAILS_URL = 'https://wikunamulkapp.000webhostapp.com/API/post/get-category-details.php'



 /**
 * Backup API LINKS -----------------------------------------------------
 */



//export all links
export default {

  USER_PROFILE_URL:USER_PROFILE_URL,
  USER_PROFILE_URL_SEC:USER_PROFILE_URL_SEC,
  UPDATE_DETAILS_URL:UPDATE_DETAILS_URL,
  USER_LOGIN_URL:USER_LOGIN_URL,
  USER_REGISTER_URL:USER_REGISTER_URL,
  USER_POSTAD_URL:USER_POSTAD_URL,
  GET_ADDETAILS_URL:GET_ADDETAILS_URL,
  DELETE_USERACC_URL:DELETE_USERACC_URL,
  DELETE_AD_URL:DELETE_AD_URL,
  GET_CATDETAILS_URL:GET_CATDETAILS_URL,

}