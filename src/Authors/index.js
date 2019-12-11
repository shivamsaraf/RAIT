import React from 'react';
import './index.css';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';

export default class Authors extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Navbar />
                <div class="authors">
                    <br/>
                    <span class="headerAuthors">Important Dates: </span>
                    <div class="datesAuthors">
                    <ol>
                        <li>Full Paper Submission: April 30,2020</li><br />
                        <li>Acceptance Notification: July 31, 2020</li><br />
                        <li>Camera-ready Submission: August 31, 2020</li><br /><br /><br /><br /><br /><br />
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