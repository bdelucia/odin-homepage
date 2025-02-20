import imgOfMe from './assets/me.jpg';
import GitHubSVG from './assets/github-original.svg';
import LinkedInSVG from './assets/linkedin-plain.svg';
import battleshipPNG from './assets/battleship.PNG';
import todoPNG from './assets/todo.PNG';
import weatherPNG from './assets/weather.PNG';
import restaurantPNG from './assets/restaurant.PNG';
import { createProject } from './scripts/projects';
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
  liveLink: 'https://bdelucia.github.io/odin-battleship/',
  githubLink: 'https://github.com/bdelucia/odin-battleship',
  githubIcon: GitHubSVG,
});

createProject({
  name: 'todo',
  title: 'To-do List App',
  imageSrc: todoPNG,
  imageAlt: 'To-do list website preview',
  liveLink: 'https://bdelucia.github.io/odin-todo/',
  githubLink: 'https://github.com/bdelucia/odin-todo',
  githubIcon: GitHubSVG,
});

createProject({
  name: 'weather',
  title: 'Weather Forecast',
  imageSrc: weatherPNG,
  imageAlt: 'Weather forecast website preview',
  liveLink: 'https://bdelucia.github.io/odin-weather/',
  githubLink: 'https://github.com/bdelucia/odin-weather',
  githubIcon: GitHubSVG,
});

createProject({
  name: 'restaurant',
  title: 'Restaurant',
  imageSrc: restaurantPNG,
  imageAlt: 'Weather forecast website preview',
  liveLink: 'https://bdelucia.github.io/odin-restaurant/',
  githubLink: 'https://github.com/bdelucia/odin-restaurant',
  githubIcon: GitHubSVG,
});
