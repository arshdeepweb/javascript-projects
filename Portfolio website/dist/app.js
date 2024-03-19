let hamBurger = document.getElementById("ham-burger")
let navLink = document.getElementById("nav-link")



let navShow = "show";

hamBurger.addEventListener("click", ()=>{

  if(navShow === "show"){
    
    navLink.style.display = "flex";
    navShow = "hide";
  } else if(navShow === "hide"){
    navLink.style.display = "none";
    navShow = "show";
  }

})