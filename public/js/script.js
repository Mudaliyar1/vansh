gsap.from('.secondhalf',{
    x:'-400%',
    duration:2
});

gsap.from('.fluid',{
    x:-600,
    duration:0.9,
    scrollTrigger:{
        trigger:'.fluid',
        scroller:'body',
        markers:true,
        start:'top 90%',
        end:'top 50%',
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
        markers:true,
        start:'top 90%',
        end:'top 80%',
        scrub:2
    }
})