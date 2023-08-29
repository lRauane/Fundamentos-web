// DOM
const btnmobile = document.getElementById('btn-mobile');
const repos = document.getElementById('repo-container');

// API github
const apiURL = 'https://api.github.com/users/lrauane/repos?per_page=10';

// Solicitação api
fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data)) {
      data.forEach(repo => {
        const card = createRepoCard(repo);
        repos.appendChild(card);
      });
    } else {
      console.log("erro ao obter os repositórios")
    }
  })
  .catch(erro => {
    console.error("Ocorreu um erro: ", erro)
  })

function createRepoCard(repo) {
  const card = document.createElement("div");
  card.classList.add("repo-card");

  const nameElement = document.createElement("div");
  nameElement.classList.add("repo-name");
  nameElement.textContent = repo.name;

  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("repo-description");
  descriptionElement.textContent = repo.description || "Sem descrição.";

  const githubLinkElement = document.createElement("a");
  githubLinkElement.classList.add("repo-link");
  githubLinkElement.textContent = "GitHub";
  githubLinkElement.href = repo.html_url;
  githubLinkElement.target = "_blank"; // Abre o link em uma nova aba

  const deployLinkElement = document.createElement("a");
  
  
  // Verifica se o repositório tem uma URL de deploy
  if (repo.homepage) {
    deployLinkElement.textContent = "Visitar site";
    deployLinkElement.href = repo.homepage;
    deployLinkElement.classList.add("repo-link");
    deployLinkElement.target = "_blank"; // Abre o link em uma nova aba
  } else {
    deployLinkElement.textContent = "Sem Deploy";
    deployLinkElement.style.color = "#999"; // Altera a cor para indicar inatividade
  }



  card.appendChild(nameElement);
  card.appendChild(descriptionElement);
  card.appendChild(githubLinkElement);
  card.appendChild(deployLinkElement);



  return card;
}


function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const navbar = document.getElementById('nav-bar');
  navbar.classList.toggle('active')
  const active = navbar.classList.contains('active');
  event.currentTarget.setAttribute('aria-expaned', active);

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnmobile.addEventListener('click', toggleMenu);
btnmobile.addEventListener('touchstart', toggleMenu);
/*menu */

const btnEl = document.querySelector('.btn');

const toggleOptions = () => {
  const wrapperEl = document.querySelector('.wrapper');
  const iconEl = btnEl.querySelector('i');

  wrapperEl.classList.toggle('active');

  if (iconEl.classList.contains('ri-share-line')) {
    iconEl.classList.replace('ri-share-line', 'ri-close-line');
  } else {
    iconEl.classList.replace('ri-close-line', 'ri-share-line');
  }
};

btnEl.addEventListener('click', toggleOptions);