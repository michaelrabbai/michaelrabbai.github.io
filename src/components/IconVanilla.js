import React from 'react';

const IconVanilla = ({ className, icon, altText }) => {
  return <img className={className} src={icon} alt={altText} />;
};

export default IconVanilla;
