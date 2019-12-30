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
        <Route exact path="/seminar/cse/rait2020/" component={Home} />
        <Route path="/seminar/cse/rait2020/#/committees" component={Committees} />
        <Route path="/seminar/cse/rait2020/#/invitedspeaker" component={InvitedSpeaker} />
        <Route path="/seminar/cse/rait2020/#/authors" component={Authors} />
        <Route path="/seminar/cse/rait2020/#/registration" component={Registration} />
        <Route path="/seminar/cse/rait2020/#/sponsorship" component={Sponsorship} />
        <Route path="/seminar/cse/rait2020/#/contactus" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root')) 