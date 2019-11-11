import React from 'react';

function footer(){
	const style = { 
		height: "60px",
		position: "fixed",
		left: "0px",
		bottom: "0px",
		width: "100%",
		backgroundColor: "#b1b1b1",
		color: "white",
		textAlign : "center",
		
	};
	return(
		<footer style={style}>        
		©2017 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a>
	  </footer>		
	);
}
export default footer;