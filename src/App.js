import React, { Component } from 'react';
import './App.css';
import Candidate from './Candidate';
import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {activeOverlayId: null}
  }

  handleCandidateClick = (evtKey, evt) => {
    let id = `overlay-${evtKey}`
    let previousOverlayId = this.state.activeOverlayId;

    // TODO case 1 and 3 below are similar, could this be simplified?

    // If the overlay is already open, close it and remove activeOverlayId
    if (id === previousOverlayId) {
      let overlay = document.getElementById(id)
      overlay.classList.toggle('show');
      this.setState({activeOverlayId: null});
      return;
    }

    // If there was a previous overlay open, close it
    if (previousOverlayId != null) {
      let previousOverlay = document.getElementById(previousOverlayId);
      previousOverlay.classList.remove('show');
    }
    // Open the new overlay
    let overlay = document.getElementById(id)
    overlay.classList.toggle('show');
    this.setState({activeOverlayId: id});
  }

  render() {
    let candidateList = data.map((c, ind) => {
      return (
        <Candidate key={`candidate${ind}`}
                   candidateInfo={JSON.stringify(c)}
                   id={ind}
                   onCandidateClick={this.handleCandidateClick}
                   />
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
