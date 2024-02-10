var time = gsap.timeline()

var time2 = gsap.timeline()

time.from(".left-nav h3",{
    x:-90,
    opacity:0,
    stagger:0.3,
    delay:0.5,
})

time.from(".mid-nav h1",{
    y:-50,
    opacity:0,
    duration:0.7,
})

time.from(".right-nav h3",{
    x:90,
    opacity:0,
    stagger:0.3,
})

time.from("h4",{
    y:20,
    opacity:0,
})

gsap.from(".icons",{
    x:100,
    opacity:0,
    duration:1,
})

time2.from(".content h1", {
    x:50,
    opacity:0,
    duration:1,
    delay:0.5,
})

time2.from("#img1",{
    duration:0.5,
    opacity:0,
    stagger:0.3,
    scale:1.5,
})

time2.from("#img2",{
    opacity:0,
    stagger:0.3,
    scale:1.5,
})

time2.from("#img3",{
    opacity:0,
    stagger:0.3,
    scale:1.5,
})

time2.from("#img4",{
    opacity:0,
    stagger:0.3,
    scale:1.5,
})