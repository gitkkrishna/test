import React from 'react';
import './App.css';
import axios from 'axios';

 class Contact extends React.Component {
     constructor(props){
         super(props);
         this.initialState={
              fname: '',
              lname: '',
              mobile: '',            
              msg: '',    
			  error : '',
            };
         this.state = this.initialState;
     }   

     handleFormSubmit(e){		 
		 this.setState({action : 'create'});
         const API_PATH = 'http://localhost/react_php/';         
         e.preventDefault();         

        axios({
          method: 'POST',
          url: `${API_PATH}`,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json' },
          data: this.state
        }).then(
             result => { 
			console.log(result);
			if( result.data.msg === "success" ) {
				alert("Thank you for contact us.")	;
				this.props.history.push('/');
			}else if( result.data.msg === "error" ) {
				this.setState({error : result.data.error})	;
			}
        });
		
    };     
    
    handleFormReset(e){
        alert("resetting form data");
        e.preventDefault();
        window.location.reload();
    }

     render(){     
		 const style = {width : "1000px"};
      return (  
		 
        <div className="card card-primary mx-auto" style={style}>   
		  <div>
            { this.state.msg === "success" ? (<div className="alert alert-success alert-dismissible fade show">
		  <button type="button" className="close" data-dismiss="alert">&times;</button>
    	   Thank you for contact us...!</div> ): ( this.state.error && <div className="alert alert-danger alert-dismissible fade show">
		  <button type="button" className="close" data-dismiss="alert">&times;</button>
		  {this.state.error}</div> ) }
		 
            </div>
			<div className="card-header">Contact Form           			  
			</div>

			<div className="card-body">  
				<form action="#"> 		  
					<div className="form-group row"> 					
		  				<label className="col-sm-4 col-form-label" for="ct_zone">First Name </label>					
						<div className="col">
							<input type="text" id="fname" name="fname" placeholder="Your First name.."
							value={this.state.fname}
							onChange={e=>this.setState({ fname:e.target.value})} required="required"/>
						</div>
	  				</div>
	  
	  				<div className="form-group row"> 					
						<label className="col-sm-4 col-form-label" for="ct_zone">Last Name </label>
						<div className="col">
							<input type="text" id="lname" name="lname" placeholder="Your Last name.."
							value={this.state.lname}
							onChange={e=>this.setState({ lname:e.target.value})} required="required"/>
						</div>
					</div>
							
					<div className="form-group row"> 					
						<label className="col-sm-4 col-form-label" for="ct_zone">Mobile </label>
						<div className="col">
							<input type="text" id="mobile" name="mobile" placeholder="Your Mobile No.."
							value={this.state.mobile}
							onChange={e=>this.setState({ mobile:e.target.value})} required="required"/>
						</div>
					</div>
	  					               
					<div className="text-center">
						<input type="submit" onClick={e=>this.handleFormSubmit(e)} value="Submit"/>
            			<input type="button" onClick={e=>this.handleFormReset(e)} value="Reset"/>	
					</div>
				</form>
			</div>
						
		</div>    
      )
            }
}
 export default Contact;
