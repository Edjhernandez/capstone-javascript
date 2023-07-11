export default function printgrid(arr) {
  const typeofmeal = arr.shift();
  const $container = document.getElementById('cardscontainer');

  arr.forEach((element, index) => {
    const $cardcontainer = document.createElement('div');
    const $cardimg = document.createElement('img');
    const $cardtitle = document.createElement('h3');
    const $btbcomment = document.createElement('button');
    const $btblike = document.createElement('button');

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
    $cardcontainer.appendChild($btbcomment);
    $cardcontainer.appendChild($btblike);
    $cardcontainer.classList.add('cardcontainer');

    if (typeofmeal === 'Beef') {
      $cardcontainer.classList.add('beef-color');
    } else if (typeofmeal === 'pasta') {
      $cardcontainer.classList.add('pasta-color');
    } else {
      $cardcontainer.classList.add('Seafood-color');
    }

    $container.appendChild($cardcontainer);
  });
}