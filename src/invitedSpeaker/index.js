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
			 <div className="imageSpeaker">
			 <img src="http://ants2018.ieee-comsoc-ants.org/wp-content/themes/comsoc-conf-template/dist/images/ieee-comsoc-new@2x.png" alt="Speaker"/>
			 </div>
			 <div className="contentSpeaker">
			 <p>Hi! I am Ansuman.</p>
			 <p>I have obtained my B.Tech. in Electronics and Communication from the West Bengal University of Technology, Kolkata in 2006. I have also received my M.Tech. and Ph.D.(Tech.) in Radiophysics and Electronics from the University of Calcutta, Kolkata, India in 2008 and 2016, respectively.</p>
			 <p>During 2008-2009, I worked as a Technical Associate in Tech Mahindra. In July 2009, I joined the Indian Statistical Institute, Kolkata as a Project Linked Personnel where I later worked as a Senior Research Fellow (Council of Scientific & Industrial Research) in 2011. During 2014-2017, I worked as a faculty member of National Institute of Technology, Meghalaya, India. I am currently working as an Assistant Professor of Indian Institute of Technology (Indian School of Mines), Dhanbad, India.</p>
             </div>
             <Footer />
			</div>


		)
	}

}


export default InvitedSpeaker