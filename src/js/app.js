// MENÚ MOBILE

const btnToggleMenu = document.querySelector('.btnToggleMenu')
const sidebar = document.getElementById('sidebar')
const imgOpenMenu = document.querySelector('.open-menu')
const imgcloseMenu = document.querySelector('.close-menu')

btnToggleMenu.addEventListener('click', () => {
    imgOpenMenu.classList.toggle('hidden')  
    imgcloseMenu.classList.toggle('hidden')
    sidebar.classList.toggle('-left-0')
})



