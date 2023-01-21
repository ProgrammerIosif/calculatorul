const container = document.querySelector('#container');

const historySectionNumbers = [1822, 1890, 1940, 1946, 1951, 1964, 1971, 1981];
var historyIndex = 0;
var ele;
var historyContent;
const historySections = {
  1822 : document.querySelector('#y1822'),
  1890 : document.querySelector('#y1890'),
  1940 : document.querySelector('#y1940'),
  1946 : document.querySelector('#y1946'),
  1951 : document.querySelector('#y1051'),
  1964 : document.querySelector('#y1064'),
  1971 : document.querySelector('#y1971'),
  1981 : document.querySelector('#y1981'),
}
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


const buildNewPage = () => {
  container.innerHTML = '';
  container.appendChild(pages[currPage]);
  window.scrollTo(0, 0);
  
  switch (true) {
    case currPage === 'homePage':
      useButtons();
      return;
    case currPage === 'historyPage':
      historyContent = document.querySelector('#history-content');
      historyContent.innerHTML = historySections[1822].innerHTML; 
      ele = document.querySelector('#slider')
      ele.value = 1822;
    case currPage === 'componentsPage':
    case currPage === 'futuresPage':
  }
  
}

let currPage = 'homePage';
buildNewPage();



const updateHistorySection = () => {
  const value = historySectionNumbers[historyIndex];
  ele.value = value;
  document.querySelector('#current-year').innerHTML = value;
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