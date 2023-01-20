const container = document.querySelector('#container');
const pages = {
  homePage : document.querySelector('#home-page'),
  historyPage : document.querySelector('#history-page'),
  componentsPage : document.querySelector('#components-page'),
  futurePage : document.querySelector('#future-page')
};


let currPage = 'homePage';
container.innerHTML = '';
container.appendChild(pages[currPage]);


const useButtons = () => {
  const buttons = document.querySelectorAll('button , img');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        container.innerHTML = '';
        currPage = btn.id + 'Page'; 
        console.log(currPage);
        container.appendChild(pages[currPage]);
        useButtons();
      });
  });
}

useButtons();
