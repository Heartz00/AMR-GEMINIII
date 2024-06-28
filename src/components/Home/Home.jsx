import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

// Import images
import image1 from '../assets/Image (3).png';
import image2 from '../assets/Image (4).png';
import image3 from '../assets/image1.jpg';

const Home = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">AMRAI</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/inputdata">Input Data</a>
          <a href="/visuals">Visualization</a>
        </nav>
      </header>
      <main className="main">
        <h1>Welcome to AMRAI</h1>
        <p>AMRAI is a powerful tool that allows you to input, analyze, and visualize genomic data. Our platform is designed to be user-friendly and highly efficient, helping you to gain insights from your genomic data effortlessly.</p>
        <div className="features">
          <div className="feature">
          <a href="/inputdata">
            <img src={image1} alt="Data Input"/>
            <h2>Data Input</h2>
            <p>Easily input your genomic data through our intuitive interface. The process is simple and quick, ensuring that you can start analyzing right away.</p>
            </a>
          </div>
          <div className="feature">
          <a href="/visuals">
            <img src={image2} alt="Data Analysis"/>
            <h2>Data Analysis</h2>
            <p>Analyze your data with our advanced tools. Get comprehensive insights and detailed reports that help you understand the intricacies of your genomic information.</p>
            </a>
          </div>
          <div className="feature">
          <a href="/inputdata">
            <img src={image3} alt="Visualization"/>
            <h2>Chat for more</h2>
            <p>Chat with the Gemini AI to gain more insight into genomic data and related features around you and far beyond</p>
            </a>
          </div>
        </div>
        <Link to='/inputdata'><button className="cta-button">Input Genomic Data</button></Link>
      </main>
      <footer className="footer">
        <p>&copy; 2023 AMRAI. All rights reserved.</p>
        <nav>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
