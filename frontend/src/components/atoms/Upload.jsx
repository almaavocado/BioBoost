import React, { useState } from 'react';
import "./upload.css"

const AboutMeForm = () => {
  const [aboutMeText, setAboutMeText] = useState('');

  const handleInputChange = (event) => {
    setAboutMeText(event.target.value);
  };

  const handlePdfUpload = () => {
    //  PDF upload logic 
  };

  const handleDocxUpload = () => {
    //  DOCX upload logic 
  };

  return (
    <div>
      <h2>Optimize Your About Me Summary</h2>
      <textarea
        className="text-input"
        value={aboutMeText}
        onChange={handleInputChange}
        placeholder="Paste your resume"
      />
      <div className="button-container">
        <button onClick={handlePdfUpload}>Upload PDF</button>
        <button onClick={handleDocxUpload}>Upload DOCX</button>
      </div>
    </div>
  );
};

export default AboutMeForm;
