import React from 'react';
import './index.css';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';

export default class InvitedSpeaker extends React.Component{
	render(){
const {children} = this.props;
        return(
			<div className="parent">
                <div>

                <Header/>
			<Navbar/> 
            </div>
<div>

			 {
                 children
             }
</div>

             <div className="grow"/>
 
             <Footer />

     
			</div>
		)
	}

}
