const barsIco = document.querySelector('.fa-bars');
const crossIco = document.querySelector('.fa-times');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const navItems = document.querySelector('.menu');
const formBtn = document.querySelector('.button-area');


// // Fix NavBar 
window.addEventListener("scroll", () => {
     navbar.classList.toggle("sticky", window.scrollY > 0);
})

// Smooth Scroll 
const scrollLink = document.querySelectorAll('.scroll-link');

Array.from(scrollLink).map( (link) => {
  link.addEventListener('click', (e) => {
      e.preventDefault();

      const id = e.currentTarget.getAttribute('href').slice(1);
      const element = document.getElementById(id);
      const navHeight = navbar.getBoundingClientRect().height;
      let position = element.offsetTop - navHeight;

      
      window.scrollTo({
          left: 0,
          top: position,
      });
  })
})

// Responsive Hamburguer Menu 
addEventListener('DOMContentLoaded', () => {
         barsIco.addEventListener('click', () => {
            const navItems = document.querySelector('.menu');
            body.classList.add('overflowHidden');
             navItems.classList.add('active');
             barsIco.classList.add('d-none');
             crossIco.classList.add('show'); 

             crossIco.addEventListener('click', () => {
                body.classList.remove('overflowHidden');
                 navItems.classList.remove('active');
                 crossIco.classList.remove('show');
                 barsIco.classList.remove('d-none');
             })
    })
})

// Responsive Menu items on click
navItems.addEventListener('click', () => {
    console.log('hice click en un navitem');
    navItems.classList.remove('active');
    body.classList.remove('overflowHidden');
    barsIco.classList.remove('d-none');
    crossIco.classList.remove('show');
});


