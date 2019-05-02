import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import App from './home';
import Navbar from './Navbar';
import Header from './Header';
import Committees from './Committees';
import InvitedSpeaker from './InvitedSpeaker';
import NotFound from './404_not_found';


const routing = (
    <Router>
      <div>
          <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/committees" component={Committees} />
        <Route exact path="/invitedspeaker" component={InvitedSpeaker} />
        <Route component = {NotFound} />
        </Switch>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root')) 

/*class App extends React.Component {
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
*/