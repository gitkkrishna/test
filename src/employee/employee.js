import React from 'react';
import axios from 'axios';
import EmployeeList from './employeeList';
import EmployeeAddNewRow from './employeeAddNewRow';

class Employee extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			contacts : [],		
			contacts_bk : [],	
			search_text : '',
			newrow : false,
			total_pages : 0,			
			current_page : 1,
		};
	}
	componentWillMount() {	
		//alert(1);		
		const url = 'https://mywebadda.000webhostapp.com/api/employee';
		axios.get(url).then(response => response.data)
		.then((result) => {	
		  this.setState({ 
			  contacts : result['data'] ,
			  contacts_bk : result['data'],
			  total_pages : result['total_pages'],
			  current_page : result['page']
			 });
		 // alert(this.state.contacts);
		});
	}	
	
	handleSearch(e){		
		let newList = [];
		this.setState({search_text:e.target.value});	

		const filter = e.target.value.toString().toLowerCase();
		let contacts = this.state.contacts_bk;
		newList = contacts.filter(item => {
			return Object.keys(item).some(key =>
				item[key].toLowerCase().indexOf(filter) >= 0 
			);
		});
		
		this.setState({
			contacts: newList
		});
	}
	handleCreate(){
		this.setState({newrow:true});
	}
		
	render(){
		//alert(2);
		let props =  {
			contacts :  this.state.contacts,
			record_id : this.state.record_id,
			is_edit : this.state.is_edit,
			handleEdit : this.handleEdit,
			handleCancel : this.handleCancel,
			handleSoftDelete : this.handleSoftDelete,
		}
		
		return (
			
			<div>	
				<div className="row">					
					<div className="col offset-4">							
						<input className="center" name="search_text" type="text"  placeholder="Search Here" 
						value={this.state.search_text} 
						onChange={e=>this.handleSearch(e)} />		
					</div>
					<div className="col">
					  <button onClick={e=>this.handleCreate(e)}>Add New</button>
					</div>					
				</div>
				<br/>
			
			<table border='1' width='100%' id='emp_table' >
			<tr>
				
				<th>Name</th>
				<th>Email</th>
				<th>Country</th>
				<th>City</th>
				<th>Job</th>     
				<th>Status</th>     
				<th colSpan="2">Action</th>     
			</tr>
			
			
            <EmployeeAddNewRow id="new" nrow={this.state.newrow} />
			
			 
		     <EmployeeList {...props} />		
			
			
			</table>
			</div>
		);
    }
}
export default Employee;




