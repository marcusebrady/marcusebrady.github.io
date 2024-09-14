import React, { useState } from 'react';
import './photos.css';

function Photos() {
  // Array of photo data with dates
  const photos = [
    { src: '/photos/000023140025.jpg', date: '14-08-2024', location: 'Holy Island, UK | Canon AE-1 B&W Ilford', description: 'Bird on a stone pavement at Pilgrims Coffee House' },
    { src: '/photos/000023140031.jpg', date: '14-08-2024', location: 'Pilgrim\'s Way, UK | Canon AE-1 B&W Ilford', description: 'Rescue shelter on Pilgrim\'s Way' },
    // Add more photos here
  ];

  // Function to convert DD-MM-YYYY string to a Date object for sorting
  const convertDateStringToDate = (dateString) => {
    const [day, month, year] = dateString.split('-');
    return new Date(`${year}-${month}-${day}`);
  };

  // Sort photos by date (newest first)
  const sortedPhotos = photos.sort((a, b) => {
    return convertDateStringToDate(b.date) - convertDateStringToDate(a.date);
  });

  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (src) => {
    setEnlargedImage(src); // Set the clicked image as the enlarged image
  };

  const handleClose = () => {
    setEnlargedImage(null); // Close the enlarged image
  };

  return (
    <div className="photos-page">
      <h2>My Photo Collection</h2>
      <div className="photo-grid">
        {sortedPhotos.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo.src} alt={photo.description} onClick={() => handleImageClick(photo.src)} />
            <p className="photo-info">{photo.date} | {photo.location}</p>
          </div>
        ))}
      </div>

      {enlargedImage && (
        <div className="lightbox" onClick={handleClose}>
          <img src={enlargedImage} alt="Enlarged view" className="enlarged-photo" />
        </div>
      )}
    </div>
  );
}

export default Photos;
