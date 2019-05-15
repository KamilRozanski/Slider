

const slideList = [{
    img:'images/img1.jpg',
    text: 'Text number one'
},
{
    img:'images/img2.jpg',
    text: 'Text number two'
},
{
    img:'images/img3.jpg',
    text: 'Text number three'
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dots span')]
const time = 3000;
let active= 0;


const changeDot = ()=> {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'))
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');

}

const changeSlide = ()=> {
    active++;
    if(active === slideList.length ) {
        active = 0;
    } 

    image.src = slideList[active].img
    h1.textContent = slideList[active].text

    changeDot()
    
}



let indexIntervan = setInterval(changeSlide, time)

const clickDots = (e) => {
    if(e.keyCode === 37 || e.keyCode === 39) {
        clearInterval(indexIntervan);
        e.kayCode === 37 ? active-- : active++;
        if(active === slideList.length){
            active = 0;
        } else if(active < 0) {
            active = slideList.length - 1;
        }
        image.src = slideList[active].img
        h1.textContent = slideList[active].text
        changeDot()
        indexIntervan = setInterval(changeSlide, time);
        console.log(active);
    }
}
window.addEventListener('keydown', clickDots)
