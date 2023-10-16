window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav-bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else{
    navbar.classList.remove("sticky");
  }
}

let topBtn = document.getElementById("top")

window.onscroll =()=>{
  if(document.body.scrollTop > 500|| document.documentElement.scrollTop > 500){
    topBtn.style.display="block"
  }else{
    topBtn.style.display="none"
  }
}

topBtn.addEventListener("click",()=>{
  document.body.scrollTop=0
 document.documentElement.scrollTop=0
  console.log("click")
})