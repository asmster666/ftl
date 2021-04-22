import './style.sass';

const btn = document.querySelector(".nav_btn");
btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.parentNode.parentNode.classList.toggle('closed_dropdown');
})

const str_danger = document.getElementById("nav_btn5");
let width = window.innerWidth;
let cut, res;
if(width <= 1200) {
    cut = 20;
    res = str_danger.textContent.slice(0, cut);
} else {
    if(width > 1200) {
        cut = 22;
        res = str_danger.textContent.slice(0, cut);
    }
}

str_danger.innerHTML = `${res}`;