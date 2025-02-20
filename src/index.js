import imgOfMe from './assets/me.jpg';
import './style.css';

const imgOfMeElement = document.createElement('img');
imgOfMeElement.src = imgOfMe;
imgOfMeElement.alt = 'Robert DeLucia';
imgOfMeElement.id = 'header-pic';
document.querySelector('.header-container').prepend(imgOfMeElement);
