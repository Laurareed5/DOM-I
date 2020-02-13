const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



let navBar = document.querySelectorAll('a');
let navB = Array.from(navBar);
navB[0].textContent = 'Services'
navB[1].textContent = 'Product'
navB[2].textContent = 'Vision'
navB[3].textContent = 'features'
navB[4].textContent = 'About'
navB[5].textContent = 'Contact'


let naviGator = document.querySelector('nav');
let add1 = document.createElement('a');
add1.textContent = 'Home'
add1.style.color = 'silver'
let add2 = document.createElement('a');
add2.textContent = 'FAQ'
add2.style.color = 'silver'
naviGator.prepend(add1)
naviGator.appendChild(add2)

navB.forEach(x => {
  x.style.color = 'silver';
});


let ctaContent = document.querySelector('.cta h1');
ctaContent.innerHTML = "DOM<br>Is<br>Awesome";

let ctaButton = document.querySelector(".cta button");
ctaButton.innerHTML = "Get Started"

let circleImg = document.getElementById("cta-img");
circleImg.setAttribute('src', 'img/header-img.png');

let topTitles = document.querySelectorAll('.text-content h4');
let topT = Array.from(topTitles);
topT[0].textContent = 'Features'
topT[1].textContent = 'About'
topT[2].textContent = 'Services'
topT[3].textContent = 'Product'
topT[4].textContent = 'Vision'

let pContent = document.querySelectorAll('.text-content p');
let pCont = Array.from(pContent);
pCont[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pCont[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pCont[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pCont[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pCont[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', 'img/mid-page-accent.jpg');


let contactTop = document.querySelector('.contact h4');
contactTop.textContent = 'Contact'

let contActp = document.querySelectorAll('.contact p');
let conTp = Array.from(contActp);
conTp[0].innerHTML = '123 Way 456 Street<br>Somewhere, USA'
conTp[1].textContent = '1(888)888-8888'
conTp[2].textContent = 'sales@greatidea.io'

let footerCont = document.querySelectorAll('footer p');
