import React from 'react';

import classes from './Break.module.css';
import CodeTag from './CodeTag';
import codeTagOpen from '../assets/code-tag-open.svg';
import codeTagClose from '../assets/code-tag-close.svg';

const Break = () => {
  return (
    <div className={classes.container}>
      <CodeTag
        id={classes.codeTagIconOpen}
        icon={codeTagOpen}
        altText="opening code tag"
      />
      <hr className={classes.break} />
      <CodeTag
        id={classes.codeTagIconClose}
        icon={codeTagClose}
        altText="closing code tag"
      />
    </div>
  );
};

export default Break;
