let slideIndex = 1;

function setSlide(input, index) {
    slideIndex = index;
    let item = document.querySelector(`#${input}`);
    let slides = [...document.querySelector('.slides').children];
    slides.forEach((element)=> {
        element.classList.remove('active');
    })
    item.classList.add('active');
    let dots = document.querySelectorAll('.dots li');
    dots.forEach((dot, i) => {
        dot.classList.remove('activeSet');
        if (i === index - 1) {
            dot.classList.add('activeSet')
        }
        
    })
}


setInterval(()=> {
    slideIndex += 1;
    if(slideIndex == 4) {
        slideIndex = 1;
    }
    setSlide(`slide${slideIndex}`, slideIndex);
    
}, 8000);





