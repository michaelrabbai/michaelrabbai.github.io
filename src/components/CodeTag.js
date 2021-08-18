import React from 'react';

const CodeTag = ({ id, icon, altText }) => {
  return <img id={id} src={icon} alt={altText} />;
};

export default CodeTag;
