import React from 'react';
import { Route, Link, HashRouter as Router,Switch } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends React.Component{
	render(){
		return(
			<div className="topnav">
          <Link to="/seminar/cse/rait2020/">Home</Link>
          <Link to="/seminar/cse/rait2020/#/committees">Committees</Link>
  		  <Link to="/seminar/cse/rait2020/#/invitedspeaker">Invited Speaker</Link>
          <Link to="/seminar/cse/rait2020/#/authors">Authors</Link>
          <Link to="/seminar/cse/rait2020/#/registration">Registration</Link>
          <Link to="/seminar/cse/rait2020/#/sponsorship">Sponsorship</Link>
          <Link to="/seminar/cse/rait2020/#/contactus">Contact us</Link>
			</div>
		)
	}
}
