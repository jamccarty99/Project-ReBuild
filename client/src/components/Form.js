 import React from 'react'

// //import { Grid, Input, Select } from 'react-spreadsheet-grid'
 import 'bootstrap/dist/css/bootstrap.css'
 import Header from './Header'


const columns = [{ key: 'id', name: 'ID' }, { key: 'title', name: 'Title' }, { key: 'id', name: 'ID' }, { key: 'title', name: 'Title' }, { key: 'id', name: 'ID' }, { key: 'title', name: 'Title' }, ];
const rows = [{ id: 1, title: 'Title 1' }, { id: 1, title: 'Title 1' }, { id: 1, title: 'Title 1' }];
const rowGetter = rowNumber => rows[rowNumber];

const Form = () => {
    return (
        <div>
            <Header page={'form'}/>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Item #</th>
                            <th scope="col">Room</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Model</th>
                            <th scope="col">Title</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Item Age (Year)</th>
                            <th scope="col">Item Age (Month)</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Total Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>6</td>
                                <td>Kitchen</td>
                                <td>Kitchen Aide</td>
                                <td>v6</td>
                                <td>Coffee Maker</td>
                                <td>1</td>
                                <td>5</td>
                                <td>2</td>
                                <td>$75.32</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>6</td>
                                <td>Kitchen</td>
                                <td>Kitchen Aide</td>
                                <td>v6</td>
                                <td>Coffee Maker</td>
                                <td>1</td>
                                <td>5</td>
                                <td>2</td>
                                <td>$75.32</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                                <td>6</td>
                                <td>Kitchen</td>
                                <td>Kitchen Aide</td>
                                <td>v6</td>
                                <td>Coffee Maker</td>
                                <td>1</td>
                                <td>5</td>
                                <td>2</td>
                                <td>$75.32</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

//TODO: Use this code for a delete icon when delete function is enabled
//<button type="button" class="close" aria-label="Close">
//<span aria-hidden="true">&times;</span>
//</button>



// const rows=[
//     { id: 'user1', formId: 3244, itemId: 1, room: 'Kitchen', brand: 'Kitchen Aid', model: 'v7', title: 'Kitchen Aid Stand Mixer', quantity: '1', itemYr: 1, itemMo: 4, cost: 257.93, positionId: 'Supervisor', managerId: '23425' },
//     { id: 'user1', formId: 3244, itemId: 2, room: 'Kitchen', brand: 'Kitchen Aid', model: 'v2', title: 'Hand Mixer', quantity: '1', itemYr: 1, itemMo: 4, cost: 257.93, positionId: 'Supervisor', managerId: '23425' },
//     { id: 'user1', formId: 3244, itemId: 3, room: 'Kitchen', brand: 'Kitchen Aid', model: 'v7', title: 'Kitchen Aid Stand Mixer', quantity: '1', itemYr: 1, itemMo: 4, cost: 257.93, positionId: 'Supervisor', managerId: '23425' },
//     { id: 'user1', formId: 3244, itemId: 4, room: 'Kitchen', brand: 'Kitchen Aid', model: 'v2', title: 'Hand Mixer', quantity: '1', itemYr: 1, itemMo: 4, cost: 257.93, positionId: 'Supervisor', managerId: '23425' },
//     { id: 'user1', formId: 3244, itemId: 5, room: 'Kitchen', brand: 'Kitchen Aid', model: 'v7', title: 'Kitchen Aid Stand Mixer', quantity: '1', itemYr: 1, itemMo: 4, cost: 257.93, positionId: 'Supervisor', managerId: '23425' },
//     { id: 'user1', formId: 3244, itemId: 6, room: 'Kitchen', brand: 'Kitchen Aid', model: 'v2', title: 'Hand Mixer', quantity: '1', itemYr: 1, itemMo: 4, cost: 257.93, positionId: 'Supervisor', managerId: '23425' },
//     // and so on...
// ];
 
// className Form extends React.Component {
//     constructor(props) {
//         super(props);
 
//         // Rows are stored in the state.
//         this.state = {
//             rows,
//             columns: this.initColumns()
//         };
//     }
  
//     // A callback called every time a value changed.
//     // Every time it save a new value to the state.
//     onFieldChange(rowId, field, value) {
//         rows[rowId][field] = value;
 
//         this.setState({
//             rows: [].concat(rows),
//             // Blurring focus from the current cell is necessary for a correct behavior of the Grid.
//             blurCurrentFocus: true
//         });
//     }
    
//     initColumns() {
//         return [
//           {
//             title: () => 'Item #', 
//             value: (row, { focus }) => {
            
//               // You can use the built-in Input.
//               return (
//                 <Input  
//                   value={row.itemId}
//                   focus={focus}
//                   onChange={this.onFieldChange.bind(this, row.id, 'itemId')}
//                 />
//               );
//             }
//           }, {
//             title: () => 'Room', 
//             value: (row, { focus }) => {
            
//               // You can use the built-in Input.
//               return (
//                 <Input  
//                   value={row.room}
//                   focus={focus}
//                   onChange={this.onFieldChange.bind(this, row.id, 'room')}
//                 />
//               );
//             }
//           }, {
//             title: () => 'Brand', 
//             value: (row, { focus }) => {
            
//               // You can use the built-in Input.
//               return (
//                 <Input  
//                   value={row.brand}
//                   focus={focus}
//                   onChange={this.onFieldChange.bind(this, row.id, 'brand')}
//                 />
//               );
//             }
//           }, {
//             title: () => 'Model#', 
//             value: (row, { focus }) => {
            
//               // You can use the built-in Input.
//               return (
//                 <Input  
//                   value={row.model}
//                   focus={focus}
//                   onChange={this.onFieldChange.bind(this, row.id, 'model')}
//                 />
//               );
//             }
//           }, {
//             title: () => 'Title', 
//             value: (row, { focus }) => {
            
//               // You can use the built-in Input.
//               return (
//                 <Input  
//                   value={row.title}
//                   focus={focus}
//                   onChange={this.onFieldChange.bind(this, row.id, 'title')}
//                 />
//               );
//             }
//           }, {
//             title: () => 'Quantity Lost', 
//             value: (row, { focus }) => {
            
//               // You can use the built-in Input.
//               return (
//                 <Input  
//                   value={row.quantity}
//                   focus={focus}
//                   onChange={this.onFieldChange.bind(this, row.id, 'quantity')}
//                 />
//               );
//             }
//           }, {
//             title: () => 'Item Age (Years)', 
//             value: (row, { focus }) => {
            
//               // You can use the built-in Input.
//               return (
//                 <Input  
//                   value={row.itemYr}
//                   focus={focus}
//                   onChange={this.onFieldChange.bind(this, row.id, 'itemYr')}
//                 />
//               );
//             }
//           }, {
//             title: () => 'Item Age (Months)', 
//             value: (row, { focus }) => {
            
//               // You can use the built-in Input.
//               return (
//                 <Input  
//                   value={row.itemMo}
//                   focus={focus}
//                   onChange={this.onFieldChange.bind(this, row.id, 'itemMo')}
//                 />
//               );
//             }
//           }, {
//             title: () => 'Cost to Replace Pre-Tax (each)', 
//             value: (row, { focus }) => {
            
//               // You can use the built-in Input.
//               return (
//                 <Input  
//                   value={row.cost}
//                   focus={focus}
//                   onChange={this.onFieldChange.bind(this, row.id, 'cost')}
//                 />
//               );
//             }
//           }, {
//             title: () => 'Item Age (Months)', 
//             value: (row, { focus }) => {
            
//               // You can use the built-in Input.
//               return (
//                 <Input  
//                   value={row.itemMo}
//                   focus={focus}
//                   onChange={this.onFieldChange.bind(this, row.id, 'itemMo')}
//                 />
//               );
//             }
//           }, {
//             title: () => 'Position',
//             value: (row, { focus }) => {
            
//                 // You can use the built-in Select.
//                 return (
//                     <Select  
//                       value={row.positionId}
//                       isOpen={focus}
//                       items={[]}
//                       onChange={this.onFieldChange.bind(this, row.id, 'positionId')}
//                     />
//                 );
//             }
//           }, {
//             title: () => 'Manager',
//             value: (row, { active, focus }) => {
            
//               // You can use whatever component you want to change a value.
//               return (
//                 <select  
//                   value={row.managerId}
//                   active={active}
//                   focus={focus}
//                   onSelectItem={this.onFieldChange.bind(this, row.id, 'managerId')}
//                 />
//               );
//             }
//           }
//         ]
//     }
 
//     render() {
//         return (
//             <Grid 
//                 columns={this.state.columns}
//                 rows={this.state.rows}
//                 getRowKey={row => row.id}
 
//                 // Don't forget to blur focused cell after a value has been changed.
//                 blurCurrentFocus={this.state.blurCurrentFocus}
//             />
        )
    }
// }

export default Form