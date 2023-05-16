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

// Project Data
const projectData = [
  {
    image: 'asset/snapshot1.svg',
    title: 'Tonic',
    client_info: ['canopy', 'Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'asset/snapshot2.svg',
    title: 'Tonic',
    client_info: ['canopy', 'Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'asset/snapshot3.svg',
    title: 'Tonic',
    client_info: ['canopy', 'Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'asset/snapshot4.svg',
    title: 'Tonic',
    client_info: ['canopy', 'Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  }
]

// Popup window
const workData = [
  {
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    source: 'https://github.com/over-geek/Portfolio-website2',
    livelink: 'https://over-geek.github.io/overgeek.github.io/',
  },
  {
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    source: 'https://github.com/over-geek/Portfolio-website2',
    livelink: 'https://over-geek.github.io/overgeek.github.io/',
  },
  {
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    source: 'https://github.com/over-geek/Portfolio-website2',
    livelink: 'https://over-geek.github.io/overgeek.github.io/',
  },
  {
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    source: 'https://github.com/over-geek/Portfolio-website2',
    livelink: 'https://over-geek.github.io/overgeek.github.io/',
  },
]

// Render project cards
const projectCard = document.querySelector('.card-container');

function displayCards(id) {
  projectCard.innerHTML += `
    <div class="cards">
      <div>
        <img src="${projectData[id].image}" alt="screenshot" class="screenshot">
      </div>
      <div class="card-description">
        <div>
          <h3 class="card-title">${projectData[id].title}</h3>
          <div class="card-bg-info">
            <p>${projectData[id].client_info[0]}</p>
            <ul>
              <li>${projectData[id].client_info[1]}</li>
              <li>${projectData[id].client_info[2]}</li>
            </ul>
          </div>
          <div class="card-text">
            <p>${projectData[id].text}</p>
          </div>
          <div class="card-skills">
            <ul>
              <li>${projectData[id].skills[0]}</li>
              <li>${projectData[id].skills[1]}</li>
              <li>${projectData[id].skills[2]}</li>
            </ul>
          </div>
          <div>
            <button class="btn project-btn">See project</button>
          </div>
        </div>
      </div>
    </div>
  `
}

for(let i=0; i < projectData.length; i++) {
  displayCards(i)
}

const btnProjectDetails = document.querySelectorAll('.project-btn');
btnProjectDetails.forEach((btnElement, index) => {
  btnElement.addEventListener('click', function(event) {
    const modalWindow = document.querySelector("#modal");
    modalWindow.innerHTML = `
    <div id="overlay-modal-bg"></div>
    <div class="main-modal">
    <div class="modal-header">
        <div class="modal-title">
            <h3 class="title">${projectData[index].title}</h3> 
            <button type="button" class="btn-close-modal">X</button>
        </div>
        <div class="modal-client-details">
            <ul>
                <li>${projectData[index].client_info[0]}</li>
                <li>${projectData[index].client_info[1]}</li>
                <li>${projectData[index].client_info[2]}</li>
            </ul>
        </div>
        <div class="modal-image">
            <img src="${projectData[index].image}" alt="Project screenshot" class="image screenshot">
        </div>
    </div>
    <div class="modal-details">
        <p class="modal-description">
          ${workData[index].description}
        </p>
        <div class="modal-skills-footer-btns">
            <ul>
                <li>${projectData[index].skills[0]}</li>
                <li>${projectData[index].skills[1]}</li>
                <li>${projectData[index].skills[2]}</li>
            </ul>
            <div class="modal-btns-lives">
                <a href="${workData[index].livelink}" class="">See live</a>
                <a href="${workData[index].source}" class="">See source</a>
            </div>
        </div>
    </div>
</div>
`;
  });
});