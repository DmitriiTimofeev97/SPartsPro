//Скрипт работы гамбургера

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })

    
})

//Скрипт закрытия гамбургера при нажатии на ссылку

const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");
const menuLinks = document.querySelectorAll(".nav-menu__link");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    burger.classList.remove("active");
  })
);