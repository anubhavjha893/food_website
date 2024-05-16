var mainElement = document.querySelector(".main");
var p1 = document.querySelector(".pad1");
var p2 = document.querySelector(".pad2");
var p3 = document.querySelector("#pad3");
var a = document.querySelector("#mark");
var img = document.querySelector(".food-image img");
var h1 = document.querySelector("#f1");
var h2 = document.querySelector("#f2");
var h3 = document.querySelector("#f3");
var h4 = document.querySelector("#f4");
var h5 = document.querySelector("#f5");
var h6 = document.querySelector("#f6");
var h7 = document.querySelector("#f7");
var next = document.querySelector("#next");




function abcd(){
  var tl = gsap.timeline();

tl.from(".food-image img", {
  x: 400,
  y: -400,
  rotate: 180,
  opacity: 0,
  delay: 0.1,
  stagger: 1,
  duration: 2,
  ease: "ease in",
});
tl.to(".food-image img", {
  yoyo:true,
  repeat:-1,
  rotate: 10,
  duration: 4,
  ease: "ease in",
});
tl.to(".food-image img", {
  yoyo:true,
  repeat:-1,
  rotate: -10,
  duration: 4,
  ease: "ease in",
});

tl.from(".text h1", {
  y: "100%",
  // opacity: 0,
  delay: 0.1,
  stagger: 0.25,
  duration: 1.25,
  ease: "power2.out",
},2);

tl.from("p,button", {
  y: "100%",
  opacity: 0,
  delay: 0.1,
  stagger: 0.12,
  duration: 1.25,
  ease: "power2.out",
},2);




}

abcd()

// function burger(){
//   mainElement.style.background = "radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%), radial-gradient(ellipse at center, #b37544 30%, #B37544 100%";
//   mainElement.style.backgroundSize = "100% 100%";
//   mainElement.style.backgroundRepeat = "no-repeat";
  
  
  
//   img.src = "https://imgs.search.brave.com/N1vJyOJya-omIbzaJJrNNJzV5kAp1lzhL-XpyuoWlHM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYnVyZ2VyX3Nh/bmR3aWNoL2J1cmdl/cl9zYW5kd2ljaF9Q/Tkc0MTM1LnBuZw" ;
  
//   h1.textContent = "b";
//   h2.textContent = "u";
//   h3.textContent = "r";
//   h4.textContent = "g";
//   h5.textContent = "";
//   h6.textContent = "e";
//   h7.textContent = "r";
// }

function nextt(){
  mainElement.style.background = "radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%), radial-gradient(ellipse at center, #b34444 30%, #b34d44 100%)";
mainElement.style.backgroundSize = "100% 100%";
mainElement.style.backgroundRepeat = "no-repeat";



img.src = "./twister.png";



h1.textContent = "t";
// h2.textContent = "w";
h3.textContent = "i";
h4.textContent = "s";
h5.textContent = "t";
h6.textContent = "e";
h7.textContent = "r";



p1.textContent = "Twister Wrap: A Twister wrap is typically made with a soft tortilla that is filled with various ingredients and then rolled. The filling often includes a protein such as grilled or fried chicken, beef, or lamb, along with vegetables like lettuce, tomatoes, onions, and sometimes cheese.";

p2.textContent = "Shawarma Twister: Shawarma Twisters are similar to regular shawarma wraps but are often rolled in a soft tortilla instead of pita bread. The filling usually consists of thinly sliced grilled or spit-roasted meat (chicken, beef, or lamb)";

p3.textContent = "Twister Fries: Twister fries are spiral-cut French fries that are seasoned and fried until crispy. They have a unique twisted shape and a crunchy texture. Twister fries are often served as a snack or a side dish and can be enjoyed with taste.";
abcd();

}



// next.addEventListener("click", function(){
//   nextt();

// })

// a.addEventListener("click",function(){
//   burger();
//   abcd();
// })



