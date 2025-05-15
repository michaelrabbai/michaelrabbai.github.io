import React from 'react';

import classes from './Navbar.module.css';

const Navbar = () => {
  const resumeUrl = process.env.PUBLIC_URL + '/michael-rabbai-resume.pdf';

  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <a href="#header" id={classes.logo} className="accent-blue">
          <b>Michael Rabbai</b>
        </a>
        <ul className={classes.nav}>
          <li>
            <a href="#about" className="link">
              About
            </a>
          </li>
          <li>
            <a
              href={resumeUrl}
              target="_blank"
              rel="external noopener noreferrer"
              className="link"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="mailto:michael.rabbai@gmail.com" className="link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
