import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './committees.css';
import Navbar from './Navbar';
import Header from './Header';

class Committees extends React.Component{
	render(){
		return(
			<div>
			<Header/>
			<Navbar/>
			<div className="HeadingCommittee">
			  <b>Committee members</b><br/>
			  <div className="ListOfCommittee">
			  <i>
			   <ul>
			    <li>Annavarapu Chandra Shekhara Rao</li>
			    <li>Ansuman Bhattacharya</li>
			    <li>Arup Kumar Pal</li>
			    <li>Chiranjeev Kumar</li>
			    <li>Dharavath Ramesh</li>
			    <li>Gosta Pada Biswas</li>
			    <li>Haider Banka</li>
			    <li>Hari Om</li>
			    <li>Prasanta K Jana</li>
			    <li>Rajendra Pamula</li>
			    <li>Sachin Tripathi</li>
			    <li>Soumen Bag</li>
			    <li>Sushanta Mukhopadhyay</li>
			    <li>Tanushree Kaibartta</li>
			    <li>Tarachand Amogh</li>
			   </ul>
			  </i>
			  </div> 
			</div>
			</div>
		)
	}
}

export default Committees