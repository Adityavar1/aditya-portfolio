/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#a78bfa"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#a78bfa"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#a78bfa",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#a78bfa",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

/* about section particles */
particlesJS("particles-about", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: ["#a78bfa", "#8b5cf6", "#c084fc"] }, // purple accents
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#8b5cf6",
      opacity: 0.3,
      width: 1
    },
    move: { enable: true, speed: 1, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "grab" }, resize: true },
    modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } } }
  },
  retina_detect: true
});

// Particles for Work section
(function () {
  // respect prefers-reduced-motion
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  if (typeof particlesJS !== 'function') return;

  particlesJS('particles-work', {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 900 } },
      color: { value: '#a78bfa' },                 // soft violet to match theme
      shape: { type: 'circle' },
      opacity: { value: 0.35, random: false },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 140, color: '#a78bfa', opacity: 0.35, width: 1 },
      move: { enable: true, speed: 1.1, direction: 'none', random: false, straight: false, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },   // lines strengthen near cursor
        onclick: { enable: false },
        resize: true
      },
      modes: {
        grab: { distance: 145, line_linked: { opacity: 0.6 } },
        repulse: { distance: 200, duration: 0.4 }
      }
    },
    retina_detect: true
  });
})();

// Particles for Education section
(function () {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  if (typeof particlesJS !== 'function') return;

  particlesJS('particles-education', {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: '#38bdf8' },                 // cyan/blue accent to contrast work’s violet
      shape: { type: 'circle' },
      opacity: { value: 0.3 },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 140, color: '#38bdf8', opacity: 0.3, width: 1 },
      move: { enable: true, speed: 1.0, direction: 'none', out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: false },
        resize: true
      },
      modes: {
        grab: { distance: 145, line_linked: { opacity: 0.6 } },
        repulse: { distance: 200, duration: 0.4 }
      }
    },
    retina_detect: true
  });
})();

// Experience particles (soft violet nodes + lines)
particlesJS('particles-experience', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 900 } },
    color: { value: '#a78bfa' },                    // node color (lavender)
    shape: { type: 'circle' },
    opacity: { value: 0.35, random: false },
    size: { value: 2, random: true },
    line_linked: {
      enable: true,
      distance: 140,
      color: '#a78bfa',
      opacity: 0.22,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },      // lines brighten on hover
      onclick: { enable: false },
      resize: true
    },
    modes: {
      grab: { distance: 130, line_linked: { opacity: 0.38 } },
      bubble: { distance: 200, size: 4, duration: 0.3, opacity: 0.4 },
      repulse: { distance: 120 },
    }
  },
  retina_detect: true
});

