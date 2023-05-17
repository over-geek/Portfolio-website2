const menuBtn = document.getElementById('menu-btn-open');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

function navToggle() {
  menuBtn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

menuBtn.addEventListener('click', navToggle);

document.documentElement.addEventListener('click', (e) => {
  if (e.target.matches('.menu-item')) {
    menu.classList.remove('show-menu');
    menuBtn.classList.remove('open');
    overlay.classList.remove('overlay-show');
    document.body.classList.remove('stop-scrolling');
  }
});

// Project Cards Info
const projectData = [
  {
    image: 'asset/snapshot1.svg',
    title: 'Tonic',
    technologies: ['Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    source: 'https://github.com/over-geek/Portfolio-website2',
    livelink: 'https://over-geek.github.io/overgeek.github.io/',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    image: 'asset/snapshot2.svg',
    title: 'Multi-Post Stories',
    technologies: ['Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    source: 'https://github.com/over-geek/Portfolio-website2',
    livelink: 'https://over-geek.github.io/overgeek.github.io/',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    image: 'asset/snapshot3.svg',
    title: 'Tonic',
    technologies: ['Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    source: 'https://github.com/over-geek/Portfolio-website2',
    livelink: 'https://over-geek.github.io/overgeek.github.io/',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
  {
    image: 'asset/snapshot4.svg',
    title: 'Multi-Post Stories',
    technologies: ['Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    source: 'https://github.com/over-geek/Portfolio-website2',
    livelink: 'https://over-geek.github.io/overgeek.github.io/',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  },
];

// Render project cards
const projectCard = document.querySelector('.card-container');

function displayCard(id) {
  projectCard.innerHTML += `
    <div class="cards card-1">
      <div>
        <img src="${projectData[id].image}" alt="screenshot" class="screenshot">
      </div>
      <div class="card-description">
        <div>
          <h3 class="card-title">${projectData[id].title}</h3>
          <div class="card-bg-info">
            <p>Canopy</p>
            <ul>
                <li>${projectData[id].technologies[0]}</li>
                <li>${projectData[id].technologies[1]}</li>
            </ul>
          </div>
        </div>
        <div class="card-text">
          <p>
          ${projectData[id].text}
          </p>
        </div>
        <div class="card-skills">
          <ul>
            <li>${projectData[id].skills[0]}</li>
            <li>${projectData[id].skills[1]}</li>
            <li>${projectData[id].skills[2]}</li>
          </ul>
        </div>
        <div>
          <button class="btn project-btn">See Project</button>
        </div>
      </div>
    </div>
  `;
}

for (let i = 0; i < projectData.length; i += 1) {
  displayCard(i);
}

// popup window
const projectBtn = document.querySelectorAll('.project-btn');
const popUp = document.getElementById('modal');

function showPopUp(id) {
  popUp.style.display = 'block';
  overlay.classList.toggle('overlay-show');
  popUp.innerHTML = `
    <div id="myModal">
      <div class="card-description">
        <div class="popup-header">
          <h1 class="card-title">${projectData[id].title}</h1>
          <button><img id="popup-close" src="asset/close-icon.svg" alt="close-icon"/></button>
        </div>
        <div class="card-bg-info">
          <p>Canopy</p>
          <ul>
            <li>${projectData[id].technologies[0]}</li>
            <li>${projectData[id].technologies[1]}</li>
          </ul>
        </div>
        <div>
          <img id="popup-img" src="${projectData[id].image}" alt='screenshot'/>
        </div>
      </div>
      <div class="popup-description">
        <div class="card-text">
          <p>${projectData[id].description}</p>
        </div>
        <div>
          <div class="card-skills">
            <ul>
              <li>${projectData[id].skills[0]}</li>
              <li>${projectData[id].skills[1]}</li>
              <li>${projectData[id].skills[2]}</li>
            </ul>
          </div>
          <div class="popup-btn">
            <a href="${projectData[id].livelink}">
              See Live
              <img src="asset/live-icon.svg" alt="live-icon"/>
            </a>
            <a href="${projectData[id].source}">
              See Source
              <img src="asset/github-blue.png" alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}
for (let i = 0; i < projectBtn.length; i += 1) {
  projectBtn[i].addEventListener('click', () => showPopUp(i));
}

// closing popup window
document.documentElement.addEventListener('click', (e) => {
  if (e.target.matches('#popup-close')) {
    popUp.style.display = 'none';
    overlay.classList.toggle('overlay-show');
  }
});

// Form Validation
const contactForm = document.querySelector('#form');
contactForm.addEventListener('submit', (e) => {
  const emailValue = document.querySelector('#mail').value;
  const emailValueLowerCase = emailValue.toLowerCase();
  if (emailValue !== emailValueLowerCase) {
    e.preventDefault();
    const errorMessage = document.querySelector('#error-message');
    errorMessage.style.display = 'block';
  }
});