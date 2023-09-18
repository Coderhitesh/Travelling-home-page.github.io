const toggle = document.querySelector(".toggle")
const navlinks = document.querySelector(".nav-links")

toggle.addEventListener('click' , ()=>{
    navlinks.classList.toggle('mobile-menu')
})
