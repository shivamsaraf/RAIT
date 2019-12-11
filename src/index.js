import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import Home from './Home';
import Committees from './Committee';
import InvitedSpeaker from './invitedSpeaker';
import Authors from './Authors';
import Registration from './Registration';
import Sponsorship from './Sponsorship';
import ContactUs from './ContactUs';


const routing = (
    <Router>
      <div>
          <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/committees" component={Committees} />
        <Route exact path="/invitedspeaker" component={InvitedSpeaker} />
        <Route exact path="/authors" component={Authors} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/sponsorship" component={Sponsorship} />
        <Route exact path="/contactus" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root')) 
