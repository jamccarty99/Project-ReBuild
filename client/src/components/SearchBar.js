import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchProducts } from '../actions'



class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          search: ''
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearchChange(event) {
        this.setState({search: event.target.value});
   
        
    }

    handleSubmit(event) {
        event.preventDefault();
        
        this.props.fetchProducts(this.state);
        console.log('handleSubmit log', this.state);
        console.log(this.props);
        
    }
    render() {

        return (
            
            <div className='container'>
                <form className="form-inline my-2 my-lg-0 d-flex justify-content-center">
                    <input className="form-control mr-sm-2 " type="search" placeholder="Search for Items" aria-label="Search" value={this.state.search} onChange={this.handleSearchChange}/>
                        <button className="btn btn-success text-white my-2 my-sm-0" type="submit" onClick={this.handleSubmit}><Link to='/search'>START Search </Link></button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { products: state.products };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
