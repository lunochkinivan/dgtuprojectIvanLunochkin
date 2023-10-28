const sliderMain = new Swiper('.slider_main',{
    freeMode: true,
    centeredSlides: true,
    mousewheel:true,
    parallax:true,
    breakpoints:{
        0:{
            slidesPerView:2.5,
            spaceBetween:25
        },
        680:{
            slidesPerView:3.5,
            spaceBetween:65
        }
    }
})

const sliderIv = new Swiper('.slider_iv',{
    centeredSlides: true,
    parallax:true,
    spaceBetween:60,
    slidesPerView:3.5   
})

sliderMain.controller.control = sliderIv

document.querySelectorAll('.slider_item').forEach(item => {
    item.addEventListener('click', event => {
       item.classList.toggle('open') 
    })
})

let de = document.querySelector('.desc')
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? de.classList.add('hide') : de.classList.remove('hide')
})

