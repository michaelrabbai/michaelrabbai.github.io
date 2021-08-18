import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ({ icon, link }) => {
  return (
    <a
      className="link"
      href={link}
      target="_blank"
      rel="external noopener noreferrer"
    >
      <FontAwesomeIcon className="social-icon" icon={icon} />
    </a>
  );
};

export default SocialIcon;
