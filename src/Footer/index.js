import React from 'react';
import './index.css';

export default class Footer extends React.Component{
    render(){
        return(
            <div class="bodyFooter">
            <i className="material-icons">copyright</i>
                Copyright 2020 RAIT - All rights reserved. Use of this website signifies your agreement to the <a href="#">RAIT Terms and Conditions</a>.
            </div>
        )
    }
}