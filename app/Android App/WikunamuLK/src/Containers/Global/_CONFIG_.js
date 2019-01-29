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


//Login URL Fro All Users
const USER_LOGIN_URL = 'http://10.0.2.2/API/post/login.php';
//New User Register For All Users
const USER_REGISTER_URL = 'http://10.0.2.2/API/post/register.php';
//User Details For Main Profile Screen
const  USER_PROFILE_URL  = 'http://10.0.2.2/API/post/user-details.php';
//User Detail Link For Update Screen
const USER_PROFILE_URL_SEC = 'http://10.0.2.2/API/post/user-detail-second.php';
//User Detail Update URL Link
const UPDATE_DETAILS_URL = 'http://10.0.2.2/API/post/update-user.php';
//Post Ad Live API Link
const USER_POSTAD_URL = 'http://10.0.2.2/API/post/post-ad.php';
//Get All Ad Details
const GET_ADDETAILS_URL = 'http://10.0.2.2/API/post/get-ad-details.php'


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

}