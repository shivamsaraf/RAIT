import React from 'react';
import './index.css';

export default class Header extends React.Component{
    render(){
        return (
            <div>
                <div class="flex-container">
                <div class="image">
                <a href="https://www.iitism.ac.in/" target="_blank"><img class="img" src="https://www.iitism.ac.in/assets/img/ismlogo.png" /></a>
                </div>
                <div class="flex-container2">
                    <div class="L1">RAIT 2020</div>
                    <div class="L2">5th International Conference on Recent Advances in Information Technology</div><br />
                    <div class="L3">December 11-12, 2020 | Dhanbad, India</div>
                </div>
                <div class="flex-container3">
                    
                </div>
                </div>
            </div>
        )
    }
}