import './styles.css';
import Icon from './images/beef-kabob.jpg';
import makeHomePage from './home';
import makeMenuPage from './menu';
import makeAboutPage from './about';


function component() {
    const container = document.querySelector('#content');
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    const homePage = makeHomePage();
    const menuPage = makeMenuPage(); 
    const aboutPage = makeAboutPage(); 
    console.log(menuPage)
    container.appendChild(homePage);
    container.appendChild(menuPage);
    container.appendChild(aboutPage);
}

document.body.appendChild(component());