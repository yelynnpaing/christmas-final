import './style.scss';
import 'bootstrap/dist/js/bootstrap.min'
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import 'waypoints/lib/noframework.waypoints.min';


let siteNavbar = document.querySelector("#siteNavbar");
let givingPresent = document.querySelector("#givingPresent");
let message = document.querySelector("#message");
let arrowUp = document.querySelector("#arrowUp")
let navBrandName = document.querySelector(".nav-brand-name");
let navLinkName1 = document.querySelector(".nav-link-name1");
let navLinkName2 = document.querySelector(".nav-link-name2");
let navLinkName3 = document.querySelector(".nav-link-name3");
let navLinkName4 = document.querySelector(".nav-link-name4");
let navLinkName5 = document.querySelector(".nav-link-name5");
let navLinkName6 = document.querySelector(".nav-link-name6");
let heroTextPara = document.querySelector(".hero-text-para");
let celebratePara = document.querySelector(".celebrate-para");
let givingPresentPara1 = document.querySelector(".giving-present-para1");
let givingPresentPara2 = document.querySelector(".giving-present-para2");
let givingPresentPara3 = document.querySelector(".giving-present-para3");
let newRow = document.querySelector("#new-row");
let giftCard1 = document.querySelector(".gift-card1");
let giftCard2 = document.querySelector(".gift-card2");
let giftCard3 = document.querySelector(".gift-card3");
let giftCard4 = document.querySelector(".gift-card4");
let giftCard5 = document.querySelector(".gift-card5");
let slideCard1 = document.querySelector(".slide-card1");
let slideCard2 = document.querySelector(".slide-card2");
let slideCard3 = document.querySelector(".slide-card3");
let slideCard4 = document.querySelector(".slide-card4");
let slideCard5 = document.querySelector(".slide-card5");
let slideCard6 = document.querySelector(".slide-card6");
let slideCard7 = document.querySelector(".slide-card7");
let slideCard8 = document.querySelector(".slide-card8");
let slideCard9 = document.querySelector(".slide-card9");
let slideCard10 = document.querySelector(".slide-card10");
let footText0 = document.querySelector(".foot-text0");
let footText1 = document.querySelector(".foot-text1");
let footText2 = document.querySelector(".foot-text2");
let footText3 = document.querySelector(".foot-text3");
let footText4 = document.querySelector(".foot-text4");
let footText5 = document.querySelector(".foot-text5");
let footText6 = document.querySelector(".foot-text6");
let footText7 = document.querySelector(".foot-text7");
let footText8 = document.querySelector(".foot-text8");
let footText9 = document.querySelector(".foot-text9");


let waypoint = new Waypoint({
    element: document.getElementById('givingPresent'),
    handler: function(direction) {
        console.log("Hello Waypoint")
        if(direction === "down"){
            siteNavbar.classList.toggle("animate__fadeInDown")
            siteNavbar.classList.toggle("shadow-sm")
            siteNavbar.classList.toggle("site-navbar-onscroll")
        }else{
            siteNavbar.classList.toggle("animate__fadeInDown")
            siteNavbar.classList.toggle("shadow-sm")
            siteNavbar.classList.toggle("site-navbar-onscroll")
        }
    },
    offset: '85%'
});
//reveal slid
let slideDown = {
    delay:'200',
    distance: '50px',
    origin: 'top',
    duration:900,
    interval:450,
    reset:true,
};
ScrollReveal().reveal('.slide-down', slideDown);
let slideLeft = {
    delay:'200',
    distance: '50px',
    origin: 'left',
    duration:1000,
    interval: 450,
    reset:true,
};
ScrollReveal().reveal('.slide-left', slideLeft);
let slideRight = {
    delay:'200',
    distance: '90px',
    origin: 'right',
    duration:1000,
    interval:500,
    reset:true,
};
ScrollReveal().reveal('.slide-right', slideRight);
let slideBottom = {
    delay:'200',
    distance: '150px',
    origin: 'bottom',
    duration:1000,
    interval:500,
    reset:true,
};
ScrollReveal().reveal('.slide-bottom', slideBottom);
//hero section
let heroText = new Typed('.heroText', {
    strings: [
        '<span class="text-primary">Marry Christmas .....</span>',
        '<span class="text-success">Happy New Year! .....</span>',
        '<span class="text-primary">Marry Christmas</span> <span class="text-success">and Happy New Year! ...</span>'
    ],
    typeSpeed:60,
    backSpeed:60,
    startDelay:20,
    backDelay:60,
    loop:true
});

let changerDark = document.getElementById("changerDark");
changerDark.addEventListener("click", function (){
    darkModeChange();
    iconChange();
})
let darkModeIcon = document.querySelector("#darkModeIcon");
let lightIcon = document.getElementById("lightIcon");
function iconChange(){
    console.log("changingIcon")
    darkModeIcon.classList.toggle("d-none");
    lightIcon.classList.toggle("d-none");
}

function darkModeChange(){
    console.log("dark mode")
    document.body.classList.toggle('dark-mode');
    siteNavbar.classList.toggle("bg-secondary");
    navBrandName.classList.toggle("text-white");
    navLinkName1.classList.toggle("text-white");
    navLinkName2.classList.toggle("text-white");
    navLinkName3.classList.toggle("text-white");
    navLinkName4.classList.toggle("text-white");
    navLinkName5.classList.toggle("text-white");
    navLinkName6.classList.toggle("text-white");
    heroTextPara.classList.toggle("text-black-50");
    celebratePara.classList.toggle("text-black-50");
    givingPresentPara1.classList.toggle("text-black-50");
    givingPresentPara2.classList.toggle("text-black-50");
    givingPresentPara3.classList.toggle("text-black-50");
    giftCard1.classList.toggle("text-black");
    giftCard2.classList.toggle("text-black");
    giftCard3.classList.toggle("text-black");
    giftCard4.classList.toggle("text-black");
    giftCard5.classList.toggle("text-black");
    newRow.classList.toggle("bg-light");
    slideCard1.classList.toggle("bg-light");
    slideCard2.classList.toggle("bg-light");
    slideCard3.classList.toggle("bg-light");
    slideCard4.classList.toggle("bg-light");
    slideCard5.classList.toggle("bg-light");
    slideCard6.classList.toggle("bg-light");
    slideCard7.classList.toggle("bg-light");
    slideCard8.classList.toggle("bg-light");
    slideCard9.classList.toggle("bg-light");
    slideCard10.classList.toggle("bg-light");
    footText0.classList.toggle("text-black-50");
    footText1.classList.toggle("text-black-50");
    footText2.classList.toggle("text-black-50");
    footText3.classList.toggle("text-black-50");
    footText4.classList.toggle("text-black-50");
    footText5.classList.toggle("text-black-50");
    footText6.classList.toggle("text-black-50");
    footText7.classList.toggle("text-black-50");
    footText8.classList.toggle("text-black-50");
    footText9.classList.toggle("text-black-50");

}

//card slide-show
$('.responsive-slide').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

let waypointFoot = new Waypoint({
    element: document.getElementById('gift'),
    handler: function(direction) {
        console.log("foot Waypoint")
        if(direction === "down"){
            arrowUp.classList.toggle("d-block")
            arrowUp.classList.toggle("animate__fadeInUp")
        }else{
            arrowUp.classList.toggle("d-block")
        }
    },
    offset: '50%'
})






