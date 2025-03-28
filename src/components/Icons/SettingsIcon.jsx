import React from 'react';

const SettingsIcon = ({ className = '', ...props }) => {
  // Combine base FA class with any additional classes (like Tailwind utilities)
  const combinedClassName = ` fa-solid fa-gear ${className} `.trim();
  return <i className={combinedClassName} {...props} aria-hidden="true"></i>; // Added aria-hidden for accessibility
};

export default SettingsIcon;