const slideList = [{
 img: "images/img1.jpg",
 text: 'Pierwszy tekst'
},
{
 img: "images/img2.jpg",
 text: 'Drugi tekst'
},
{
 img: "images/img3.jpg",
 text: 'Trzeci tekst'
}];

const img = document.querySelector('img.slider');
const h1 = document.querySelector('h1');
const dots = document.querySelectorAll('span');

const time = 5000;
let active = 1;

const changeSlide = () => {

  if(active === slideList.length){
    active = 0;
  }

  img.removeAttribute('img');
  img.setAttribute("src", slideList[active].img);
  h1.textContent = slideList[active].text;

  dots.forEach(el => {
    el.classList.remove('active');
  })
  dots[active].classList.add('active');

  console.log(active);
  active++;

}


setInterval(changeSlide, time);