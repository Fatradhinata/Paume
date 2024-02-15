
var artistName = document.querySelectorAll('.artist-gallery');

artistName.forEach(element => {
    element.addEventListener("mousemove", (e) => {
    element.style.zIndex = 5;
    let imageHover = element.querySelector(".image-container");
    let pos = imageHover.getBoundingClientRect();
    console.log(pos.left, e.clientX / 10);
    gsap.to(imageHover, {
        duration: .5,
        x: e.clientX / 10,
        y: e.clientY / 10
    })
    })
});