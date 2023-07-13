export default async function getdata(url) {
  const response = await fetch(url);
  const data = await response.json();

  const typeofmeal = url.substr(url.lastIndexOf('=') + 1, url.length);

  const arrayOut = data.meals;

  arrayOut.unshift(typeofmeal);

  return arrayOut;
}