import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Header from './Header';

class App extends React.Component {
     render() {
         return (
             <div>
                 <Header />
                 <Navbar />
             </div>
         )
     }
 }
ReactDOM.render(<App/>,document.querySelector('#root'));