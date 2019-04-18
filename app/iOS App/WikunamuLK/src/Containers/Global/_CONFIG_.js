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
//Old One const USER_REGISTER_URL = 'http://10.0.2.2/WIkunamuLK/api/user-register.php';

//Login URL Fro All Users
const USER_LOGIN_URL = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/user-login.php';

//New User Register For All Users
const USER_REGISTER_URL = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/user-register.php';

//User Details For Main Profile Screen
const  USER_PROFILE_URL_MAIN  = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/user-details-main.php';

//User Detail Link For Update Screen
const USER_PROFILE_URL_SEC = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/user-details-second.php';

//User Detail Update URL Link
const UPDATE_DETAILS_URL = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/user-update.php';

//Post Ad Live API Link
const USER_POSTAD_URL = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/post-ad.php';

//Get All Ad Details
const GET_ADDETAILS_URL = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/ad-details-user.php'

//Delete User Account From Database
const DELETE_USERACC_URL = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/delete-user.php'

//Delete Ad Details from Database
const DELETE_AD_URL = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/delete-ad.php'

//Get Category Details
const GET_CATDETAILS_URL = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/ad-details-category.php'



 /**
 * Backup API LINKS -----------------------------------------------------
 */


//Login URL Fro All Users
const USER_LOGIN_URL_BACKUP = 'https://wikunamulkbackup.000webhostapp.com/WIkunamuLK/api/user-login.php';

//New User Register For All Users
const USER_REGISTER_URL_BACKUP = 'https://wikunamulkbackup.000webhostapp.com/WIkunamuLK/api/user-register.php';

//User Details For Main Profile Screen
const  USER_PROFILE_URL_MAIN_BACKUP  = 'https://wikunamulkbackup.000webhostapp.com/WIkunamuLK/api/user-details-main.php';

//User Detail Link For Update Screen
const USER_PROFILE_URL_SEC_BACKUP = 'https://wikunamulkbackup.000webhostapp.com/WIkunamuLK/api/user-details-second.php';

//User Detail Update URL Link
const UPDATE_DETAILS_URL_BACKUP = 'https://wikunamulkbackup.000webhostapp.com/WIkunamuLK/api/user-update.php';

//Post Ad Live API Link
const USER_POSTAD_URL_BACKUP = 'https://wikunamulkbackup.000webhostapp.com/WIkunamuLK/api/post-ad.php';

//Get All Ad Details
const GET_ADDETAILS_URL_BACKUP = 'https://wikunamulkbackup.000webhostapp.com/WIkunamuLK/api/ad-details-user.php'

//Delete User Account From Database
const DELETE_USERACC_URL_BACKUP = 'https://wikunamulkbackup.000webhostapp.com/WIkunamuLK/api/delete-user.php'

//Delete Ad Details from Database
const DELETE_AD_URL_BACKUP = 'https://wikunamulkbackup.000webhostapp.com/WIkunamuLK/api/delete-ad.php'

//Get Category Details
const GET_CATDETAILS_URL_BACKUP = 'https://wikunamulkbackup.000webhostapp.com/WIkunamuLK/api/ad-details-category.php'



//export all links
export default {

  USER_PROFILE_URL_MAIN:USER_PROFILE_URL_MAIN,
  USER_PROFILE_URL_SEC:USER_PROFILE_URL_SEC,
  UPDATE_DETAILS_URL:UPDATE_DETAILS_URL,
  USER_LOGIN_URL:USER_LOGIN_URL,
  USER_REGISTER_URL:USER_REGISTER_URL,
  USER_POSTAD_URL:USER_POSTAD_URL,
  GET_ADDETAILS_URL:GET_ADDETAILS_URL,
  DELETE_USERACC_URL:DELETE_USERACC_URL,
  DELETE_AD_URL:DELETE_AD_URL,
  GET_CATDETAILS_URL:GET_CATDETAILS_URL,

  USER_LOGIN_URL_BACKUP:USER_LOGIN_URL_BACKUP,
  USER_REGISTER_URL_BACKUP:USER_REGISTER_URL_BACKUP,
  USER_PROFILE_URL_MAIN_BACKUP:USER_PROFILE_URL_MAIN_BACKUP,
  USER_PROFILE_URL_SEC_BACKUP:USER_PROFILE_URL_SEC_BACKUP,
  UPDATE_DETAILS_URL_BACKUP:UPDATE_DETAILS_URL_BACKUP,
  USER_POSTAD_URL_BACKUP:USER_POSTAD_URL_BACKUP,
  GET_ADDETAILS_URL_BACKUP:GET_ADDETAILS_URL_BACKUP,
  DELETE_USERACC_URL_BACKUP:DELETE_USERACC_URL_BACKUP,
  DELETE_AD_URL_BACKUP:DELETE_AD_URL_BACKUP,
  GET_CATDETAILS_URL_BACKUP:GET_CATDETAILS_URL_BACKUP,

}