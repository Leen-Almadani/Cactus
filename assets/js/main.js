/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    close_btn = document.getElementById('nav-close'),
    toggle_btn = document.getElementById('nav-toggle');

toggle_btn.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
})
close_btn.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    })





/*=============== REMOVE MENU MOBILE ===============*/

const nav__link = document.querySelectorAll('.nav__link');
const linkAction = () => {
    
    navMenu.classList.remove('show-menu');
}
nav__link.forEach((n)=>n.addEventListener('click',linkAction))


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
        :header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

/*=============== SHOW SCROLL UP ===============*/
const ScrollUp = document.getElementById('scroll-up');
const ShowScrollUp = () => {
    scrollY >= 350 ? ScrollUp.classList.add('show-scrollup')
        :ScrollUp.classList.remove('show-scrollup')
}
window.addEventListener('scroll',ShowScrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollDown = window.scrollY
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }
        else {
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
    //reset:true,//animation repeat

})
sr.reveal('.home__img, .new__data,.care__img,.contact__content,.footer');
sr.reveal('.home__data,.care__list,.contact__img',{delay:500})
sr.reveal('.new__card', { delay: 500, interval: 100 ,rotate:{z:-50}})
sr.reveal('.shop__card',{interval:100})