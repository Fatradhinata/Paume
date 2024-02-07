    document.addEventListener('mousemove', (e) => {
        gsap.to(".cursor", {
            opacity: 1,            
            duration: 0.4,
            x: e.clientX,
            y: e.clientY,
            ease: "power2",
        });

        gsap.set(".cursor", {
            backdropFilter: "invert(100%)"
        })
    })

    document.addEventListener('mouseleave', (e) => {
        gsap.to(".cursor", {
            opacity: 0
        })
    })