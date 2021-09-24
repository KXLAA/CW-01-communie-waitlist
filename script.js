const btnNavEl = document.querySelector('.nav__mobile');
const navEl = document.querySelector('.nav');
const navOpen = document.querySelector('.nav__hidden');


btnNavEl.addEventListener('click', function(){
     navEl.classList.toggle('nav-open');
});

navOpen.addEventListener('click',function(){
     navEl.classList.toggle('nav-open');
})