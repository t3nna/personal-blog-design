const mobileMenu = document.querySelector('.menu')
const burgerBtn = document.querySelector('.header-menu-btn')
const closeBtn = document.querySelector('.menu-close-icon')

burgerBtn.addEventListener('click', ()=>{
    mobileMenu.classList.add('menu-shown')
})

closeBtn.addEventListener('click', () =>{
    mobileMenu.classList.remove('menu-shown')
})
og(arr)