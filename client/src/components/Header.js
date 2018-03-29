import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar'
import 'bootstrap/dist/css/bootstrap.css'
import '../index.css'; 

class Header extends Component {
  render() {

    if(this.props.page === 'home'){
      return (
        <div> 
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand rebuild-bl font-weight-bold text-xl-left" href="/">Project ReBuild<img src='http://cblmoney.com/wp-content/themes/custom-builder-lending/images/house-img.png' height='50px' /></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a className="btn btn-sm dropdown-toggle dropdown btn-rebuild-form ml-3" href="#" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Helpful Links
                  </a>
                  <div className="dropdown-menu dropdown-content" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item dropdown-content" href="http://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/home-fire-recovery">American Red Cross</a>
                    <a className="dropdown-item dropdown-content" href="https://www.usfa.fema.gov/downloads/pdf/publications/fa_46.pdf">FEMA</a>
                    <a className="dropdown-item dropdown-content" href=""></a>
                  </div>
                </li>
              </ul>
                <a className="btn btn-lg btn-rebuild-form" href="/form" >View Form</a>
            </div>
          </nav>
        </div>
      )
    } else if(this.props.page === 'product') {
      return (
        <div> 
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand rebuild-bl font-weight-bold text-xl-left" href="/">Project ReBuild<img src='http://cblmoney.com/wp-content/themes/custom-builder-lending/images/house-img.png' height='50px' /></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a className="btn btn-sm dropdown-toggle btn-rebuild-form dropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Helpful Links
                  </a>
                  
                  <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item dropdown-content" href="http://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/home-fire-recovery">American Red Cross</a>
                    <a className="dropdown-item dropdown-content" href="https://www.usfa.fema.gov/downloads/pdf/publications/fa_46.pdf">FEMA</a>
                  </div>
                </li>
              </ul>
              <SearchBar />
                <a className="btn btn-lg btn-rebuild-form mr-5 pr-5" href="/form" >View Form<span className="badge badge-pill badge-success invisible" >+</span></a>
            </div>
          </nav>
        </div>
      )
    } else if(this.props.page === 'form') {
      return (
        <div> 
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand rebuild-bl font-weight-bold text-xl-left" href="/" background-image='http://cblmoney.com/wp-content/themes/custom-builder-lending/images/house-img.png' width='50px' height='50px'>Project ReBuild<img src='http://cblmoney.com/wp-content/themes/custom-builder-lending/images/house-img.png' height='50px' /></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a className="btn btn-sm dropdown-toggle btn-rebuild-form dropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="true">
                    Helpful Links
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="http://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/home-fire-recovery">American Red Cross</a>
                    <a className="dropdown-item" href="https://www.usfa.fema.gov/downloads/pdf/publications/fa_46.pdf"></a>
                  </div>
                </li>
              </ul>
                <SearchBar />
                <a className="btn btn-lg rebuild-dk" href="/settings" ><img className='rounded-circle' height='40px' src='http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/settings-icon.png'/></a>
            </div>
          </nav>
        </div>
      )
    }
  }
}

export default Header
