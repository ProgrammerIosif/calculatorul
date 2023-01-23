const container = document.querySelector('#container');
const backButton = document.querySelector('#corner-back-button');
backButton.addEventListener('click', () => {
  currPage = 'homePage';
  buildNewPage();
});

const historySectionNumbers = [1642, 1822, 1888, 1940, 1946, 1951, 1976];
var historyIndex = 0;
var ele;
var historyContent;
const historySections = {
  1642 : document.querySelector('#y1642'),
  1822 : document.querySelector('#y1822'),
  1888 : document.querySelector('#y1888'),
  1940 : document.querySelector('#y1940'),
  1946 : document.querySelector('#y1946'),
  1951 : document.querySelector('#y1951'),
  1976 : document.querySelector('#y1976'),
}

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
      historyContent = document.querySelector('#history-image-container');
      historyContent.innerHTML = historySections[historySectionNumbers[0]].innerHTML; 
      ele = document.querySelector('#slider')
      ele.value = historySectionNumbers[0];
    case currPage === 'componentsPage':
      componentsContainer = document.querySelector('#components-container');
      
    case currPage === 'futuresPage':
  }
  homePagePos = 2000;
  
}

let currPage = 'componentsPage';
let homePagePos = 0;
buildNewPage();



const updateHistorySection = () => {
  const value = historySectionNumbers[historyIndex];
  ele.value = value;
  document.querySelector('#current-year').innerHTML = value;
  historyContent.innerHTML = '';
  historyContent.innerHTML = historySections[value].innerHTML;
}

function a() {
  var value = ele.value
  if(value > historySectionNumbers[historyIndex] && i < historySectionNumbers.length -1)
    i++;
  else if(value < historySectionNumbers[historyIndex] && i > 0)
    i--;
  updateHistorySection();
}

function left() {
  if(historyIndex > 0)
    historyIndex--;
  updateHistorySection();
}

function right() {
  if(historyIndex < historySectionNumbers.length - 1)
    historyIndex++;
  updateHistorySection();
}