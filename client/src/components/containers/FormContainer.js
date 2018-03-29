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