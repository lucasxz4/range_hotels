const btn = document.querySelector('.bx');
const menu = document.querySelector('.Menu');
const nav = document.querySelector('.nav');

btn.addEventListener('click', function() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else { 
        menu.style.display = 'block';
    }
})