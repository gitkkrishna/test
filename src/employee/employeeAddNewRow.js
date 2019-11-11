import React from 'react';
import axios from 'axios';
class EmployeeAddNewRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editable_cols : [ "name","email","country","city","job" ],			
        }        
    }

    handleCreate(e,id){
		var formdata = new FormData();
		this.state.editable_cols.forEach(colname => {			
			formdata.append(colname,document.getElementById('col_'+colname+'_'+id).innerText);
		});

		formdata.append("action" , "create");
		
		
		const url = 'https://mywebadda.000webhostapp.com/api/employee';
		axios({
            method: 'POST',
            url: `${url}`,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded','Accept': 'application/json' },
            data: formdata
        }).then(
            result => {
            if( result ) {
                alert("Record created.");
            }else {
                alert("Failed to create record.");
            }
            window.location.reload();
        });	
	}
    render(){  
        if(this.props.nrow === undefined || !this.props.nrow){            
            return '';
        }
        let id = this.props.id;
        return (
            <tr id={"row_"+id}>
                
                <td contentEditable="true" id={"col_name_"+id}></td>
                <td contentEditable="true" id={"col_email_"+id}></td>
                <td contentEditable="true" id={"col_country_"+id}></td>
                <td contentEditable="true" id={"col_city_"+id}></td>
                <td contentEditable="true" id={"col_job_"+id}></td>
                <td id={"col_active_"+id}></td>
                <td>                    
                    <button onClick={e=>this.handleCreate(e,id)}>Create</button>                
                </td>				
            </tr>
        );
    }    
}
export default EmployeeAddNewRow;