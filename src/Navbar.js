import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import './navbar.css';

class Navbar extends React.Component{
	render(){
		return(
			<div className="topnav">
          <Link to="/">Home</Link>
          <Link to="/committees">Committees</Link>
  				<Link to="/authors">Authors</Link>
  				<Link to="/invitedspeaker">Invited Speaker</Link>
          <Link to="/program">Authors</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/sponsorship">Sponsorship</Link>
          <Link to="/contactus">Contact us</Link>
			</div>





		)
	}
}
export default Navbar