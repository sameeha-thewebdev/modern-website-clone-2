const crsr = document.querySelector("#crsr")
const blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", (dets)=>{
    crsr.style.left = dets.x + 30 + "px"
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 140 + "px";
    blur.style.top = dets.y - 140 + "px";
})

gsap.to("#nav", {
    height: "100px",
    backgroundColor: "#000",
    duration: 0.2,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        //markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    duration: 0.2,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        //markers: true,
        start: "top -15%",
        end: "top -70%",
        scrub: 5
    }
})

var navElem= document.querySelectorAll("#nav>h4")

navElem.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        elem.style.color = "#556723";
        crsr.style.scale=4
        crsr.style.backgroundColor = "#96c11e1b";
        crsr.style.border="0.2px solid #fff"
    })
    elem.addEventListener("mouseleave", () => {
      elem.style.color = "#fff";
      crsr.style.scale = 1;
      crsr.style.backgroundColor = "#95c11e";
      crsr.style.border = "0px solid #95c11e";
    });
})

gsap.from("#about-us>img, .about-us",{
    y: 150,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
        //markers:true,
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 4,
    }
})

gsap.from(".left", {
  y: -60,
  x:-60,
  duration: 0.7,
  scrollTrigger: {
    //markers:true,
    trigger: "#page3",
    scroller: "body",
    start: "top bottom",
    end: "top 50%",
    scrub: 4,
  },
});

gsap.from(".right", {
  y: 60,
  x: 60,
  duration: 0.7,
  scrollTrigger: {
    //markers:true,
    trigger: "#page3",
    scroller: "body",
    start: "top bottom",
    end: "top 50%",
    scrub: 4,
  },
});

gsap.from("#page4>h1", {
  y: 60,
  opacity:0,
  duration: 0.7,
  scrollTrigger: {
    //markers:true,
    trigger: "#page4",
    scroller: "body",
    start: "top bottom",
    end: "top 50%",
    scrub: 3,
  },
});