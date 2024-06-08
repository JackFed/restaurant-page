import './styles.css';
import Icon from './images/beef-kabob.jpg';

function component() {
  const element = document.createElement('div');
  const images = document.querySelector('img');
  images.classList.add("food-image");
  console.log(images);

 // Add the image to our existing div.
 const myIcon = new Image();
 myIcon.src = Icon;

 element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());