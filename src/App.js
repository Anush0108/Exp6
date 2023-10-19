import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Profile from './Profile';
import Contact from './Contact';
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
            </Routes>
       
          
        </div>
      </Router>
    );
  }
}

export default App;
