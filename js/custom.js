new fullpage('.content', {})


const tl = gsap.timeline();

tl.to('.navi', {
    motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,

    },
    duration: 10


})


