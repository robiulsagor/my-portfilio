const menu_btn =  document.querySelector('.menu_icon');
const menu_close =  document.querySelector('.close-menu');
const nav = document.querySelector('.mobile');
const nav_desktop = document.querySelector('.nav-container-desktop');

menu_btn.addEventListener('click', ()=>{
    nav.style.top = '0';
    menu_btn.style.display = 'none';
})

menu_close.addEventListener('click', ()=>{
    nav.style.top = '-100%'; 
    menu_btn.style.display = 'block';
})


let menu = document.querySelectorAll('.nav-container-mobile ul li a');

document.querySelector('.nav-container-mobile ul').addEventListener('click', ()=>{
    menu.forEach((menus)=>{
    nav.style.top = '-100%';
    menu_btn.style.display = 'block';
})
})

window.addEventListener('scroll', ()=>{
    if(scrollY > 120){
        nav_desktop.classList.add('scroll');
    }
    else{
        nav_desktop.classList.remove('scroll');
    }
})

// complete page
