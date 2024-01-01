// seleccionanado a la clase menu
const menu = document.querySelector('.nav-menu')
const menuList = document.querySelector('.nav-list')
const links = document.querySelectorAll('.nav-link')

menu.addEventListener('click', () => {
    menuList.classList.toggle('nav-list-show')
})

links.forEach((link) => {
    link.addEventListener('click', () => {
        menuList.classList.remove('nav-list-show')
    })
})