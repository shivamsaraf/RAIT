import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import Committees from './Committee';
import InvitedSpeaker from './invitedSpeaker';
import NotFound from './404_not_found';


class App extends React.Component {
     render() {
         return (
             <div>
                 
                 <NotFound />
             </div>
         )
     }
 }

 export default App;