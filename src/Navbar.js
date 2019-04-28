import React from 'react';
import ReactDOM from 'react-dom';
import './navbar.css';

class Navbar extends React.Component{
	render(){
		return(
			<div className="topnav">
  				<a href="#">Home</a>
  				<a href="#">Committees</a>
  				<a href="#">Authors</a>
  				<a href="#">Invited Speaker</a>
  				<a href="#">Program</a>
  				<a href="#">Registration</a>
  				<a href="#">Sponsorship</a>
  				<a href="#">Contact us</a>
			</div>





		)
	}
}
export default Navbar