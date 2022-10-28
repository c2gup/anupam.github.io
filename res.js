barger = document.querySelector('.barger')
nav = document.querySelector('.nav')
list = document.querySelector('.list')
navleft = document.querySelector('.nav-left')

// barger.addEventListener('click', ()=>{
//     navleft.classList.toggle('v-class');
//     list.classList.toggle('v-class');
//     nav.classList.toggle('nav-h');
// })


barger.addEventListener('click', ()=>{
    navleft.classList.toggle('v-class');
    list.classList.toggle('v-class');
    nav.classList.toggle('nav-h');
    
})