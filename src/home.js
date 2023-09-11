import Sanji from './img/sanji.jpg'

const loadHome = () => {
    
    const name = document.createElement('h1')
    name.textContent = "Sanji's Cafe"
    
    const img = document.createElement('div')
    img.classList.add('img')
    const myImage = new Image();
    myImage.src = Sanji;
    img.appendChild(myImage)
    

    const welcome = document.createElement('div')
    welcome.classList.add('welcome')
    welcome.textContent = "Welcome to Sanji's Cafe! Come explore the cuisine of the East Blue as we embark on a journey to find Gol D. Roger's Treasure!"

    content.appendChild(name)
    content.appendChild(img)
    content.appendChild(welcome)
}

export {loadHome}