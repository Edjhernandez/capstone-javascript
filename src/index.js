import './style.css';
import getdata from './modules/getdata';
import printgrid from './modules/printGrid';

const allBeefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
const allPastaURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta';
const allSeafoodURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

const btb = document.querySelector('button.burger');
const showMenu = document.querySelector('.navbar');
const l1 = document.querySelector('.line1');
const l2 = document.querySelector('.line2');
const l3 = document.querySelector('.line3');
const close = document.querySelector('main');
const close2 = document.querySelector('footer');

btb.addEventListener('click', () => {
  l1.classList.toggle('activeline1');
  l2.classList.toggle('activeline2');
  l3.classList.toggle('activeline3');

  if (showMenu.style.display === 'block') {
    showMenu.style.display = 'none';
  } else {
    showMenu.style.display = 'block';
  }
});

close.addEventListener('click', () => {
  if (showMenu.style.display === 'block') {
    showMenu.style.display = 'none';
    l1.classList.toggle('activeline1');
    l2.classList.toggle('activeline2');
    l3.classList.toggle('activeline3');
  }
});

close2.addEventListener('click', () => {
  if (showMenu.style.display === 'block') {
    showMenu.style.display = 'none';
    l1.classList.toggle('activeline1');
    l2.classList.toggle('activeline2');
    l3.classList.toggle('activeline3');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  getdata(allBeefURL)
    .then((response) => {
      printgrid(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

document.addEventListener('click', (e) => {
  if (e.target.matches('#beefmeals')) {
    if (showMenu.style.display === 'block') {
      showMenu.style.display = 'none';
      l1.classList.toggle('activeline1');
      l2.classList.toggle('activeline2');
      l3.classList.toggle('activeline3');
    }
    getdata(allBeefURL)
      .then((response) => {
        printgrid(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (e.target.matches('#pastameals')) {
    if (showMenu.style.display === 'block') {
      showMenu.style.display = 'none';
      l1.classList.toggle('activeline1');
      l2.classList.toggle('activeline2');
      l3.classList.toggle('activeline3');
    }
    getdata(allPastaURL)
      .then((response) => {
        printgrid(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (e.target.matches('#seafoodmeals')) {
    if (showMenu.style.display === 'block') {
      showMenu.style.display = 'none';
      l1.classList.toggle('activeline1');
      l2.classList.toggle('activeline2');
      l3.classList.toggle('activeline3');
    }
    // console.log(allSeafoodURL);
    getdata(allSeafoodURL)
      .then((response) => {
        printgrid(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});