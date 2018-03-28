import axios from "axios";
import { FETCH_FORMS, FETCH_PRODUCTS, FETCH_SINGLE_FORM, FETCH_SINGLE_PRODUCT } from './types';
import { accessId, associateTag, secret } from './secret'
import CryptoJS from 'crypto-js'
import moment from 'moment'

const ROOT_URL = `http://webservices.amazon.com/onca/xml?`;
const ROOT_URL2 = `http://localhost:5000/`
//const formData = 'Harry%Potter';
const time = new Date;

export function fetchProducts(formData) {
  const getAmazonItemInfo = (keywords) => {

    let date = moment().startOf().add(-9, 'hours').format("YYYY-MM-DDThh:mm:ss.000") + 'Z'
    let SecretKey = "GENERATED_IN_AFFILATES_ACCOUNT";
    let AccessKey = "GENERATED_IN_AFFILATES_ACCOUNT";
    let AssociateTag = "FOUND_IN_AFFILATES_ACCOUNT";
    let parameters = [];
    //let url = 'webservices.amazon.co.uk' // UK account
    let url = 'webservices.amazon.com'// US account
  
    parameters.push("AWSAccessKeyId=" + accessId);
    parameters.push("Keywords=" + keywords);
    parameters.push("Operation=ItemSearch");
    parameters.push("SearchIndex=All");
    parameters.push("ResponseGroup=" + encodeURIComponent('Images,ItemAttributes,Offers'));
    parameters.push("Service=AWSECommerceService");
    parameters.push("Timestamp=" + encodeURIComponent(date));
    parameters.push("AssociateTag=" + associateTag);
    parameters.sort();
  
    let paramString = parameters.join('&');
    let string_to_sign = "GET\n" + url + "\n" + "/onca/xml\n" + paramString
  
    let signature = CryptoJS.HmacSHA256(string_to_sign, secret);
    signature = CryptoJS.enc.Base64.stringify(signature);
  
    let amazonUrl = "http://" + url + "/onca/xml?" + paramString + "&Signature=" + signature;
    return amazonUrl;
  }
  
  let keywords = 'iphone'
  console.log(getAmazonItemInfo(keywords))
  //TODO: Sample aws request- use to create my url generator
  // AWSAccessKeyId=AKIAJVKRTFMK3PCCYINQ&
  // AssociateTag=jamccarty99-20&
  // Availability=Available&
  // Condition=New&
  // Keywords=Harry%20Potter&
  // Operation=ItemSearch&
  // ResponseGroup=BrowseNodes%2CImages%2CItemAttributes%2COfferFull%2COffers%2CSimilarities&
  // SearchIndex=All&
  // Service=AWSECommerceService&
  // Timestamp=2018-03-27T14%3A12%3A29.000Z&   ${time.toISOString().replace(":", "%3A")}
  // Signature=VzkPe4MbXASVuFBk%2FWT2Gp4OTvQ4I5rKWku6h1%2Fb2vs%3D
  //.toString().replace(" ","%20")



  // const key = `AWSAccessKeyId=${accessId}`
  // const tag = `&AssociateTag=${associateTag}`
  // const availability = `&Availability=Available`
  // const condition = `&Condition=New`
  // const keywords = `&Keywords=${formData.toString().replace(" ","%20")}`
  // const operation = `&Operation=ItemSearch`
  // const responseGroup = `&ResponseGroup=EditorialReview%2CImages%2CItemAttributes%2COfferFull%2CSimilarities`
  // const searchIndex = `&SearchIndex=All`
  // const service = `&Service=AWSECommerceService`
  // const timestamp = `&Timestamp=2018-03-28T13%3A35%3A16.000Z`
  
  // let secret_key = `${secret}`
  // let message = `GET\nwebservices.amazon.com\n/onca/xml\n${key}${tag}${availability}${condition}${keywords}${operation}${responseGroup}${searchIndex}${service}${timestamp}`
  // let hash = CryptoJS.HmacSHA256(message, secret_key);
  // console.log('hash', hash);
  // let result = CryptoJS.enc.Base64.stringify(hash);
  // console.log('MARK: RESULT ', result);
  // const signature = `&Signature=${result.toString().replace("+", "%2B").replace("=", "%3D")}`
  // const url = `${ROOT_URL}${key}${tag}${availability}${condition}${keywords}${operation}${responseGroup}${searchIndex}${service}${timestamp}${signature}`;
  // console.log(url);
  
  //response is given in xml and must be converted to json
  const xml = axios.get(getAmazonItemInfo)

  // function xmlToJson(xml) {
  //   var res = {};
  //   // Create the return object
    
  
  //   if (xml.nodeType == 1) { // element
      
  //     // do attributes
  //     if (xml.attributes.length > 0) {
  //     res["@attributes"] = {};
  //       for (var j = 0; j < xml.attributes.length; j++) {
  //         var attribute = xml.attributes.item(j);
  //         res["@attributes"][attribute.nodeName] = attribute.nodeValue;
  //       }
  //     }
  //   } else if (xml.nodeType == 3) { // text
  //     res = xml.nodeValue;
  //   }
  
  //   // do children
  //   if (xml.hasChildNodes) {
  //     for(var i = 0; i < xml.childNodes.length; i++) {
  //       var item = xml.childNodes.item(i);
  //       var nodeName = item.nodeName;
  //       if (typeof(res[nodeName]) == "undefined") {
  //         res[nodeName] = xmlToJson(item);
  //       } else {
  //         if (typeof(res[nodeName].push) == "undefined") {
  //           var old = res[nodeName];
  //           res[nodeName] = [];
  //           res[nodeName].push(old);
  //         }
  //         debugger;
  //         res[nodeName].push(xmlToJson(item));
  //       }
  //     }
  //   }
  //   return res;
  // };

  console.log(xml);
  
  return {
    type: FETCH_PRODUCTS,
    payload: xml
  };
}

export function fetchForms(req) {
    const request = axios.get(`${ROOT_URL2}`)
  
    return {
      type: FETCH_FORMS,
      payload: request
    };
  }
  export function fetchSingleForm(id) {
    const request = axios.get(`${ROOT_URL2}/:id`)
  
    return {
      type: FETCH_SINGLE_FORM,
      payload: request
    };
  }

export function fetchSingleProduct(id) {
  const request = axios.get(`${ROOT_URL2}/:id`)

  return {
    type: FETCH_SINGLE_PRODUCT,
    payload: request
  };
}
