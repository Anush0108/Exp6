// ProfilePage.js
import React from 'react';
import './Home.css';




class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <div>
          <img
            src="./IMG20220815112254.jpg" 
            alt="User Profile"
          />
          <h2>Anushka Karhadkar</h2> 
          <p>Email: karhadkar.anushka@gmail.com</p> 
          <p>Location: Mumbai, India</p> 
          <p>About Me: A coding enthusiast who enjoys coding and tries to find out different solutions to a coding problem.</p>
        </div>
      </div>
    );
  }
}

export default Home;
