import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router,Switch  } from 'react-router-dom';
import App from './App';
import Users from './users';
import Contact from './contact';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Employee from './employee/employee';

import Nav from './nav';
import Notfound from './notfound'

import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
	 <Switch>
      <Route exact path="/" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
	  <Route path="/home" component={Home} />
	   <Route path="/employee" component={Employee} />
	
	  <Route component={Notfound} />
	 </Switch>
    </div>
  </Router>
);

const common_code = (<div>
						 <Header />					 
						 <div className="container">
						 <Nav />
						 <section>						 
							 {routing}
						 </section>
						 <Footer />
					 	 </div>
					 </div>
					);

ReactDOM.render(common_code, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
