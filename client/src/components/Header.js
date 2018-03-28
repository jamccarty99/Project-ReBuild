import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import UserInfo from './UserInfo'
import 'bootstrap/dist/css/bootstrap.css'
import '../index.css'; 

class Header extends Component {
  render() {

    if(this.props.page == 'home'){
      return (
        <div> 
          <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
            <a className="navbar-brand rebuild-bl" href="/">Project ReBuild</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Helpful Links
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="http://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/home-fire-recovery">American Red Cross</a>
                    <a className="dropdown-item" href="https://www.usfa.fema.gov/downloads/pdf/publications/fa_46.pdf"></a>
                  </div>
                </li>
              </ul>
                <a className="btn my-2 my-sm-0 btn-lg rebuild-or" href="/form" >View Form</a>
            </div>
          </nav>
        </div>
      )
    } else if(this.props.page == 'product') {
      return (
        <div> 
          <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
            <a className="navbar-brand rebuild-bl" href="/">Project ReBuild</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Helpful Links
                  </a>
                  
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="http://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/home-fire-recovery">American Red Cross</a>
                    <a className="dropdown-item" href="https://www.usfa.fema.gov/downloads/pdf/publications/fa_46.pdf"></a>
                  </div>
                </li>
              </ul>
              <SearchBar />
                <a className="btn my-2 my-sm-0 btn-lg rebuild-or" href="/form" >View Form</a>
            </div>
          </nav>
        </div>
      )
    } else if(this.props.page == 'form') {
      return (
        <div> 
          <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
            <a className="navbar-brand rebuild-bl" href="/">Project ReBuild</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Helpful Links
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="http://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/home-fire-recovery">American Red Cross</a>
                    <a className="dropdown-item" href="https://www.usfa.fema.gov/downloads/pdf/publications/fa_46.pdf"></a>
                  </div>
                </li>
              </ul>
                <a className="btn btn-lg rebuild-dk" href="#" >Settings</a>
            </div>
          </nav>
        </div>
      )
    }
  }
}

export default Header
