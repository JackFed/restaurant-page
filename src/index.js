import './styles.css';
import Icon from './images/beef-kabob.jpg';
import makeHomePage from './home';


function component() {
    const container = document.querySelector('#content');
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    const homePage = makeHomePage();
    container.appendChild(homePage);

}

document.body.appendChild(component());