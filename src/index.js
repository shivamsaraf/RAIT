import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Header from './Header';
import Committees from './Committee';
import InvitedSpeaker from './invitedSpeaker';
import Footer from './Footer';

class App extends React.Component {
     render() {
         return (
             <div>
                 <Header />
                 <Navbar />
                 <Committees />
                 <InvitedSpeaker />
                 <Footer />
             </div>
         )
     }
 }
ReactDOM.render(<App/>,document.querySelector('#root'));