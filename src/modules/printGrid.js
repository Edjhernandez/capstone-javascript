export default function printgrid(arr) {
  const typeofmeal = arr.shift();
  const $container = document.getElementById('cardscontainer');

  $container.innerHTML = '';

  arr.forEach((element, index) => {
    const $cardcontainer = document.createElement('div');
    const $cardimg = document.createElement('img');
    const $cardtitle = document.createElement('h3');
    const $btbcomment = document.createElement('button');
    const $btblike = document.createElement('button');
    const $containerbtn = document.createElement('div');

    $cardcontainer.innerHTML = '';

    $cardimg.setAttribute('src', element.strMealThumb);
    $cardimg.setAttribute('alt', `Meal Image #${index}`);
    $cardimg.setAttribute('width', '48px');
    $cardimg.setAttribute('heigth', '48px');

    $cardtitle.textContent = element.strMeal;

    $btbcomment.setAttribute('type', 'button');
    $btbcomment.textContent = 'Recipe';

    $btblike.setAttribute('type', 'button');
    $btblike.textContent = 'Likes';

    $cardcontainer.appendChild($cardimg);
    $cardcontainer.appendChild($cardtitle);
    $containerbtn.appendChild($btbcomment);
    $containerbtn.appendChild($btblike);
    $cardcontainer.appendChild($containerbtn);

    $cardcontainer.classList.add('cardcontainer');
    $containerbtn.classList.add('containerbtn');

    if (typeofmeal === 'Beef') {
      $cardcontainer.classList.add('beef-color');
      $btbcomment.classList.add('letter-beef-color');
      $btblike.classList.add('letter-beef-color');
    } else if (typeofmeal === 'pasta') {
      $cardcontainer.classList.add('pasta-color');
      $btbcomment.classList.add('letter-pasta-color');
      $btblike.classList.add('letter-pasta-color');
    } else {
      $cardcontainer.classList.add('Seafood-color');
      $btbcomment.classList.add('letter-seafood-color');
      $btblike.classList.add('letter-seafood-color');
    }

    $container.appendChild($cardcontainer);
  });
}