import React from 'react';
import axios from 'axios';

class EmployeeList extends React.Component{
    constructor(props){
        super(props);
        this.state = {						
			is_edit   : false,		
			record_id : 0,
			editable_cols : [ "name","email","country","city","job" ],			
		};
    }
    handleEdit(e,id,action){
		
		this.setState({		
			is_edit : true,	
			record_id : id,
		});
		
		var formdata = new FormData();
		this.state.editable_cols.forEach(colname => {
			document.getElementById("col_"+colname+"_"+id).contentEditable = true;
			document.getElementById("col_"+colname+"_"+id).style.border = "5px solid gray";
			formdata.append(colname,document.getElementById('col_'+colname+'_'+id).innerText);
		});

		formdata.append("action" , "update");
		formdata.append("id" , id);
		if(action === "Update"){
			const url = 'https://mywebadda.000webhostapp.com/api/employee';
			axios({
				method: 'POST',
				url: `${url}`,
				headers: { 'Content-Type': 'application/x-www-form-urlencoded','Accept': 'application/json' },
				data: formdata
			}).then(
				result => {
				if( result ) {
					alert("Record updated.");
				}else {
					alert("Failed to update record.");
				}
				this.handleCancel(e,id);
			});
			
		}
	}
	handleCancel(e,id){	//alert(id);	
		this.setState({is_edit:false});
		this.state.editable_cols.forEach(colname => {
			document.getElementById("col_"+colname+"_"+id).contentEditable = false;
			document.getElementById("col_"+colname+"_"+id).style.border = "";
		});
		
	}  
	handleSoftDelete(e,id,rec_status){
		if(window.confirm('Do you wanna '+(rec_status === 1 ? "Deactive" : "Activate")+' record '+id+'?')){
			var formdata = new FormData();
			formdata.append('id',id);
			formdata.append('action','delete');
			formdata.append('active',rec_status === 1 ? 0 : 1);
			const url = 'https://mywebadda.000webhostapp.com/api/employee';
			axios({
				method: 'POST',
				url: `${url}`,
				headers: { 'Content-Type': 'application/x-www-form-urlencoded','Accept': 'application/json' },
				data: formdata
			}).then(
				result => {
				if( result ) {
					alert("Record " + (rec_status === 1 ? "Deactivated" : "Activated"));
				}else {
					alert("Failed to delete record.");
				}
				//this.this.props.history.push('/employee');
				window.location.reload();
			});
		}
	}
    render(){
        return (
            this.props.contacts.map((contact) => (
            <tr id={"row_"+contact.id}>
                
                <td id={"col_name_"+contact.id}>{ contact.name }</td>
                <td id={"col_email_"+contact.id}>{ contact.email }</td>
                <td id={"col_country_"+contact.id}>{ contact.country }</td>
                <td id={"col_city_"+contact.id}>{ contact.city }</td>
                <td id={"col_job_"+contact.id}>{ contact.job }</td>
                <td id={"col_active_"+contact.id}>{ contact.active === 1 ? "Active" : "InActive" }</td>
                <td>
                    <button onClick={e=>this.handleEdit(e,contact.id,this.state.record_id === contact.id && this.state.is_edit ? "Update" : "Edit")}>
                    {this.state.record_id === contact.id && this.state.is_edit ? "Update" : "Edit"}
                    </button>
                    {
                        this.state.record_id === contact.id && this.state.is_edit ? 
                        (<button onClick={e=>this.handleCancel(e,contact.id)}>Cancel</button>):''
                    }
                    <button onClick={e=>this.handleSoftDelete(e,contact.id,contact.active)}>{contact.active === 1 ? "InActive" : "Active"}</button>				
                    
                
                </td>				
            </tr>
         ))
           );

    }
}
export default EmployeeList;
	
	
