const container = document.querySelector('#container');
const backButton = document.querySelector('#corner-back-button');
backButton.addEventListener('click', () => {
  currPage = 'homePage';
  buildNewPage();
});

const components = document.querySelectorAll('.component');
componentsList = document.querySelector('#components-list');
for(comp of components){
  const icon = comp.children[0];
  componentsList.appendChild(icon);
  const parent = comp
  icon.addEventListener('click', () => {
      for(compIcon of componentsList.children)
        compIcon.classList.remove('shown');
      icon.classList.add('shown');
      showComponent(parent); 
    });
}
var componentsContainer;
var componentsList;
var shownComponent;


const pages = {
  homePage : document.querySelector('#home-page'),
  historyPage : document.querySelector('#history-page'),
  componentsPage : document.querySelector('#components-page'),
  futurePage : document.querySelector('#future-page')
};

const useButtons = () => {
  const buttons = document.querySelectorAll('button , img');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        currPage = btn.id + 'Page'; 
        buildNewPage();
      });
  });
}

const showComponent = (comp) => {
  shownComponent = document.querySelector('#shown-component');
  shownComponent.innerHTML = '';
  shownComponent.appendChild(comp);
}


const buildNewPage = () => {
  container.innerHTML = '';
  container.appendChild(pages[currPage]);
  if(currPage !== 'homePage'){
    container.appendChild(backButton);
    window.scrollTo(0, 0);
  }
  else
    window.scrollTo(0, homePagePos);
  
  switch (true) {
    case currPage === 'homePage':
      useButtons();
      return;
    case currPage === 'historyPage':
      timeline();
    case currPage === 'componentsPage':
      componentsContainer = document.querySelector('#components-container');
    case currPage === 'futurePage':
      timeline();
  }
  homePagePos = 2000;
}

const timeline = () => {
  $(document).ready(function () {
    var mySwiper = new Swiper(".swiper", {
      autoHeight: true,
      speed: 500,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      },
      loop: false,
      effect: "slide",
      spaceBetween: 30,
      on: {
        init: function () {
          $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
          $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
        },
        slideChangeTransitionStart: function () {
          $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
          $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
        }
      }
    });
    $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
      mySwiper.slideTo($(this).index());
      $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
      $(this).addClass("active");
    });
  });
}

let currPage = 'homePage';
let homePagePos = 0;
buildNewPage();