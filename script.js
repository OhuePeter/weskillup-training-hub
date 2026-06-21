document
.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Contact form submitted. Connect EmailJS to receive messages in Gmail."
);

});

document
.getElementById("studentForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Registration received. Connect EmailJS or Google Sheets backend."
);

});