// for mobile navbar
 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
 } 

//  toggle
$(document).ready(function () {
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this).prev().find("i").removeClass("fa-plus").addClass("fa-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this).prev().find("i").removeClass("fa-minus").addClass("fa-plus");
    });
});