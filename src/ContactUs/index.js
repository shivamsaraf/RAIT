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
			<div class="contact">
				<div class="contactflex">
					<div>
						Department of Computer Science and Engineering<br/><br/>
						Indian Institute of Techonology(Indian School Of Mines) Dhanbad<br/><br/>
						Telephone - (0326)2235263<br/><br/>
						Email id - hod_cse@iitism.ac.in,cse@iitism.ac.in
					</div>
					<div>
					 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.5471652594647!2d86.44021372915822!3d23.81188942597961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9f32453f13%3A0xaa5973abb60f9843!2sDepartment%20Of%20Computer%20Science%20And%20Engineering!5e0!3m2!1sen!2sin!4v1577609182242!5m2!1sen!2sin" width="600" height="400" frameborder="0" ></iframe> 
					</div>
				</div>
			</div>
            <Footer />
			</div>


		)
	}

}
