
import React from 'react';
import { Route, Link, BrowserRouter as Router,Switch  } from 'react-router-dom';

function routing(){
	
	const routing = (
	  <Router>
		<div>      
		 <Switch>
		  <Route exact path="/" component={App} />
		  <Route exact path="/users" component={Users} />
		  <Route path="/contact" component={Contact} />
		 <Route path="/footer" component={Footer} />
		  <Route component={Notfound} />
		 </Switch>
		</div>
	  </Router>
	);
	return routing;
}
export default routing;








