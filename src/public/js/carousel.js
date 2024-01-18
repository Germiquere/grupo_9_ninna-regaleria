window.onload = function(){
    const carouselItems = document.querySelector('.carousel-items')
    const point = document.querySelectorAll('.point')
    
    point.forEach((cadaPunto, i) => {
        point[i].addEventListener('click', ()=>{
            let position = i;
            let operacion = position * -16.666;

            carouselItems.style.transform = `translateX(${ operacion }%)`;

            point.forEach((cadaPunto, i) => {
                point[i].classList.remove('active')});

            point[i].classList.add('active')
        })

    })
}