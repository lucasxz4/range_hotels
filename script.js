const btn = document.querySelector('.bx');
const menu = document.querySelector('.Menu');
const nav = document.querySelector('.nav');

btn.addEventListener('click', function() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        // nav.style.background = '#fff';
    } else { 
        menu.style.display = 'block';
        // nav.style.background = '#704380';
    }
})