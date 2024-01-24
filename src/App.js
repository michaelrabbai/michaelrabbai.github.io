import React from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import reactIcon from '@iconify/icons-logos/react';
import angularIcon from '@iconify/icons-logos/angular-icon';
import javascriptIcon from '@iconify/icons-logos/javascript';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import html5 from '@iconify/icons-logos/html-5';
import css3 from '@iconify/icons-logos/css-3';
import handlebarsIcon from '@iconify/icons-logos/handlebars';

import './App.css';
import IconFontAwesome from './components/IconFontAwesome';
import IconIconify from './components/IconIconify';
import IconVanilla from './components/IconVanilla';
import Navbar from './components/Navbar';
import ParticleContainer from './components/containers/particle-container';
import TypedContainer from './components/containers/typed-container';
import SocialIcon from './components/SocialIcon';
import Break from './components/Break';
import profilePic from './assets/2021-pfp.jpg';
import BreakSmall from './components/BreakSmall';
import solaceIcon from './assets/solace.png';
import cienaIcon from './assets/ciena.svg';
import crcIcon from './assets/crc.png';
import cuIcon from './assets/cu-icon.svg';
import emberIcon from './assets/ember-icon.svg';

const App = () => {
  const words = {
    intro: [
      '<span class="accent-lightest-blue">front-end enthusiast</span>',
      '<span class="accent-lightest-blue">programmer</span>',
      '<span class="accent-lightest-blue">designer</span>',
      '<span class="accent-lightest-blue">leader</span>',
      '<span class="accent-lightest-blue">dark mode enjoyer</span>',
      '<span class="accent-lightest-blue">bundle of serotonin</span>',
      '<span class="accent-lightest-blue">climber and snowboarder</span>'
    ],
  };

  const Icon = ({ className, type = '', icon, altText }) => {
    if (type === 'fa') {
      return IconFontAwesome({ className, icon });
    } else if (type === 'iconify') {
      return IconIconify({ className, icon });
    } else {
      return IconVanilla({ className, icon, altText });
    }
  };

  return (
    <div id="header" className="App">
      <Navbar />
      <div className="header">
        <ParticleContainer />
        <div className="intro-text-box">
          <span className="intro-text">
            Hi, I'm <span className="accent-blue">Michael</span>
          </span>
          <span className='intro-typed-text'>
            I'm a <TypedContainer words={words.intro} />
          </span>
        </div>
        <div className="social-icons">
          <SocialIcon
            icon={faLinkedin}
            link="https://www.linkedin.com/in/michael-rabbai/"
          />
          <SocialIcon
            icon={faGithub}
            link="https://github.com/michaelrabbai/"
          />
          <SocialIcon
            icon={faEnvelope}
            link="mailto:michael.rabbai@gmail.com"
          />
        </div>
      </div>
      <div id="about" className="about">
        <div id="about-container" className="container column">
          <h1>About</h1>
          <Break />
          <div className="about-me-info">
            <div className="profile-pic-container">
              <img
                className="profile-pic"
                src={profilePic}
                alt="Portrait of me."
              ></img>
            </div>
            <div className="info">
              <div>
                <p>
                  I'm Michael - a software developer and active sports
                  enthusiast! I'm currently seeking{' '}
                  <b>
                    front-end development
                    <br />
                    full-time employment
                  </b>
                  . I've previously worked for Solace, Ciena, and Communications
                  Research Centre Canada;
                  <br />I also have an{' '}
                  <b>Honours Bachelor of Computer Science</b> degree from{' '}
                  <b>Carleton University</b>;
                </p>
              </div>
              <div className="pro-icons">
                <Icon className="icon" icon={solaceIcon} />
                <Icon className="icon" icon={cienaIcon} />
                <Icon className="icon" icon={crcIcon} />
                <Icon className="icon" icon={cuIcon} />
              </div>
              <BreakSmall />
              <div>
                <p>
                  My main interests are <b>front-end and mobile development</b>{' '}
                  with tools such as <b>React</b>, <b>React Native</b>,{' '}
                  <b>Angular</b>, <b>JavaScript (ES6)</b>, and <b>TypeScript</b>
                  . Additionally, I've worked with the <b>Ember</b> and{' '}
                  <b>Aurelia</b> JavaScript frameworks and <b>Handlebars</b> for
                  templating.
                </p>
              </div>
              <div className="tech-icons">
                <Icon className="icon" type="iconify" icon={reactIcon} />
                <Icon className="icon" type="iconify" icon={angularIcon} />
                <Icon className="icon" type="iconify" icon={javascriptIcon} />
                <Icon className="icon" type="iconify" icon={typescriptIcon} />
                {/* <Icon className="icon" type="iconify" icon={html5} /> */}
                {/* <Icon className="icon" type="iconify" icon={css3} /> */}
                {/* <Icon className="icon" type="iconify" icon={handlebarsIcon} /> */}
                {/* <Icon className="icon" icon={emberIcon} /> */}
              </div>
              <BreakSmall />
              <div>
                <p>
                  I’ve created projects with <b>React</b> and{' '}
                  <b>React Native</b> but continue to expand my knowledge in
                  both the <b>web development</b> and <b>mobile development</b>{' '}
                  fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <p>© 2024 Michael Rabbai</p>
        </div>
      </div>
    </div>
  );
};

export default App;
