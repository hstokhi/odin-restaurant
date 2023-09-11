const loadContact = () => {
    const contact = document.createElement('h1')
    contact.textContent = 'Contact'

    const email = document.createElement('h2')
    email.textContent = 'strawhatpirates@sanjiscafe.com'

    const phone = document.createElement('h2')
    phone.textContent = '800-GOT-GOLD'

    content.appendChild(contact)
    content.appendChild(email)
    content.appendChild(phone)
}

export {loadContact}