
const form = document.getElementById('contact-form')
const emailValue = document.getElementById('email').value

const contactSubmit = document.getElementById('contact-submit')

function handleForm(event) {
    event.preventDefault()
    console.log(emailValue)
}

form.addEventListener('submit', handleForm)
