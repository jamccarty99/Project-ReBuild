import React from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchProducts } from '../actions'
import { withRouter } from 'react-router'

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
        this.props.fetchProducts(this.state.search).then((data) => {            
            this.props.history.push("/products")
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col offset-md-3 col-6 '>
                        <form className="form-inline input-group input-group-lg my-2 my-lg-0 d-flex justify-content-center">
                            <input className="form-control mr-lg-2" height='30px' width='75px' type="search" placeholder="Search for Items" aria-label="Search" value={this.state.search} onChange={this.handleSearchChange}/>
                                <button className="btn btn-success text-white my-2 my-sm-0" type="submit" onClick={this.handleSubmit}>SEARCH</button>
                        </form>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar));
