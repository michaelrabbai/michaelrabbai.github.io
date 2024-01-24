import React from 'react';

import classes from './BreakSmall.module.css';
import CodeTag from './CodeTag';
import codeTagOpen from '../assets/code-tag-open.svg';
import codeTagClose from '../assets/code-tag-close.svg';

const BreakSmall = () => {
  return (
    <div className={classes.container}>
      <CodeTag
        id={classes.codeTagIconOpenSmall}
        icon={codeTagOpen}
        altText="opening code tag"
      />
      <hr className={classes.breakSmall} />
      <CodeTag
        id={classes.codeTagIconCloseSmall}
        icon={codeTagClose}
        altText="closing code tag"
      />
    </div>
  );
};

export default BreakSmall;
