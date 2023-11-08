// MENÚ MOBILE

const btnToggleMenu = document.querySelector('.btnToggleMenu')
const sidebar = document.getElementById('sidebar')
const imgOpenMenu = document.querySelector('.open-menu')
const imgcloseMenu = document.querySelector('.close-menu')


btnToggleMenu.addEventListener('click', () => {
    if (!balanceSection.classList.contains('-right-full')) {
        balanceSection.classList.add('-right-full')
        balanceSection.classList.remove('right-0')
    }

    imgOpenMenu.classList.toggle('hidden')
    imgcloseMenu.classList.toggle('hidden')
    sidebar.classList.toggle('-left-0')
    sidebar.classList.toggle('-left-full')
})

// BALANCE SECTION MOBILE 

const balanceSection = document.getElementById('balance-section')
const btnToggleBalance = document.querySelector('.btnToggleBalance')

btnToggleBalance.addEventListener('click', () => {
    if (!sidebar.classList.contains('-left-full')) {
        sidebar.classList.add('-left-full')
        sidebar.classList.remove('-left-0')
        imgOpenMenu.classList.remove('hidden')
        imgcloseMenu.classList.add('hidden')
    }

    balanceSection.classList.toggle('right-0')
    balanceSection.classList.toggle('-right-full')
})

