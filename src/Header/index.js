import React from 'react';
import './index.css';

export default class Header extends React.Component{
    render(){
        return (
            <div>
	            <div>
	                <div className="flex-container1">
				         <div className="image">
				            
				            <a href="https://www.iitism.ac.in/" target="_blank" rel="noreferrer">
				              <img
				                className="img"
				                src="https://www.iitism.ac.in/assets/img/ismlogo.png"
				                alt=""
				              />
				            </a>
				          </div>
				          <div className="flex-container2">
				            <div className="L1">RAIT 2020</div>
				            <div className="L2">5th International Conference on Recent Advances in Information Technology</div>
				            <div className="L3">December 11-12, 2020 | Dhanbad, India</div>
				          </div>
				    </div>
	            </div>
               
            </div>
        )
    }
}