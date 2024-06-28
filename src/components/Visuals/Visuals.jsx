import React from 'react';
import './visuals.css';

const Visuals = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <div className="logo">Gemini</div>
        <nav className="nav">
          <a href="/home">Home</a>
          <a href="/reports">Download Reports</a>
          <a href="/chat">Chat</a>
        </nav>
      </header>
      <div className="content">
        <aside className="sidebar">
          <h3>Filters</h3>
          <div className="filter">
            <label>Region</label>
            <select>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia</option>
              <option>South America</option>
              <option>Africa</option>
              <option>Australia</option>
            </select>
          </div>
          <div className="filter">
            <label>Time Period</label>
            <input type="date" />
          </div>
          <div className="filter">
            <label>Resistance Type</label>
            <div>
              <input type="checkbox" id="antibiotic" />
              <label htmlFor="antibiotic">Antibiotic</label>
            </div>
          </div>
          
          {/* New section for insights or analysis */}
          <div className="insights">
            <h3>Insights</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sit amet justo vestibulum, quis scelerisque velit volutpat.
            </p>
            <p>
              Fusce feugiat nulla sit amet nisi varius, vel aliquet eros molestie. Vestibulum lobortis erat non justo eleifend, sit amet cursus libero vehicula.
            </p>
          </div>
          
        </aside>
        <main className="main">
          <div className="chart-container">
            <div className="chart">Heatmap of Resistance Genes</div>
            <div className="chart">Timeline of Resistance Mechanisms</div>
            <div className="chart">Bar Chart of Resistance Cases</div>
            <div className="chart">Scatter Plot of Gene Frequencies</div>
            <div className="chart">Pie Chart of Resistance Mechanisms</div>
            <div className="chart">Line Chart of Resistance Trends</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Visuals;
