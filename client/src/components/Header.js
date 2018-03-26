import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import UserInfo from './UserInfo'



const Header = () => (
      <ul className="navigation grid grid-gutters large-grid-fit med-grid-fit small-grid-1of2">
        <li className="grid-cell">
          <Link className="navigation-link navigation-brand" to="/Form">
            Forms
          </Link>

          <UserInfo />
        </li>
      </ul>
)
export default Header
