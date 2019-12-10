import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';

class InvitedSpeaker extends React.Component{
	render(){
		return(
			<div>
			<Header/>
			<Navbar/>
			 
            <Footer />
			</div>


		)
	}

}


export default InvitedSpeaker