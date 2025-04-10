const year = document.getElementById('currentYear');
year.textContent = new Date().getFullYear();

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}


window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    
    if(window.scrollY > 50){
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

