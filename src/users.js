import React from 'react'
class Users extends React.Component {
	    
 onSubmit = () => {
	 this.props.history.push('/contacts');
 }
  render() {
	  const { params } = this.props.match;
    return (<div>
				<h1>
					Users
				</h1>
				<h5>
					{params.id}
				</h5> 
			<button onClick={this.onSubmit}>Submit</button>
			</div>);
  }
}
export default Users;