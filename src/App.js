import React from 'react'
import './App.css'
import resume from './resources/resume.pdf'
import ParticleContainer from './components/containers/particle-container'
import TypedContainer from './components/containers/typed-container'
import words from './assets/words'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import codeTagOpen from './assets/code-tag-open.svg'
import codeTagClose from './assets/code-tag-close.svg'
import profilePic from './assets/linkedin-profile-picture.jpg'
import cuIcon from './assets/cu-icon.svg'
import cienaIcon from './assets/ciena.svg'
import {Icon as IconifyIcon} from '@iconify/react'
import html5 from '@iconify/icons-logos/html-5'
import css3 from '@iconify/icons-logos/css-3'
import handlebarsIcon from '@iconify/icons-logos/handlebars'
import javascriptIcon from '@iconify/icons-logos/javascript'
import emberIcon from './assets/ember-icon.svg'
import reactIcon from '@iconify/icons-logos/react'

const App = () => {
  const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#header" id="logo" className="accent-blue"><b>Michael Rabbai</b></a>
          <ul className="main-nav">
            <li>
              <a href="#about" className="link">About</a>
            </li>
            <li>
              <a href={resume} target="_blank" rel="external noopener noreferrer" className="link">Resume</a>
            </li>
            <li>
              <a href="mailto:michael.rabbai@gmail.com" className="link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

  const SocialIcon = ({icon, link}) => {
    return (
      <a className="link" href={link} target="_blank" rel="external noopener noreferrer">
        <FontAwesomeIcon className="social-icon" icon={icon}/>
      </a>
    )
  }

  const IconFontAwesome = ({className, icon}) => {
    return (
      <FontAwesomeIcon className={className} icon={icon}/>
    )
  }

  const IconIconify = ({className, icon}) => {
    return (
      <IconifyIcon className={className} icon={icon}/>
    )
  }

  const IconVanilla = ({className, icon, altText}) => {
    return (
      <img className={className} src={icon} alt={altText}/>
    )
  }

  const Icon = ({className, type = '', icon, altText}) => {
    if (type === "fa") {
      return (
        IconFontAwesome({className, icon})
      )
    }

    else if (type === "iconify") {
      return (
        IconIconify({className, icon})
      )
    }

    else {
      return (
        IconVanilla({className, icon, altText})
      )
    }
  }

  const CodeTag = ({id, icon, altText}) => {
    return (
      <img id={id} src={icon} alt={altText}/>
    )
  }

  const Break = () => {
    return (
      <div className="break-container">
        <CodeTag id="code-tag-icon-open" icon={codeTagOpen} altText="opening code tag"/>
        <hr className="break"/>
        <CodeTag id="code-tag-icon-close" icon={codeTagClose} altText="closing code tag"/>
      </div>
    )
  }

  const BreakSmall = () => {
    return (
      <div className="break-container">
        <CodeTag id="code-tag-icon-open-small" icon={codeTagOpen} altText="opening code tag"/>
        <hr className="break-small"/>
        <CodeTag id="code-tag-icon-close-small" icon={codeTagClose} altText="closing code tag"/>
      </div>
    )
  }

  return (
    <div id="header" className="App">
      <Navbar/>
      <div className="header">
        <ParticleContainer/>
        <div className="intro-text-box">
          <h1 className="intro-text">Hi, I'm <span className="accent-blue">Michael</span></h1>
          <h4>I'm a <TypedContainer words={words.intro}/></h4>
        </div>
        <div className="social-icons">
          <SocialIcon icon={faLinkedin} link='https://www.linkedin.com/in/michael-rabbai/'/>
          <SocialIcon icon={faGithub} link='https://github.com/michael-rabbai9/'/>
          <SocialIcon icon={faEnvelope} link='mailto:michael.rabbai@gmail.com'/>
        </div>
      </div>
      <div id="about" className="about">
        <div id="about-container" className="container column">
          <h1>About</h1>
          <Break/>
          <div className="about-me-info">
            <div className="profile-pic-container">
              <img className="profile-pic" src={profilePic} alt="Portrait of me."></img>
            </div>
            <div className="info">
              <div>
                <p>
                  I’m Michael - an amibitious fourth year student studying in an <b>Honours Bachelor of 
                  Computer Science</b> degree at <b>Carleton University</b> in Ottawa, Canada. I’m currently on co-op
                  as a front end developer at Ciena Canada.
                </p>
              </div>
              <div className="pro-icons">
                <Icon className="icon" icon={cuIcon}/>
                <Icon className="icon" icon={cienaIcon}/>
              </div>
              <BreakSmall/>
              <div>
                <p>
                  My main interests lay in <b>front end development</b> with tools such as <b>HTML5, CSS3, 
                  JavaScript (ES6)</b>, and the <b>React</b> framework. Additionally, I'm working with <b>Handlebars</b> for
                  templating and the <b>Ember</b> JavaScript framework.
                </p>
              </div>
              <div className="tech-icons">
                <Icon className="icon" type="iconify" icon={html5}/>
                <Icon className="icon" type="iconify" icon={css3}/>
                <Icon className="icon" type="iconify" icon={handlebarsIcon}/>
                <Icon className="icon" type="iconify" icon={javascriptIcon}/>
                <Icon className="icon" icon={emberIcon}/>
                <Icon className="icon" type="iconify" icon={reactIcon}/>
              </div>
              <p>
                I’m currently learning <b>React</b> and plan on learning <b>React Native</b> to expand my knowledge and 
                enter the field of mobile development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <p>
            © 2020 Michael Rabbai
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
