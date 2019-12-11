import React from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';


export default class Home extends React.Component {
     render() {
         return (
             <div>
                 <Header />
                 <Navbar />
             <div class="welcomeHome">
                 <b>Welcome to RAIT 2020</b>
             </div>
             <Footer />
             </div>
         )
     }
 }
