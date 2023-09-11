import Food from './img/seafood.jpg'

const loadMenu = () => {
    const name = document.createElement('h1')
    name.textContent = "Menu"

    const item = document.createElement('h2')
    item.textContent = "Seafood Paella"
    
    const img = document.createElement('div')
    img.classList.add('img')
    const myImage = new Image();
    myImage.src = Food;
    img.appendChild(myImage)
    

    const description = document.createElement('div')
    description.classList.add('description')
    description.textContent = "Enjoy the famous Seafood Paella. A traditional dish in the East Blue"

    content.appendChild(name)
    content.appendChild(item)
    content.appendChild(img)
    content.appendChild(description)
}

export {loadMenu}