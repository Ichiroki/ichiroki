const hamburger = document.getElementById('hamburger')
const hamburgerList = document.getElementById('hamburger-list')

hamburger.addEventListener('click', function() {
    hamburgerList.classList.toggle('show')
})