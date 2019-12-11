import React from 'react';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends React.Component{
	render(){
		return(
			<div className="topnav">
          <Link to="/">Home</Link>
          <Link to="/committees">Committees</Link>
  		  <Link to="/invitedspeaker">Invited Speaker</Link>
          <Link to="/authors">Authors</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/sponsorship">Sponsorship</Link>
          <Link to="/contactus">Contact us</Link>
			</div>
		)
	}
}
