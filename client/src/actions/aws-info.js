// import axios from "axios";
// import { FETCH_FORMS, FETCH_PRODUCTS, FETCH_SINGLE_FORM, FETCH_SINGLE_PRODUCT } from './types';
// import { accessId, associateTag, secret } from './secret'
// import CryptoJS from 'crypto-js'
// import moment from 'moment'

// const ROOT_URL = `http://webservices.amazon.com/onca/xml?`;
// const ROOT_URL2 = `http://localhost:5000/`
// //const formData = 'Harry%Potter';`${search.toString().replace(" ","%20")}`


// export function fetchProducts(search) {
//   console.log('passed in', search);
  
//   let keywords = `${search.search.toString().replace(" ","%20")}`;
//   const getAmazonItemInfo = (keywords) => {
   
//     function timestamp() {
//       var date = new Date();
//       var y = date.getUTCFullYear().toString();
//       var m = (date.getUTCMonth() + 1).toString();
//       var d = date.getUTCDate().toString();
//       var h = date.getUTCHours().toString();
//       var min = date.getUTCMinutes().toString();
//       var s = date.getUTCSeconds().toString();
  
//       if(m.length < 2) { m = "0" + m; }
//       if(d.length < 2) { d = "0" + d; }
//       if(h.length < 2) { h = "0" + h; }
//       if(min.length < 2) { min = "0" + min; }
//       if(s.length < 2) { s = "0" + s}
  
//       var date = y + "-" + m + "-" + d;
//       var time = h + ":" + min + ":" + s;
//       return date + "T" + time + "Z";
//     }
  

//     let date = timestamp();
//     let SecretKey = "GENERATED_IN_AFFILATES_ACCOUNT";
//     let AccessKey = "GENERATED_IN_AFFILATES_ACCOUNT";
//     let AssociateTag = "FOUND_IN_AFFILATES_ACCOUNT";
//     let parameters = [];
//     let url = 'webservices.amazon.com'// US account
  
//     parameters.push("AWSAccessKeyId=" + accessId);
//     parameters.push("Keywords=" + keywords);
//     parameters.push("Operation=ItemSearch");
//     parameters.push("SearchIndex=All");
//     parameters.push("Condition=New");
//     parameters.push("ResponseGroup=" + encodeURIComponent('Images,ItemAttributes,Offers'));
//     parameters.push("Service=AWSECommerceService");
//     parameters.push("Timestamp=" + encodeURIComponent(date));
//     parameters.push("AssociateTag=" + associateTag);
//     parameters.sort();
  
//     let paramString = parameters.join('&');
//     let string_to_sign = "GET\n" + url + "\n" + "/onca/xml\n" + paramString
  
//     let result = CryptoJS.HmacSHA256(string_to_sign, secret);
//     let signature = CryptoJS.enc.Base64.stringify(result);
//     console.log('signature', signature);
//     let signed = `${signature.replace("+", "%2B").replace("+", "%2B").replace("+", "%2B").replace("=", "%3D")}`;
  
//     let amazonUrl = "http://" + url + "/onca/xml?" + paramString + "&Signature=" + signed;
      
      
//     return amazonUrl;
//   }
  
//   console.log('output', getAmazonItemInfo(keywords))
//   const xml = axios.get(getAmazonItemInfo(keywords))