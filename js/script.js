// Toggle class active
const navbarNav = document.querySelector
(`.navbar-nav`);
// Ketika menu di klik
document.querySelector(`#menu1`).
onclick = () => {
    navbarNav.classList.toggle(`active`);
}

//klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector('#menu1');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbxEI4EnXUV6JZDlTTz9XgpaaBiZ-BVcWSZqKnRDhO6ubBTp-thyqvUVeVs1WFlQGm9z/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})