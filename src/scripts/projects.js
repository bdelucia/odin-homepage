export function createProject(config) {
  // Expected config object structure:
  // {
  //   name: 'battleship',
  //   title: 'Bobbleship',
  //   imageSrc: battleshipPNG,
  //   imageAlt: 'Battleship website preview',
  //   liveLink: 'https://bdelucia.github.io/odin-battleship/',
  //   githubLink: 'https://github.com/bdelucia/odin-battleship',
  //   githubIcon: GitHubSVG
  // }

  // Get main project container
  const projectElement = document.getElementById(`${config.name}-project`);

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

  // Add click event listeners
  textElement.addEventListener('click', () => {
    window.location.href = config.liveLink;
  });

  githubLink.addEventListener('click', () => {
    window.location.href = config.githubLink;
  });
}

// const battleshipProjectElement = document.getElementById('battleship-project');

// const battleshipImgElement = document.createElement('img');
// battleshipImgElement.src = battleshipPNG;
// battleshipImgElement.classList = 'project-image';
// battleshipImgElement.id = 'battleship-image';
// battleshipImgElement.alt = 'Battleship website preview';
// battleshipProjectElement.prepend(battleshipImgElement);

// const battleshipLabelElement = document.getElementById('battleship-label');

// const battleshipGitHubLink = document.createElement('img');
// battleshipGitHubLink.src = GitHubSVG;
// battleshipGitHubLink.alt = 'Link to Bobbleship GitHub repo';
// battleshipGitHubLink.id = 'battleship-gh-icon';
// battleshipGitHubLink.classList = 'icon';
// battleshipLabelElement.append(battleshipGitHubLink);

// const battleshipTextElement = document.getElementById('battleship-text');

// battleshipTextElement.addEventListener('click', () => {
//   window.location.href = 'https://bdelucia.github.io/odin-battleship/';
// });

// battleshipGitHubLink.addEventListener('click', () => {
//   window.location.href = 'https://github.com/bdelucia/odin-battleship';
// });
