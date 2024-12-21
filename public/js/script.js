gsap.from('.secondhalf',{
    x:'-400%',
    duration:2
});

gsap.from('.fluid1',{
    y:-600,
    rotateX:'180deg',
    rotateY:'300deg',
    duration:0.9,
    opacity:0,
    scrollTrigger:{
        trigger:'.fluid1',
        scroller:'body',
        // markers:true,
        start:'bottom 10%',
        end:'top 30%',
        scrub:3
    }
})
gsap.from('.fluid2',{
    y:-400,
    rotateX:'-300deg',
    rotateY:'190deg',
    opacity:0,
    borderRadius:'50%',
    duration:2,
    scrollTrigger:{
        trigger:'.fluid2',
        scroller:'body',
        // markers:true,
        start:'top 10%',
        end:'top 30%',
        scrub:5
    }
})
gsap.from('.fluid3',{
    x:-200,
    // y:-100,
    rotateX:'-180deg',
    rotateY:'300deg',
    duration:2,
    opacity:0.8,
    scrollTrigger:{
        trigger:'.fluid3',
        scroller:'body',
        // markers:true,
        start:'top 80%',
        end:'top 30%',
        scrub:5
    }
})

gsap.from('.paras .animation',{
    y:80,
    opacity:0,
    duration:0.9,
    scrollTrigger:{
        trigger:'.paras .animation',
        scroller:'body',
        // markers:true,
        start:'top 90%',
        end:'top 80%',
        scrub:2
    }
})