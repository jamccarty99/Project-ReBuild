import React, { Component } from 'react'
import SearchBar from './SearchBar'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import '../index.css'; 

class Header extends Component {
  render() {

    if(this.props.page === 'home'){
      return (
        <div> 
          <nav className="navbar navbar-expand-lg navbar-header">
            <a className="navbar-brand rebuild-dk font-weight-bold text-xl-left" href="/">Project ReBuild<img src='http://cblmoney.com/wp-content/themes/custom-builder-lending/images/house-img.png' height='50px' /></a>
           
            
                <Link to="/report" className="btn btn-lg btn-rebuild-report mr-5 ml-5 pull-right" type="button">Report</Link>
              
           
          </nav>
        </div>
      )
    } else if(this.props.page === 'product') {
      return (
        <div> 
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand rebuild-dk font-weight-bold text-xl-left" href="/">Project ReBuild<img src='http://cblmoney.com/wp-content/themes/custom-builder-lending/images/house-img.png' height='50px' /></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <SearchBar />
              <Link to="/report" className="btn btn-lg btn-rebuild-report" type="button">Report</Link>
            </div>
          </nav>
        </div>
      )
    } else if(this.props.page === 'report') {
      return (
        <div> 
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand rebuild-dk font-weight-bold text-xl-left" href="/" background-image='http://cblmoney.com/wp-content/themes/custom-builder-lending/images/house-img.png' width='50px' height='50px'>Project ReBuild<img src='http://cblmoney.com/wp-content/themes/custom-builder-lending/images/house-img.png' height='50px' /></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <SearchBar />
                <a className="btn btn-lg rebuild-dk" href="#" ><img className='rounded-circle' height='40px' src='http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/settings-icon.png'/></a>
            </div>
          </nav>
        </div>
      )
    }
  }
}

export default Header
