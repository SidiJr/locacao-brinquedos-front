import React from 'react';

const UserIcon = ({ className = '', ...props }) => {
  // Combine base FA class with any additional classes (like Tailwind utilities)
  const combinedClassName = `fa-regular fa-circle-user ${className}`.trim();
  return <i className={combinedClassName} {...props} aria-hidden="true"></i>; // Added aria-hidden for accessibility
};

export default UserIcon;