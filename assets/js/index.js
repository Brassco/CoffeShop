let navbar = document.querySelector('.navbar');
let cartItems = document.querySelector('.cart-items-container ');
let searchForm = document.querySelector('.search-form');

document.getElementById('menu-btn').addEventListener('click', () => {
    searchForm.classList.remove('active-form')
    cartItems.classList.remove('active')
    navbar.classList.toggle('active')
})

document.getElementById('cart-btn').addEventListener('click', () => {
    navbar.classList.remove('active')
    searchForm.classList.remove('active-form')
    cartItems.classList.toggle('active')
})

document.getElementById('search-btn').addEventListener('click', () => {
    navbar.classList.remove('active')
    cartItems.classList.remove('active')
    searchForm.classList.toggle('active-form')
})