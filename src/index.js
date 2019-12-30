import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, HashRouter as Router,Switch } from 'react-router-dom';
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
        <Route path="/committees" component={Committees} />
        <Route path="/invitedspeaker" component={InvitedSpeaker} />
        <Route path="/authors" component={Authors} />
        <Route path="/registration" component={Registration} />
        <Route path="/sponsorship" component={Sponsorship} />
        <Route path="/contactus" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))