const btnleft = document.querySelector(".btn-left"),
      btnright = document.querySelector(".btn-right"),
      slider = document.querySelector("#Slider"),
      sliderCarrusel = document.querySelectorAll(".Slider_carrusel");


btnleft.addEventListener("click",e => moveToLeft())
btnright.addEventListener("click",e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);

let operacion = 0,
    counter = 0,
    WidhtImg = 100 / sliderCarrusel.length;

function moveToRight() {
    if (counter >= sliderCarrusel.length-1) {
        counter= 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return
    }
    counter++;
    operacion = operacion + WidhtImg
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease.6s"
}

function moveToLeft() {
    counter--;

    if (counter < 0){
        counter = sliderCarrusel.length-1;
        operacion= WidhtImg *(sliderCarrusel.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return
    }
    operacion = operacion - WidhtImg
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease.6s"
    

}