import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Photos from './Photos'; // Import Photos component

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
              <Link to="/photos">
                <FontAwesomeIcon icon={faCamera} className="camera-icon" />
              </Link>
            </div>
            <p>Coffee and Chemistry Enthusiast.</p>
          </header>

          {/* Main Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  // List of updates with date information
  const updates = [
    //{ date: '23-09-2024', heading: 'Starting PhD', body: 'WIP' },
    { date: '01-09-2024', heading: 'Finish MScR', body: 'Finished a year long project in the Evans Group, at the Wolfson Atmospheric Chemistry Laboratory, resulting in the completion of my Masters by Research in Chemistry.' },
    { date: '14-09-2024', heading: 'Deployed this GH Pages', body: 'Version 1.0 of GitHub Pages for my personal updates, with initial photos from my Northumberland trip in August 2024 on the photos page and some basic updates.' },
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
        <p>
          Hi, I’m a (soon-to-be) PhD student at UCL, where I get to dive into the fascinating intersection of mathematics, algorithms, and chemistry. When I’m not coding or immersed in research, you can usually find me at a cozy café, watching a movie, or enjoying a classical music concert. I also have a growing interest in hardware and low-level programming, which I’m excited to explore further. This space is for general updates, utilising GitHub pages :) 
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
              <p className="body">{update.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}



export default App;
