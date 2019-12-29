import React from 'react';
import './index.css';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';

export default class InvitedSpeaker extends React.Component{
	render(){
		return(
			<div>
			<Header/>
			<Navbar/>
			 <div class="welcomeHome">
                 <b>Coming Soon</b>
             </div>
            <Footer />
			</div>


		)
	}

}
