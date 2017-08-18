import React, { Component } from 'react';
import './App.css';
import Candidate from './Candidate';
import data from './data.json';

class App extends Component {
  render() {
    console.log(data);
    let candidateList = data.map((c, ind) => {
      return (
        <Candidate key={`candidate${ind}`} candidateInfo={JSON.stringify(c)} />
      )
    })
    return (
      <div className="App">
        <div className="labels">
          <div className="l_name">APPLICANT</div>
          <div className="l_status">STATUS</div>
          <div className="l_applicationDate">APPLICATION DATE</div>
          <div className="l_action">LAST ACTION</div>
          <div className="l_location">LOCATION</div>
          <div className="l_need">HIGH NEEDS</div>
          <div className="l_placeholder"></div>
        </div>
        {candidateList}
      </div>
    );
  }
}

export default App;
