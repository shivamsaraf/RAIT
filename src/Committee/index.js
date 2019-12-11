import React from 'react';
import './index.css';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';

export default class Committees extends React.Component{
	render(){
		return(
			<div>
			<Header />
			<Navbar/>
				<div class="committee">
					<br />
					<center><span class="headingCommittee"><b>CONFERENCE COMMITTEE</b></span></center>
					<br />
					<div class="patron">
						<b><font color="#0E157C">Chief Patron</font></b>: Prof. D. D. Misra, Chairman GC & EB, IIT (ISM), Dhanbad<br /><br />
						<b><font color="#0E157C">Patron</font></b>: Prof. Rajiv Shekhar, Director, IIT (ISM), Dhanbad
					</div>
					<br />
					<br/>
					<div class="advisory">
						<br />
						<span class="advisoryHeading"><b>Advisory Board</b></span><hr />
						<ol>
							<li>G. P. Biswas, IIT(ISM) Dhanbad, India</li><br />
							<li>P. K. Jana, IIT(ISM) Dhanbad, India</li><br />
							<li>Chiranjeev Kumar, IIT(ISM) Dhanbad, India</li>

						</ol>
					</div>
					<br />
					<br />

					<div class="conference">
						<br />
					<span class="advisoryHeading"><b>Conference Chair</b></span><hr />
						<ol>
							<li><b><font color="#504F50">General Chair & Program Chair:</font></b>Dr. Haider Banka</li><br />
							<li><b><font color="#504F50">Program Co-Chair(s):</font></b>Dr. A. C. S. Rao</li><br />
							<li><b><font color="#504F50">Organizing Chair: </font></b>Dr. Arup Kumar Pal</li><br />
							<li><b><font color="#504F50">Organizing Co-Chair: </font></b>Dr. Ansuman Bhattacharya</li><br />
							<li><b><font color="#504F50">Finance Chair: </font></b>Dr. Soumen Bag</li><br />
							<li><b><font color="#504F50">Finance Co-Chairs: </font></b>Dr. Madhulika Mohanty</li><br />
							<li><b><font color="#504F50">Publication Chair: </font></b>Dr. Rajendra Pamula</li><br />
							<li><b><font color="#504F50">Publication Co-Chair: </font></b>Dr. Ranveer Singh</li><br />
							<li><b><font color="#504F50">Sponsorship Chair: </font></b>Dr. A. Tarachand</li><br />
							<li><b><font color="#504F50">Sponsorship Co-Chair: </font></b>Dr. Dharavath Ramesh</li>
						</ol>
					</div>
					<br />
					<br />
					<div class="organizing">
						<br />
					<span class="advisoryHeading"><b>Organizing & Technical Program Committee</b></span><hr />
						<ol>
							<li>A. C. S. Rao, IIT(ISM) Dhanbad, India</li><br />
							<li>Ansuman Bhattacharya, IIT(ISM) Dhanbad, India</li><br />
							<li>Arup Kumar Pal, IIT(ISM) Dhanbad, India</li><br />
							<li>Chiranjeev Kumar, IIT(ISM) Dhanbad, India</li><br />
							<li>Dharavath Ramesh, IIT(ISM) Dhanbad, India</li><br />
							<li>G. P. Biswas, IIT(ISM) Dhanbad, India</li><br />
							<li>Haider Banka, IIT(ISM) Dhanbad, India</li><br />
							<li>Hari Om, IIT(ISM) Dhanbad, India</li><br />
							<li>Madhulika Mohanty, IIT(ISM) Dhanbad, India</li><br />
							<li>P. K. Jana, IIT(ISM) Dhanbad, India</li><br />
							<li>Rajendra Pamula, IIT(ISM) Dhanbad, India</li><br />
							<li>Ranveer Singh, IIT(ISM) Dhanbad, India</li><br />
							<li>Sachin Tripathi, IIT(ISM) Dhanbad, India</li><br />
							<li>Soumen Bag, IIT(ISM) Dhanbad, India</li><br />
							<li>Sushanta Mukhopadhyay, IIT(ISM) Dhanbad, India</li><br />
							<li>Tanusree Kaibartta, IIT(ISM) Dhanbad, India</li><br />
							<li>Tarachand Amgoth, IIT(ISM) Dhanbad, India</li>
						</ol>
					</div>
					<br />
					<br />
				</div>
			<Footer />
			</div>
		)
	}
}