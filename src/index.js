import imgOfMe from './assets/me.jpg';
import GitHubSVG from './assets/github-original.svg';
import LinkedInSVG from './assets/linkedin-plain.svg';
import './style.css';

const imgOfMeElement = document.createElement('img');
imgOfMeElement.src = imgOfMe;
imgOfMeElement.alt = 'Robert DeLucia';
imgOfMeElement.id = 'header-pic';
document.querySelector('.header-container').prepend(imgOfMeElement);
