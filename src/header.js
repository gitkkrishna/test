import React from 'react';

function header(){
	const header = {
		height:"50px",
		width:"100%",
		border:"0px solid",
		left : "0px",
		top :  "0px",
		backgroundColor: "rgb(247, 247, 247)",
	};
	return(	
		<div className="row">
		<header style={header}>
			<h1 className="text-center"> Simple React Application   </h1>			
		</header>
		
		</div>
	);
}
export default header;