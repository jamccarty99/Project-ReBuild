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


                        // <div className='col-md-3'>
                        //     <div className="card text-white bg-info mb-5 mt-3 ml-5 mr-3">
                        //         <img className='mx-2 pt-3 rounded mx-auto d-block' src="https://images-na.ssl-images-amazon.com/images/I/516Q94cVy0L._SL160_.jpg" width="auto" height="auto" alt="Black Diamond Solution Climbing Harness"/>
                        //         <div className="card-body">
                        //             <h5 className="card-title">Black Diamond Solution Climbing Harness</h5>
                        //             <p className="card-text">Men's - Slate X-Large</p>
                        //             <span className='ml-auto p-2 font-weight-bold text-xl-left mr-4' id='cost' >$69.95</span><a href="/form" className="btn btn-success">ADD</a>
                        //         </div>
                        //     </div>
                        // </div>

//TODO: Use this code for a delete icon when delete function is enabled
//<button type="button" class="close" aria-label="Close">
//<span aria-hidden="true">&times;</span>
//</button>


//TODO: Content from my form component
// import React, { Component } from 'react'
// import { connect } from "react-redux"
// import { bindActionCreators } from "redux"
// import { FETCH_PRODUCTS, FETCH_SINGLE_PRODUCT } from '../../actions/types'
// import Header from '../Header'


// class FormContainer extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             price: '',
//             room: '',
//             search: ''
//         }

//         this.handleRoomChange = this.handleRoomChange.bind(this);
//         this.handleSearchChange = this.handleSearchChange.bind(this);
//         this.handlePriceChange = this.handlePriceChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleRoomChange(event) {
//         this.setState({room: event.target.value});
//     }
//     handleSearchChange(event) {
//         this.setState({search: event.target.value});
//     }
//     handlePriceChange(event) {
//         this.setState({price: event.target.value});
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         console.log('handleSubmit log', this.state);
//         this.props.FETCH_PRODUCTS(this.state).then(response => {
//             const products = this.props.products
//             for (let i=0;i<products.length;i++) {
//                 this.props.FETCH_SINGLE_PRODUCT(products[i].id)
//             }
//         }).then(()=>this.props.history.push("/"))
//     }

//     render() {
//         return (
//         <div>
//             <Header page={'product'}/>
//             <div className="container search-form">
//             <h1 className="text-center">Form Fields</h1>
//             <form className="form-horizontal" >
//                 <div className="form-group row">
//                 <label className="col-form-label"></label>
//                     <div className="col-sm-1">
//                         <button type="submit" onClick={this.handleSubmit} className="btn btn-primary mt-2">Search</button>
//                     </div>
//                 <label className="col-sm-2 col-form-label mt-1">Select Current Room:</label>
//                     <div className="col-sm-2">
//                     <select className="form-control mt-3 mb-2" value={this.state.room} onChange={this.handleRoomChange}>
//                         <option className="room" value="other">Other</option>
//                         <option className="room" value="Master Bedroom">Master Bedroom</option>
//                         <option className="room" value="Master Bathroom">Master Bathroom</option>
//                         <option className="room" value="Bedroom">Bedroom</option>
//                         <option className="room" value="Bathroom">Bathroom</option>
//                         <option className="room" value="Living Room">Living Room</option>
//                         <option className="room" value="Laundry Room">Laundry Room</option>
//                         <option className="room" value="Kitchen">Kitchen</option>
//                         <option className="room" value="Dining Room">Dining Room</option>
//                         <option className="room" value="Office">Office</option>
//                         <option className="room" value="Garage">Garage</option>
//                     </select>
//                     </div>
//                 </div>
//             </form>
//             </div>
//         </div>
//         )
//     }
// }

// function mapStateToProps(state) {
//     return { products: state.products };
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ FETCH_PRODUCTS, FETCH_SINGLE_PRODUCT }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
