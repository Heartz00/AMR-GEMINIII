import React from 'react';
import './landingpage.css';

const Landingpage = () => {
  return (
    <div className="landingpage">
      <div className="header">
        <img src="Icon leaf.png" alt="AMRX Logo" />
        <h1>AMRAI</h1>
        <h2>Improving on Africa Research</h2>
      </div>
      <div className="features">
        <h2>Features</h2>
        <div className="feature-card">
          <h3>Recycling Programs</h3>
          <p>We offer a variety of recycling programs to help you reduce your environmental impact.</p>
        </div>
        <div className="feature-card">
          <h3>Solar Energy</h3>
          <p>We offer solar energy solutions to help you save money and reduce your reliance on fossil fuels.</p>
        </div>
        <div className="feature-card">
          <h3>Water Conservation</h3>
          <p>We offer water conservation solutions to help you save water and protect our precious resources.</p>
        </div>
      </div>
      <div className="about">
        <h2>About Us</h2>
        <p>EcoBrand is a company that is committed to providing sustainable solutions for a better tomorrow.</p>
        <p>We believe that everyone can make a difference, and we are here to help you make your home more sustainable.</p>
      </div>
      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>"EcoBrand has helped me reduce my environmental impact and save money on my energy bills."</p>
          <p>- John Smith</p>
        </div>
        <div className="testimonial">
          <p>"EcoBrand is a great company that is committed to making a difference."</p>
          <p>- Jane Doe</p>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2023 EcoBrand</p>
      </div>
    </div>
  );
};

export default Landingpage;
