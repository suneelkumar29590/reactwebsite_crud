import React, { useState } from 'react';


const Welcome = () => {

  const [selectedblog, setSelectedBlog] = useState({
    // Your initial selected blog data here
    iconClicked: false, // Add a property to track if the icon is clicked
  });

  const handleIconClick = () => {
    // Update the selectedblog's iconClicked property when the icon is clicked
    setSelectedBlog({ ...selectedblog, iconClicked: true });
  };

  return (
    <div className="welcome-container">
      <a href='/default' className="welcome-container1"><h1 className="welcome-header">Welcome To Pabjobs Project</h1></a>
      <div className="decoration"></div>
      <i
  className={`fa-solid fa-bookmark book ${selectedblog.iconClicked ? 'clicked-icon' : ''}`}
  id="bookItem"
  onClick={handleIconClick}
></i>


      
    </div>
  );
}

export default Welcome;



