export default function createProject(config) {
  // Updated config object structure:
  // {
  //   name: 'battleship',
  //   title: 'Bobbleship',
  //   imageSrc: battleshipPNG,
  //   imageAlt: 'Battleship website preview',
  //   description: 'A browser-based Battleship game with AI opponent',
  //   liveLink: 'https://bdelucia.github.io/odin-battleship/',
  //   githubLink: 'https://github.com/bdelucia/odin-battleship',
  //   githubIcon: GitHubSVG
  // }

  // Get main project container
  const projectElement = document.getElementById(`${config.name}-project`);

  // Create description overlay
  const descriptionOverlay = document.createElement('div');
  descriptionOverlay.classList.add('project-description-overlay');
  descriptionOverlay.textContent = config.description;
  projectElement.appendChild(descriptionOverlay);

  // Create and append image
  const imgElement = document.createElement('img');
  imgElement.src = config.imageSrc;
  imgElement.classList = 'project-image';
  imgElement.id = `${config.name}-image`;
  imgElement.alt = config.imageAlt;
  projectElement.prepend(imgElement);

  // Get label element
  const labelElement = document.getElementById(`${config.name}-label`);

  // Create and append GitHub icon
  const githubLink = document.createElement('img');
  githubLink.src = config.githubIcon;
  githubLink.alt = `Link to ${config.title} GitHub repo`;
  githubLink.id = `${config.name}-gh-icon`;
  githubLink.classList = 'icon';
  labelElement.append(githubLink);

  // Get text element
  const textElement = document.getElementById(`${config.name}-text`);

  // Add hover events for description
  projectElement.addEventListener('mouseenter', () => {
    descriptionOverlay.classList.add('visible');
  });

  projectElement.addEventListener('mouseleave', () => {
    descriptionOverlay.classList.remove('visible');
  });

  // Add click event listeners
  textElement.addEventListener('click', () => {
    window.location.href = config.liveLink;
  });

  githubLink.addEventListener('click', () => {
    window.location.href = config.githubLink;
  });
}
