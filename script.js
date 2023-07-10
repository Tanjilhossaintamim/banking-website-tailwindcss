const hamburger = document.querySelector('#bar');
const menubar = document.querySelector('#menubar');
const fa_solid = document.querySelector('.fa-solid');
const nav_link = document.querySelectorAll('.nav-link');


if (hamburger) {
    hamburger.addEventListener('click', () => {
        menubar.classList.toggle('hidden');
        fa_solid.classList.toggle('fa-xmark')
    })
    nav_link.forEach((link) => {
        link.addEventListener('click', () => {
            menubar.classList.toggle('hidden');
            fa_solid.classList.toggle('fa-xmark');
        })
    })
}

// testmonial 
const userPics = document.querySelectorAll('.user-pic');
const userTexs = document.querySelectorAll('.user-text');


userPics.forEach(pic => {


    pic.addEventListener('click', showReview)
})

function showReview(event) {
    for (let userpic of userPics) {
        userpic.classList.remove('active-pic')
    }
    for (let usertext of userTexs) {
        usertext.classList.remove('active-text')
    }
    let i = Array.from(userPics).indexOf(event.target)
    userPics[i].classList.add('active-pic')
    userTexs[i].classList.add('active-text')
}


const toggleBtn = document.getElementById('toggleBtn');
const card_1_front = document.querySelector("#card_1_front");
const card_1_back = document.querySelector("#card_1_back");
const card_2_front = document.querySelector("#card_2_front");
const card_2_back = document.querySelector("#card_2_back");
const card_3_front = document.querySelector("#card_3_front");
const card_3_back = document.querySelector("#card_3_back");

toggleBtn.addEventListener('change', () => {
    card_1_front.classList.toggle('-rotate-y-180');
    card_1_back.classList.toggle('rotate-y-180');
    card_2_front.classList.toggle('-rotate-y-180');
    card_2_back.classList.toggle('rotate-y-180');
    card_3_front.classList.toggle('-rotate-y-180');
    card_3_back.classList.toggle('rotate-y-180');

})


const navbar=document.querySelector('header');
window.onscroll=()=>{
if (window.scrollY>100){
    navbar.classList.add('border-b');
    navbar.classList.add('bg-color-primary');
    navbar.classList.add('border-color-gray');
}
else{
    navbar.classList.remove('border-b');
    navbar.classList.remove('bg-color-primary');
    navbar.classList.remove('border-color-gray');
}
}