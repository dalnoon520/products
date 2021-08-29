const imgBx = document.querySelector('.imgBx');
const slides = imgBx.getElementsByTagName('img');
var i = 0;

function nextSlide() {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}

function prevSlide() {
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}




const contentBx = document.querySelector('.contentBx');
const slideText = contentBx.getElementsByTagName('div');
var j = 0;

function nextSlideText() {
    slideText[j].classList.remove('active');
    j = (j + 1) % slideText.length;
    slideText[j].classList.add('active');
}

function prevSlideText() {
    slideText[j].classList.remove('active');
    j = (j - 1 + slideText.length) % slideText.length;
    slideText[j].classList.add('active');
}