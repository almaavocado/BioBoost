import React from 'react';
import { Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { uploadResume } from '../../redux/resumeSlice';
import axios from 'axios';

const UploadResumeButton = () => {

  const dispatch = useDispatch();

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append('resume', file);

        // Make API call to upload the file
        const response = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Dispatch the action to update the resume state in Redux
        dispatch(uploadResume(response.data.url));

        message.success('Resume uploaded successfully!');
      } catch (error) {
        message.error('Failed to upload resume.');
      }
    }
  };

  return (
    <div>
      <label htmlFor="resume-upload">
        <Button type="primary" size="large">
          Upload Resume
        </Button>
      </label>
      <input
        id="resume-upload"
        type="file"
        accept=".pdf,.doc,.docx"
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
    </div>
  );
};

export default UploadResumeButton;
