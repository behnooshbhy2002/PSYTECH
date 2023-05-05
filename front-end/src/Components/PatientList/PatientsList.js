import React, { Component } from 'react';
import PatientCard from './PatientCard';
import { useState, useEffect } from "react";
class PatientsList extends Component {

  render() {
    return (
      <div className="container patient-list">
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
      </div>
    );
  }
}

export default PatientsList;