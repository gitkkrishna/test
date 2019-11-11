import React from 'react';

function nav(){	
	return(
		<nav className="navbar navbar-expand-sm bg-light">	  
		  <ul className="navbar-nav">
			<li className="nav-item">
			  <a className="nav-link" href="/home">Home</a>
			</li>
			<li className="nav-item">
			  <a className="nav-link" href="/contact">Contact Us</a>
			</li>	
			<li className="nav-item">
			  <a className="nav-link" href="/employee">CRUD Example</a>
			</li>
		  </ul>
		</nav>
	);
}
export default nav;