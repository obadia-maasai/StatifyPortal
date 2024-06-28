// src/pages/HomePage.js
import React from 'react';

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
     
      <header className="header">
        <h1>Welcome to Statify</h1>
      </header>
      <main>
        <section>
          <h2>About Statify</h2>
          <p>Statify is your one-stop solution for data analysis and visualization.</p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Data Import</li>
            <li>Real-time Analytics</li>
            <li>Customizable Dashboards</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
