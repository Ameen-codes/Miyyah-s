function openMenu() {
    document.getElementById("menu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("menu").style.width = "0";
}

function infodrop() {
  document.getElementById("info").style.width = "250px";
}

function infoclose() {
  document.getElementById("info").style.width = "0";
}



// LOADING EFFECT
window.addEventListener("load",() =>{

        
    document.querySelector(".loader").classList.add("loader--hidden");

    document.querySelector(".loader").addEventListener("transitioned",() =>{
    document.body.removeChild(document.querySelector(".loader"));    
    })
});



// LISTINGS
  
var request_form = document.getElementById("request_form")

request_form.addEventListener("submit", function(event) {
  
  var New_Request = document.getElementById("New_Request");
  
  if (New_Request.value.trim() === "") {
      
      event.preventDefault();
      alert("Please enter a message before submitting.");
  } else {
   
    setTimeout(function() {
        New_Request.value = "";  
    }, 500);
}
});


// ACCORDION

function toggleAccordion(variable) {
  // Get the next sibling, which is the content div
  var content = variable.nextElementSibling;

  // Toggle the display property of the content
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}