burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-reps');
    navList.classList.toggle('v-class-reps');
    navbar.classList.toggle('h-nav-reps');
})