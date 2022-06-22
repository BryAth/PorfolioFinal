
gsap.registerPlugin(ScrollTrigger);

let para = document.querySelector(".para");



let imgtop = document.querySelector(".image");
let paratop = document.querySelector(".t");
let cardanim = document.getElementsByClassName("card")
let contain2 = document.getElementsByClassName("container2")
let porf = document.getElementsByClassName("container")

gsap.to(contain2,{

        scrollTrigger :{

            
                trigger : contain2,
                start : "100 center",
                end:  "350 center",
                scrub : 1,
                markers: false,
        }
,x:0,opacity:1
})



let compet= document.getElementsByClassName("container3")

gsap.to(compet,{ 
    
        scrollTrigger : {
        trigger : compet,
        start : "50 center",
        end:  "300 center",
        scrub : 1,
        markers: false,
}
,x:0,opacity:1})





gsap.to(porf,{

    scrollTrigger :{

        
            trigger : porf,
            start : "0 center",
            end:  "100 center",
            scrub : 1,
            markers: false,
    }
,y:0,opacity:1,
})


















gsap.fromTo(para,{x:-2500}, {x:0,duration:2});
gsap.fromTo(imgtop,{x:-2500}, {x:0,duration:2});
gsap.fromTo(paratop,{x:2500}, {x:0,duration:2});

