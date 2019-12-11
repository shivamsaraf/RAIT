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
                 
             <Footer />
             </div>
         )
     }
 }
