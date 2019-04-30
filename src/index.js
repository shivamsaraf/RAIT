import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Header from './Header';
import Committees from './Committees';
import InvitedSpeaker from './InvitedSpeaker';

class App extends React.Component {
     render() {
         return (
             <div>
                 <Header />
                 <Navbar />
                 <Committees />
                 <InvitedSpeaker />
             </div>
         )
     }
 }
ReactDOM.render(<App/>,document.querySelector('#root'));