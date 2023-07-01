// ==== scroll to top ===
const scrollTop = document.querySelector('.scroll-to-top')
scrollTop.onclick = function() {
    document.documentElement.scrollTo({
        top:0,
        behavior:'smooth'
    })
}
function toggleScrollBtn() {
    if(window.scrollY >= 480) {
        scrollTop.style.display='grid'
    }else
    scrollTop.style.display='none'
}
// end scroll to top 

// prelaoder 
const preloader = document.getElementById('preloader');
window.onload = function(){
    preloader.style.display = 'none';
}

//===== header functoins =======
const headerNav = document.querySelector('.header__nav')
const headerMinue = document.querySelector('.header__minue')
const closeIcon = document.getElementById('close-icon');
const iconBar = document.querySelector('.header__bar-icon')


iconBar.addEventListener('click',function(){
    headerNav.classList.add('header__overlay')
    headerMinue.classList.add('header__minue--responsiv')
    closeIcon.classList.add('show')
})
closeIcon.onclick = function() {
    headerNav.classList.remove('header__overlay')
    headerMinue.classList.remove('header__minue--responsiv')
    closeIcon.classList.remove('show')
}
// end header functions

//  ====== animation functions ====
const section = document.querySelectorAll('section')
//hero section animation
const HeroSection = document.querySelector('.Hero')
const heroContent =  document.querySelector('.Hero__content')
function animatzoomIN(element) {
    element.classList.add('animate__zoomIn')
}

if(heroContent!=null)
    animatzoomIN(heroContent);

// end hero animation

// about section animation
const aboutTextContent = document.querySelector('.About__text-content')
const aboutImg = document.querySelector('.About__img')
function fadeUpfadeRihgt(textContent,imgContent) {
    textContent.classList.add('animate__fadeInUp');
    imgContent.classList.add('animate__fadeInRight')
}
// end about animation 

// coutnters animation 
const counters = document.querySelectorAll('.counter__box span')
let isStarted = false;
function startCounter() {
    counters.forEach(c=>{
        let goal = c.dataset.counter
        const counter = setInterval(function(){
           c.textContent = +c.textContent +1;
           if(+c.textContent >= +c.dataset.counter)
            clearInterval(counter)
        },2000/goal)
    })
}
// end counters animation 

// start choose us animation 
const chooseUscontent = document.querySelector('.choose-us__main-content')
const chooseUsBoxes = document.querySelector('.choose-us__boxes')
function fadeUp(content) {
    if(content!=null)
    content.classList.add('animate__fadeInUp');
}
// end choose us 

// start features animation 

const features = document.querySelector('.features')
    function zoomIn(element) {
        element.classList.add('t-scale-1')
    }
// end features 


//courses
const coursesTitle = document.querySelector('.courses__title')
const coursesCards = document.querySelector('.courses__cards')

// trainer animation 
const team = document.querySelector('.team')
 
window.onscroll = function(){
    section.forEach(section=>{
        if(scrollY >= section.offsetTop - 400) {
            if(section.getAttribute('id') =='About')
                fadeUpfadeRihgt(aboutTextContent,aboutImg);
        }
        if(scrollY >= section.offsetTop - 600) {
            if(section.getAttribute('id') =='counters') {
                if(!isStarted){
                    startCounter();
                }
                isStarted = true;
            }
        }
        if(scrollY >= section.offsetTop - 400) {
            if(section.getAttribute('id') =='ChoosUs')
               {
                    fadeUp(chooseUscontent);
                    fadeUp(chooseUsBoxes)
               }
        }
        if(scrollY >= section.offsetTop - 400) {
            if(section.getAttribute('id') =='Features')
               {
                zoomIn(features);
               }
        }
        if(scrollY >= section.offsetTop - 400) {
            if(section.getAttribute('id') =='Courses')
               {
                fadeUp(coursesTitle)
               }
        }
        if(scrollY >= section.offsetTop - 350) {
            if(section.getAttribute('id') =='Courses')
               {
                fadeUp(coursesCards)
               }
        }
        if(scrollY >= section.offsetTop - 400) {
            if(section.getAttribute('id') =='Trainer')
               {
                zoomIn(team)
               }
        }
    })
}