// Signup.jsx
import React from 'react';
import './signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="form-wrapper">
        <div className="form-header">
          <div className="progress-bar">
            <div className="step completed"></div>
            <div className="step completed"></div>
            <div className="step current"></div>
            <div className="step"></div>
          </div>
          <a href="#" className="skip-link">Skip for now</a>
        </div>
        <div className="form-content">
          <h2>Connect your</h2>
          <div className="icon-wrapper">
            <img src="assets/icon dna.png" alt="DNA Icon" />
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Enter full name</label>
              <input type="text" id="fullName" placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Create a username</label>
              <input type="text" id="username" placeholder="Choose a username" />
            </div>
            <div className="form-group">
              <label htmlFor="location">Select your location</label>
              <input type="text" id="location" placeholder="Choose your location" />
            </div>
            <div className="form-buttons">
              <button type="button" className="btn-back">Back</button>
              <button type="submit" className="btn-continue">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
