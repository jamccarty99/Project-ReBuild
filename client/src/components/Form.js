 import React from 'react'
 import ReactDataGrid from 'react-data-grid';
// //import { Grid, Input, Select } from 'react-spreadsheet-grid'
 import 'bootstrap/dist/css/bootstrap.css'


const columns = [{ key: 'id', name: 'ID' }, { key: 'title', name: 'Title' }, { key: 'id', name: 'ID' }, { key: 'title', name: 'Title' }, { key: 'id', name: 'ID' }, { key: 'title', name: 'Title' }, ];
const rows = [{ id: 1, title: 'Title 1' }, { id: 1, title: 'Title 1' }, { id: 1, title: 'Title 1' }];
const rowGetter = rowNumber => rows[rowNumber];

const Form = () => {
  return (<ReactDataGrid
    columns={columns}
    rowGetter={rowGetter}
    rowsCount={rows.length}
    minHeight={500} />);
}
// const rows=[
//     { id: 'user1', formId: 3244, itemId: 1, room: 'Kitchen', brand: 'Kitchen Aid', model: 'v7', title: 'Kitchen Aid Stand Mixer', quantity: '1', itemYr: 1, itemMo: 4, cost: 257.93, positionId: 'Supervisor', managerId: '23425' },
//     { id: 'user1', formId: 3244, itemId: 2, room: 'Kitchen', brand: 'Kitchen Aid', model: 'v2', title: 'Hand Mixer', quantity: '1', itemYr: 1, itemMo: 4, cost: 257.93, positionId: 'Supervisor', managerId: '23425' },
//     { id: 'user1', formId: 3244, itemId: 1, room: 'Kitchen', brand: 'Kitchen Aid', model: 'v7', title: 'Kitchen Aid Stand Mixer', quantity: '1', itemYr: 1, itemMo: 4, cost: 257.93, positionId: 'Supervisor', managerId: '23425' },
//     { id: 'user1', formId: 3244, itemId: 2, room: 'Kitchen', brand: 'Kitchen Aid', model: 'v2', title: 'Hand Mixer', quantity: '1', itemYr: 1, itemMo: 4, cost: 257.93, positionId: 'Supervisor', managerId: '23425' },
//     { id: 'user1', formId: 3244, itemId: 1, room: 'Kitchen', brand: 'Kitchen Aid', model: 'v7', title: 'Kitchen Aid Stand Mixer', quantity: '1', itemYr: 1, itemMo: 4, cost: 257.93, positionId: 'Supervisor', managerId: '23425' },
//     { id: 'user1', formId: 3244, itemId: 2, room: 'Kitchen', brand: 'Kitchen Aid', model: 'v2', title: 'Hand Mixer', quantity: '1', itemYr: 1, itemMo: 4, cost: 257.93, positionId: 'Supervisor', managerId: '23425' },
//     // and so on...
// ];
 
// class Form extends React.Component {
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
//         )
//     }
// }

export default Form