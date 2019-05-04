import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

const NotFound = ( )=>{
    return(
        <div>
            <Header/>
            <Navbar/>
            <h1>ERROR: 404 Page Not Found!</h1>
            <Link to="/">GO Back to The Home Page</Link>
            <Footer />
        </div>
    )
}

export default NotFound;