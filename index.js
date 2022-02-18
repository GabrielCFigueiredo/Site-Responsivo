
const button = document.getElementById("btn-menu");

function active(event) {

    if(event.type === 'touchstart' ) event.preventDefault()

    const displayMenu = document.getElementById('nav');
    displayMenu.classList.toggle("active");

    const display = document.getElementById('header');
    display.classList.toggle("active");
    
}

const underline = document.querySelectorAll('nav a');

underline.forEach(under => {
    under.addEventListener('click', () => {
        document.querySelector('a.active-underline').classList.remove('active-underline');
        under.classList.add('active-underline')
    })
})

button.addEventListener('click', active )
button.addEventListener('touchstart', active )