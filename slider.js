const config = {
    type: "carousel",
    startAt: 0,
    autoplay: 4000,
    hoverpause: false,
    perView: 1,
    animationDuration: 1000,
    animationTimingFunc: "ease-in-out",
    gap: 0
}
new Glide('.glide', config).mount();

const config2 = {
    type: "carousel",
    startAt: 2,
    autoplay: 4000,
    hoverpause: false,
    perView: 5,
    animationDuration: 1000,
    animationTimingFunc: "ease-in-out",
    gap: 0,
     breakpoints: {
         1200: {perView: 4},
         900: {perView: 3},
         600: {perView: 2,
                peek: {
                before: 0,
                after: 0
               }}
     }
}
new Glide('.glide2', config2).mount();

