import './style.css'
import { loadHome } from './home.js'
import { loadMenu } from './menu.js'
import { loadContact } from './contact.js'

const content = document.querySelector('#content')

const clearContainer = () => {
    content.innerHTML = ""
}
document.querySelector('.home').addEventListener('click', () => {
    clearContainer()
    loadHome()
})
document.querySelector('.menu').addEventListener('click', () => {
    clearContainer()
    loadMenu()
})
document.querySelector('.contact').addEventListener('click', () => {
    clearContainer()
    loadContact()
})

loadHome()