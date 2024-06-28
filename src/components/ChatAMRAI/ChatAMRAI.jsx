import React, { useState } from 'react';
import './ChatAMRAI.css';

const ChatAMRAI = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [recentPrompts] = useState([
    'Analyze the genomic data for Alzheimer’s disease markers.',
    'Identify gene expression levels in breast cancer samples.',
    'Compare genomic data across different populations for diabetes research.',
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would add the code to process the prompt and get a response.
    setResponse(`Your genomic data has been analyzed. Below are the results:\nGene A: High expression\nGene B: Low expression\nGene C: Normal expression`);
  };

  return (
    <div className="chat-amrai-container">
      <header className="header">
        <nav className="navbar">
          <div className="logo">CHATAMRAI</div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/inputdata">Input Data</a>
            <a href="/landingpage">Sign Out</a>
          </div>
        </nav>
      </header>
      <main className="main-content">
        <div className="form-and-response">
          <form className="prompt-form" onSubmit={handleSubmit}>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
            />
            <button type="submit" className="submit-btn">Submit</button>
          </form>
          <div className="response">
            <h2>Response</h2>
            <p>{response}</p>
          </div>
        </div>
        <aside className="recent-prompts">
          <h2>Recent Prompts</h2>
          <ul>
            {recentPrompts.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </aside>
      </main>
      <footer className="footer">
        <p>&copy; 2023 AMRAI. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default ChatAMRAI;
