import imgOfMe from './assets/me.jpg';
import GitHubSVG from './assets/github-original.svg';
import LinkedInSVG from './assets/linkedin-plain.svg';
import battleshipPNG from './assets/battleship.PNG';
import todoPNG from './assets/todo.PNG';
import weatherPNG from './assets/weather.PNG';
import restaurantPNG from './assets/restaurant.PNG';
import admindashboardPNG from './assets/admindashboard.PNG';
import calculatorPNG from './assets/calculator.PNG';
import landingpagePNG from './assets/landing-page.PNG';
import petsJPG from './assets/pets.jpg';
import phoneSVG from './assets/phone.svg';
import emailSVG from './assets/email.svg';
import createProject from './scripts/projects.js'
import './style.css';

const imgOfMeElement = document.createElement('img');
imgOfMeElement.src = imgOfMe;
imgOfMeElement.alt = 'Robert DeLucia';
imgOfMeElement.id = 'header-pic';
document.querySelector('.header-container').prepend(imgOfMeElement);

createProject({
  name: 'battleship',
  title: 'Bobbleship',
  imageSrc: battleshipPNG,
  imageAlt: 'Battleship website preview',
  description:
    'A browser-based Battleship game featuring strategic gameplay with computer AI. Built using JavaScript, showcasing object-oriented programming and game logic implementation.',
  liveLink: 'https://bdelucia.github.io/odin-battleship/',
  githubLink: 'https://github.com/bdelucia/odin-battleship',
  githubIcon: GitHubSVG,
});

createProject({
  name: 'todo',
  title: 'To-do List App',
  imageSrc: todoPNG,
  imageAlt: 'To-do list website preview',
  description:
    'A dynamic task management application with project organization, task prioritization, and local storage. Demonstrates JavaScript DOM manipulation and data persistence.',
  liveLink: 'https://bdelucia.github.io/odin-todo/',
  githubLink: 'https://github.com/bdelucia/odin-todo',
  githubIcon: GitHubSVG,
});

createProject({
  name: 'weather',
  title: 'Weather Forecast',
  imageSrc: weatherPNG,
  imageAlt: 'Weather forecast website preview',
  description:
    'Real-time weather application using OpenWeatherMap API. Features dynamic location-based forecasts, responsive design, and asynchronous JavaScript for seamless data fetching.',
  liveLink: 'https://bdelucia.github.io/odin-weather/',
  githubLink: 'https://github.com/bdelucia/odin-weather',
  githubIcon: GitHubSVG,
});

createProject({
  name: 'restaurant',
  title: 'Restaurant',
  imageSrc: restaurantPNG,
  imageAlt: 'Restaurant website preview',
  description:
    'Single-page restaurant website created using JavaScript DOM manipulation. Demonstrates dynamic content rendering and modular page structure without traditional page reloads.',
  liveLink: 'https://bdelucia.github.io/odin-restaurant/',
  githubLink: 'https://github.com/bdelucia/odin-restaurant',
  githubIcon: GitHubSVG,
});

createProject({
  name: 'admindashboard',
  title: 'Admin dashboard',
  imageSrc: admindashboardPNG,
  imageAlt: 'Admin Dashboard website preview',
  description:
    'Responsive admin dashboard design showcasing advanced CSS Grid and Flexbox techniques. Includes modern UI components and a clean, intuitive layout.',
  liveLink: 'https://bdelucia.github.io/odin-admindashboard/',
  githubLink: 'https://github.com/bdelucia/odin-admindashboard',
  githubIcon: GitHubSVG,
});

createProject({
  name: 'calculator',
  title: 'Calculator',
  imageSrc: calculatorPNG,
  imageAlt: 'calculator website preview',
  description:
    'Fully functional web calculator with clean design and robust JavaScript logic. Supports basic arithmetic operations with responsive, user-friendly interface.',
  liveLink: 'https://bdelucia.github.io/odin-calculator/',
  githubLink: 'https://github.com/bdelucia/odin-calculator',
  githubIcon: GitHubSVG,
});

createProject({
  name: 'landingpage',
  title: 'Landing page',
  imageSrc: landingpagePNG,
  imageAlt: 'Landing page website preview',
  description:
    'Interactive landing page integrating ChatGPT API to generate fun facts. Features responsive design, dynamic content generation, and modern web development techniques.',
  liveLink: 'https://funfactusingchatgptapi.onrender.com/',
  githubLink: 'https://github.com/bdelucia/BobbehLandingPage',
  githubIcon: GitHubSVG,
});

const petsImgElement = document.createElement('img');
petsImgElement.src = petsJPG;
petsImgElement.alt = 'Image of our pets Poppy and Biscuit';
petsImgElement.id = 'footer-img';
const footerImgElement = document.getElementById('footer-img');
footerImgElement.appendChild(petsImgElement);

const phoneImgElement = document.createElement('img');
const emailImgElement = document.createElement('img');
const linkedInImgElement = document.createElement('img');
const footerGHImgElement = document.createElement('img');
const phoneContainer = document.querySelector('.phone-container');
const emailContainer = document.querySelector('.email-container');
phoneImgElement.src = phoneSVG;
emailImgElement.src = emailSVG;
linkedInImgElement.src = LinkedInSVG;
footerGHImgElement.src = GitHubSVG;
phoneImgElement.id = 'phone-icon';
emailImgElement.id = 'email-icon';
footerGHImgElement.id = 'footer-gh-icon';
  
phoneContainer.prepend(phoneImgElement);
emailContainer.prepend(emailImgElement);

document.addEventListener('DOMContentLoaded', () => {
  const headerText = document.getElementById('header-text');
  
  headerText.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], {
    duration: 1000,
    fill: 'forwards',
    delay: 0
  });
});
