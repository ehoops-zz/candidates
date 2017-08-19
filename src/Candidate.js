import React, { Component } from 'react';
import './Candidate.css'

export default class Candidate extends Component {

  render() {
    let info = JSON.parse(this.props.candidateInfo);
    return(
      <div>
        <div className="candidateRow" onClick={() => {
          this.props.onCandidateClick(this.props.id)}}>
          <div className="name">{info.name}</div>
          <div className="status">{info.status}</div>
          <div className="applicationDate">{info.applicationDate}</div>
          <div className="action">No Action</div>
          <div className="location">{info.location}</div>
          <div className="need">High Needs</div>
          <div className="ellipses">...</div>
        </div>
        <div id={`overlay-${this.props.id}`} className="overlay">
          
          <div>Name: {info.name}</div>
          <div>Status: {info.status}</div>
          <div>Application Date: {info.applicationDate}</div>
          <div>Location: {info.location}</div>

        </div>
      </div>
    )
  }
}
