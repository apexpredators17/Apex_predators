// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });


function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 6500)
}

loaderAnimation()


var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    speed: 500,
    loop: true,
    rotate: true,
    mousewheel: {
    invert: false,
  },
});

gsap.from("#about, #content",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:"top 60%",
        end:"top 75%",
        scrub:2
    }
})

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);


function readMore(ele,eve){
    eve.preventDefault();
    var txt = document.querySelector(".read_more_text");
    txt.classList.toggle("show-few-lines");
    
    if(txt.classList.contains("show-few-lines")){
        ele.innerText = "Read More";
    }else{
        ele.innerText = "Read Less";
    }
}

gsap.to("#page3",{
    backgroundColor:"white",
    duration:0.3,
    // hight:"110px",
    scrollTrigger:{
        trigger:"nav",
        scrooler:"body",
        start:"top -220%",
        end:"top -300%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector('.horizontal');

console.log(horizontalSection.scrollWidth);

gsap.to('.horizontal', {
  x: () => horizontalSection.scrollWidth * -1,
  xPercent: 100,
  scrollTrigger: {
    trigger: '.horizontal',
    start: 'center center',
    end: '+=790px',
    pin: '#horizontal-scoll',
    scrub: true,
    invalidateOnRefresh: true
  }
});
