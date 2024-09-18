
const menu2 = document.querySelector('.sous-menu2');
const btnmenu2 = document.querySelector('.biens');


btnmenu2.addEventListener('click',function(){
    menu2.classList.toggle('active-menu')
});


const nav = document.querySelector("nav");
const icons = document.querySelector('#icons');
icons.addEventListener("click", () => {
  nav.classList.toggle("active")
});