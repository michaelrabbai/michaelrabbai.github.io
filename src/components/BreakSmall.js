import React from 'react';

import CodeTag from './CodeTag';
import codeTagOpen from '../assets/code-tag-open.svg';
import codeTagClose from '../assets/code-tag-close.svg';

const BreakSmall = () => {
  return (
    <div className="break-container">
      <CodeTag
        id="code-tag-icon-open-small"
        icon={codeTagOpen}
        altText="opening code tag"
      />
      <hr className="break-small" />
      <CodeTag
        id="code-tag-icon-close-small"
        icon={codeTagClose}
        altText="closing code tag"
      />
    </div>
  );
};

export default BreakSmall;
