// App.js
import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPen } from '@fortawesome/free-solid-svg-icons';
import Photos from './Photos';
import Writing from './Writing';
import React from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          {/* Header Section */}
          <header>
            <div className="header-content">
              <Link to="/" className="home-link">
                <h1>Marcus Brady</h1>
              </Link>
              <div className="icon-group">
                <Link to="/writing">
                  <FontAwesomeIcon icon={faPen} className="pen-icon" />
                </Link>
                <Link to="/photos">
                  <FontAwesomeIcon icon={faCamera} className="camera-icon" />
                </Link>
              </div>
            </div>
            <p>Coffee and Chemistry Enthusiast.</p>
          </header>
          {/* Main Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/writing/*" element={<Writing />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  // List of updates with date information in Markdown format
  const updates = [
    // Uncomment and modify if needed
    // { date: '23-09-2024', heading: 'Starting PhD', body: 'WIP' },
    {
      date: '09-11-2024',
      heading: 'A month in on PhD',
      body: 'Finally got confirmation of my [submitted thesis](https://etheses.whiterose.ac.uk/35738/)',
    },
    {
      date: '01-10-2024',
      heading: 'Starting PhD',
      body: 'Started PhD in Chemistry.',
    },
    {
      date: '01-09-2024',
      heading: 'Finish MScR',
      body: 'Finished MScR in Chemistry.',
    },
    {
      date: '14-09-2024',
      heading: 'Deployed this GH Pages',
      body: 'Note: [photos](/#/photos) and [writings](/#/writing).',
    },
  ];
  // Function to convert DD-MM-YYYY string to a Date object for sorting
  const convertDateStringToDate = (dateString) => {
    const [day, month, year] = dateString.split('-');
    return new Date(`${year}-${month}-${day}`);
  };
  // Sort updates by date (newest first)
  const sortedUpdates = updates.sort((a, b) => {
    return convertDateStringToDate(b.date) - convertDateStringToDate(a.date);
  });
  return (
    <div>
      {/* Introduction Section */}
      <section>
        <h2>Introduction</h2>
        <p className="intro">
          Hi, I'm a PhD student at UCL. This space is for general updates, utilising GitHub pages.
        </p>
      </section>
      {/* Updates Section */}
      <section>
        <h2>Updates</h2>
        <ul className="update-list">
          {sortedUpdates.map((update, index) => (
            <li key={index}>
              <span className="date">{update.date}</span>
              <span className="heading">{update.heading}</span>
              <ReactMarkdown className="body">{update.body}</ReactMarkdown>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
