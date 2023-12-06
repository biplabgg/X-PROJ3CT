//locomotive smooth scroll from github

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//gsap animation
gsap.from(".nlink",{
    stagger:.1,
    y:10,
    duration:1.2,
    
    opacity:0
})

Shery.textAnimate("#headings h1" , {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay:0.1,
    duration:2,
    
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".anim2",{

    y:90,
    stagger:.2,
    opacity:1,
    
    duration:2

  })

  Shery.imageEffect("#imagentext img",{
    style:3,
    config:{"uFrequencyX":{"value":12.21,"range":[0,100]},"uFrequencyY":{"value":4.58,"range":[0,100]},"uFrequencyZ":{"value":36.64,"range":[0,100]},"geoVertex":{"range":[1,64],"value":16.87},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499999734791204},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.58,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
    
  });

  Shery.imageEffect(".imgxx img",{
    style:3,
    config:{"uFrequencyX":{"value":9.92,"range":[0,100]},"uFrequencyY":{"value":6.87,"range":[0,100]},"uFrequencyZ":{"value":19.85,"range":[0,100]},"geoVertex":{"range":[1,64],"value":15.43},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.5624803436735037},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.79,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    
  });

 gsap.from("#imagentext img",{
  y:80,
  opacity:0,
  duration:2,
  ease:Expo,



 });

 Shery.imageEffect("#pimg",{

  style:5,
  config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.8214689495424317},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.09,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

  gooey:true,
 });


 document.querySelector("#xtext button")
 .addEventListener("mouseover", function(){
  gsap.to("#biplab video",{
    opacity:1,
    duration:1.5,
    

  })
  
  
 })


 
 document.querySelector("#xtext button")
 .addEventListener("mouseleave",function(){
  gsap.to("#biplab video",{
    opacity:0,
    duration:1.5,
   
  })
  
  
 })



 home=document.querySelector(".home")
 nav=document.querySelector(".nav")
 nleft=document.querySelector(".nleft")


 home.addEventListener("click",()=>{
  nav.navlink.toggle("nlink")
 })