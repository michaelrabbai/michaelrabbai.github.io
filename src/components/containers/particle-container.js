import React from 'react';
import Particles from 'react-particles-js';

const ParticleContainer = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }}
    >
      <Particles
        height="100vh"
        params={{
          particles: {
            number: {
              value: 35,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#2F80ED',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
            },
            opacity: {
              value: 0.2,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: false,
                speed: 19.179592913140414,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 0.25,
              direction: 'top',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 150,
                size: 4,
                duration: 0,
                opacity: 1,
                speed: 3,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default ParticleContainer;
