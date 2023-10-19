import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import IMG20220815112254 from "./IMG20220815112254.jpg"

class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <strong><h2>{this.props.name}</h2></strong>
        
        <div className='row'>
          <div className='col-md-4'>
            <img src={IMG20220815112254} alt="Anushka"/>
          </div>
        </div>
        <p>
           
        </p>
        <p>
         {this.props.bio}
        </p>
        <p>
          
         
        <hr/>
        <h2><i>Certifications :</i></h2>
        <p>
            <h4>AIML Microsoft course</h4>
            <h4>SQL (Basic) Hackerank</h4>
        </p>
        <br/>
<hr/>
        <strong><h3><i>Personal Details :</i></h3></strong>
        <p>Phone no: 9930645138</p>
        <p>Email Id: karhadkar.anushka@gmail.com</p>
        <p>LinkedIn: <a href="www.linkedin.com/in/anushka-karhadkar-88bb17260" target="_blank"><b>www.linkedin.com/in/anushka-karhadkar-88bb17260</b></a></p>
        </p>
        <p>
          <Link to={'/contact'}>Contact Me</Link>
        </p>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    const d = { name: "Anushka Karhadkar", bio: "A coding enthusiast who enjoys coding and tries to find out different solutions to a coding problem.Proficient in Python, SQL, HTML, CSS, and JavaScript." };
    return (
      <div>
       
        <Profile name={d.name} bio={d.bio} />
      </div>
    );
  }
}

export default Home;
