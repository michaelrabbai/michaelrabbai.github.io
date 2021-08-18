import React from 'react';

import CodeTag from './CodeTag';
import codeTagOpen from '../assets/code-tag-open.svg';
import codeTagClose from '../assets/code-tag-close.svg';

const Break = () => {
  return (
    <div className="break-container">
      <CodeTag
        id="code-tag-icon-open"
        icon={codeTagOpen}
        altText="opening code tag"
      />
      <hr className="break" />
      <CodeTag
        id="code-tag-icon-close"
        icon={codeTagClose}
        altText="closing code tag"
      />
    </div>
  );
};

export default Break;
