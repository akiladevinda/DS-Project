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
//Old One const USER_REGISTER_URL = 'http://10.0.2.2:8080/api/wikunamu/user/save';

//Login URL Fro All Users
const USER_LOGIN_URL = 'http://10.0.2.2:8081/api/wikunamu/user/login';

//New User Register For All Users
const USER_REGISTER_URL = 'http://10.0.2.2:8081/api/wikunamu/user/save';

//User Details For Main Profile Screen
const  USER_PROFILE_URL_MAIN  = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/user-details-main.php';

//User Detail Link For Update Screen
const USER_PROFILE_URL_SEC = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/user-details-second.php';

//User Detail Update URL Link
const UPDATE_DETAILS_URL = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/user-update.php';

//Post Ad Live API Link
const USER_POSTAD_URL = 'http://10.0.2.2:8081/api/wikunamu/ads/save';

//Get All Ad Details
const GET_ADDETAILS_URL = 'http://10.0.2.2:8081/api/wikunamu/ads/myAds'

//Delete User Account From Database
const DELETE_USERACC_URL = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/delete-user.php'

//Delete Ad Details from Database
const DELETE_AD_URL = 'https://wikunamulkmain.000webhostapp.com/WIkunamuLK/api/delete-ad.php'

//Get Category Details
const GET_CATDETAILS_URL = 'http://10.0.2.2:8081/api/wikunamu/ads/all_by_category?ad_category_name=Mobile Phone'
const GET_CATDETAILS_URL_MOBILE_PHONE = 'http://10.0.2.2:8081/api/wikunamu/ads/all_by_category?ad_category_name=Mobile Phone'
const GET_CATDETAILS_URL_ELECTRONICS = 'http://10.0.2.2:8081/api/wikunamu/ads/all_by_category?ad_category_name=Electronics'
const GET_CATDETAILS_URL_MENS_FASHION = 'http://10.0.2.2:8081/api/wikunamu/ads/all_by_category?ad_category_name=Mens Fashion'
const GET_CATDETAILS_URL_WOMENS_FASHION = 'http://10.0.2.2:8081/api/wikunamu/ads/all_by_category?ad_category_name=Womens Fashion'
const GET_CATDETAILS_URL_VEHICLE = 'http://10.0.2.2:8081/api/wikunamu/ads/all_by_category?ad_category_name=Vehicle'
const GET_CATDETAILS_URL_JOBS = 'http://10.0.2.2:8081/api/wikunamu/ads/all_by_category?ad_category_name=Jobs'
const GET_CATDETAILS_URL_HOUSE_RENT = 'http://10.0.2.2:8081/api/wikunamu/ads/all_by_category?ad_category_name=House Rent'
const GET_CATDETAILS_URL_OTHERS= 'http://10.0.2.2:8081/api/wikunamu/ads/all_by_category?ad_category_name=Others'



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
  GET_CATDETAILS_URL_MOBILE_PHONE:GET_CATDETAILS_URL_MOBILE_PHONE,
  GET_CATDETAILS_URL_ELECTRONICS:GET_CATDETAILS_URL_ELECTRONICS,
  GET_CATDETAILS_URL_MENS_FASHION:GET_CATDETAILS_URL_MENS_FASHION,
  GET_CATDETAILS_URL_WOMENS_FASHION:GET_CATDETAILS_URL_WOMENS_FASHION,
  GET_CATDETAILS_URL_VEHICLE:GET_CATDETAILS_URL_VEHICLE,
  GET_CATDETAILS_URL_JOBS:GET_CATDETAILS_URL_JOBS,
  GET_CATDETAILS_URL_HOUSE_RENT:GET_CATDETAILS_URL_HOUSE_RENT,
  GET_CATDETAILS_URL_OTHERS:GET_CATDETAILS_URL_OTHERS,

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