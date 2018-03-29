import React from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addProductToReport } from '../actions'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'

class Report extends React.Component {
    render() {
        console.log('report props', this.props);
        
        return (
            <div>
                <Header page={'report'}/>
                <div className="table-responsive">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>Use this report to itemize and track your belongings for your insurance company</strong></td>
                                <td></td>
                                <td>Total Amount:</td>
                                <td>
                        
                                {
                                    this.props.report.reduce((total, product) => {
                                        return total += parseFloat(product.ItemAttributes[0].ListPrice[0].FormattedPrice[0].replace('$', ''))
                                    }, 0)
                                }
                                
                                </td>
                            </tr> 
                            <tr className="table-bordered">
                                <th scope="col">Item #</th>
                                <th scope="col">Image</th>
                                <th scope="col">Room</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Model</th>
                                <th scope="col">Title</th>
                                <th scope="col">Item Age (Year)</th>
                                <th scope="col">Item Age (Month)</th>
                                <th scope="col">Cost</th>
                            </tr>
                        </thead>
                        <tbody className="table-bordered">
                            { 
                                this.props.report.map((product, i) => {
                                    const totalCost = product.ItemAttributes[0].ListPrice[0].FormattedPrice[0];
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{i}</th>
                                            <td><img src={product.SmallImage[0].URL[0]}/></td>
                                            <td>n/a</td>
                                            <td>{product.ItemAttributes[0].Brand[0]}</td>
                                            <td>{product.ItemAttributes[0].Model[0]}</td>
                                            <td>{product.ItemAttributes[0].Title[0]}</td>
                                            <td>n/a</td>
                                            <td>n/a</td>
                                            <td id='cost'>{product.ItemAttributes[0].ListPrice[0].FormattedPrice[0]}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        report: state.report
    };
}

export default connect(mapStateToProps, null)(Report);
