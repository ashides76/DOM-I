const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// header - nav

// const anchor = document.querySelectorAll('nav a');
// anchor[0].textContent = siteContent['nav']['nav-item-1'];
// anchor[1].textContent = siteContent['nav']['nav-item-2'];
// anchor[2].textContent = siteContent['nav']['nav-item-3'];
// anchor[3].textContent = siteContent['nav']['nav-item-4'];
// anchor[4].textContent = siteContent['nav']['nav-item-5'];
// anchor[5].textContent = siteContent['nav']['nav-item-6'];
// const anchorArr = Array.from(anchor)
// anchorArr.map(val => val.classList = 'italic')

const links = document.querySelectorAll('nav a');
// console.log(links)
const linksVal = Object.values(siteContent.nav)
// console.log(linksVal)
links.forEach((val, ind) => {
  val.textContent = linksVal[ind];
  val.classList = 'italic';
})


// section cta

document.querySelector('h1').textContent = siteContent['cta']['h1']
document.querySelector('button').textContent = siteContent['cta']['button']


// section main-content

const h4 = document.querySelectorAll('.main-content h4')
const p = document.querySelectorAll('.main-content p')
h4[0].textContent = siteContent['main-content']['features-h4'];
p[0].textContent = siteContent['main-content']['features-content'];
h4[1].textContent = siteContent['main-content']['about-h4'];
p[1].textContent = siteContent['main-content']['about-content'];
h4[2].textContent = siteContent['main-content']['services-h4'];
p[2].textContent = siteContent['main-content']['services-content'];
h4[3].textContent = siteContent['main-content']['product-h4'];
p[3].textContent = siteContent['main-content']['product-content'];
h4[4].textContent = siteContent['main-content']['vision-h4'];
p[4].textContent = siteContent['main-content']['vision-content'];



// contact

document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4']
const pContact = document.querySelectorAll('.contact p')
// console.log(pContact)
pContact[0].classList.add('address');
pContact[1].classList.add('phone');
pContact[2].classList.add('email');
const address = document.querySelector('.address')
address.textContent = siteContent['contact']['address']
const phone = document.querySelector('.phone')
phone.textContent = siteContent['contact']['phone']
const email = document.querySelector('.email');
email.textContent = siteContent['contact']['email']

// footer

document.querySelector('footer a').textContent = siteContent['footer']['copyright']
document.querySelector('footer a').classList.add('bold');

// image
document.querySelector('#logo-img').src = siteContent['images']['logo-img'];
document.querySelector('#cta-img').src = siteContent['images']['cta-img'];
document.querySelector('#middle-img').src = siteContent['images']['accent-img'];