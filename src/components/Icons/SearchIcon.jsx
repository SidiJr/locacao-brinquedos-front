import React from 'react';

const SearchIcon = ({ className = '', ...props }) => {
  // Combine base FA class with any additional classes (like Tailwind utilities)
  const combinedClassName = `fa-solid fa-magnifying-glass ${className}`.trim();
  return <i className={combinedClassName} {...props} aria-hidden="true"></i>; // Added aria-hidden for accessibility
};

export default SearchIcon;