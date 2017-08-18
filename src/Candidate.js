import React, { Component } from 'react';
import './Candidate.css'

export default class Candidate extends Component {
  render() {
    let info = JSON.parse(this.props.candidateInfo);
    return(
      <div className="candidateRow">
        <div className="name">{info.name}</div>
        <div className="status">{info.status}</div>
        <div className="applicationDate">{info.applicationDate}</div>
        <div className="action">No Action</div>
        <div className="location">{info.location}</div>
        <div className="need">High Needs</div>
        <div className="ellipses">...</div>
      </div>
    )
  }
}
