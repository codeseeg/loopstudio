"use strict";

const hamburger = document.querySelector("#hamburger").innerHTML;
const nav = document.querySelector("nav");
const container = document.querySelector("main");
const sections = document.querySelectorAll("section");
// const creations = document.querySelectorAll(".creations");'
const header = document.querySelector("header");

const footer = document.querySelector("footer");
const ul = document.querySelector("ul");

container.addEventListener("mouseover", (e)=>{
  const target = e.target;
  if(target.hasAttribute("href")){
    target.closest("ul").querySelectorAll("a").forEach((link)=>{
      if(link !== e.target){
        link.style.opacity = "0.3";
      }
    })

    target.closest("ul").parentElement.querySelector('img').style.opacity = "0.3";
    console.log()
   
  }
});

container.addEventListener("mouseout", (e)=>{
  const target = e.target;
  if(target.hasAttribute("href")){
    target.closest("ul").querySelectorAll("a").forEach((link)=>{
        link.style.opacity = "1";
      
    })
    target.closest("ul").parentElement.querySelector('img').style.opacity = "1";
  }
})

nav.addEventListener("click", (e) => {
  let clicked = e.target;
  if (clicked.hasAttribute("src")) {
    if (clicked.dataset.menu === "open") {
      clicked.dataset.menu = "close";
      nav.classList.add("menu-list");
      clicked.setAttribute("src", "/icons/icon-close.svg");
    } else if (clicked.dataset.menu === "close") {
      clicked.setAttribute("src", "/icons/icon-hamburger.svg");
      clicked.dataset.menu = "open";
      nav.classList.remove("menu-list");
    }
  }
});

const options = {
  root: null,
  threshold: 0.15,
};
const intersect = new IntersectionObserver(scrollReveal, options);

function scrollReveal(entries, observing) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.replace("remove-slide", "slide-in");
  observing.unobserve(entry.target);
  //   console.log(entry);
}

sections.forEach((section) => {
  intersect.observe(section);
});

intersect.observe(footer);

const opts = {
  root: null,
  threshold: 0,
  rootMargin: "-" + nav.getBoundingClientRect().height + "px"
}
const  navFixed = new IntersectionObserver(fixedFunction, opts);

function fixedFunction(entries, observing){
  let [entry] = entries;

  
  if(!entry.isIntersecting) {
    nav.classList.add("navFixed");
  } else{
    nav.classList.remove("navFixed");
  }

    
};

navFixed.observe(header);