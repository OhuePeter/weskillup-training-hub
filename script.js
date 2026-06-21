const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Contact form submitted. Connect EmailJS to receive messages in Gmail."
);

});

}

document
.getElementById("studentForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Registration received. Connect EmailJS or Google Sheets backend."
);

});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll("#mainNav a");

if(menuToggle && mainNav){

menuToggle.addEventListener("click",function(){

mainNav.classList.toggle("is-open");

const isExpanded = mainNav.classList.contains("is-open");

menuToggle.setAttribute("aria-expanded",String(isExpanded));
menuToggle.textContent = isExpanded ? "Close" : "Menu";

});

navLinks.forEach(function(link){

link.addEventListener("click",function(){

mainNav.classList.remove("is-open");
menuToggle.setAttribute("aria-expanded","false");
menuToggle.textContent = "Menu";

});

});

}

const revealTargets = document.querySelectorAll(".hero, section, footer");

if("IntersectionObserver" in window){

const revealObserver = new IntersectionObserver(function(entries,observer){

entries.forEach(function(entry){

if(entry.isIntersecting){
entry.target.classList.add("is-visible");
observer.unobserve(entry.target);
}

});

},{threshold:.2,rootMargin:"0px 0px -8% 0px"});

revealTargets.forEach(function(target){
target.classList.add("reveal");
revealObserver.observe(target);
});

}else{

revealTargets.forEach(function(target){
target.classList.add("is-visible");
});

}