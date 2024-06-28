// InputData.jsx
import React from 'react';
import './input_data.css';
import { Link } from 'react-router-dom';

const InputData = () => {
  return (
    <div className="input-data-container">
      <header className="header">
        <nav className="navbar">
          <div className="logo">GenomiX</div>
          <div className="nav-links">
            <a href="/home">Home</a>
            <a href="/chat">Chat</a>
            <a href="/visuals">Visualization</a>
          </div>
        </nav>
      </header>
      <main className="main-content">
        <h1>Input Genomic Data</h1>
        <form className="data-form">
          <div className="form-group">
            <label htmlFor="genomicId">Genomic ID</label>
            <input type="text" id="genomicId" placeholder="Genomic ID" />
          </div>
          <div className="form-group">
            <label htmlFor="geneName">Gene Name</label>
            <input type="text" id="geneName" placeholder="Gene Name" />
          </div>
          <div className="form-group">
            <label htmlFor="sequence">Sequence</label>
            <textarea id="sequence" placeholder="Sequence"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="fileUpload">Upload File</label>
            <input type="file" id="fileUpload" />
          </div>
          <button type="submit" className="submit-btn">Save/Upload</button>
          <Link to='/visuals'><button type="submit" className="submit-btn">Analyse your Data</button></Link>
        </form>
      </main>
      <footer className="footer">
        <p>&copy; 2024 AMRAI. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default InputData;
