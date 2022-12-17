const hamburgerEl = document.querySelector("#hamburger");
const sidebarEl = document.querySelector("#sidebar");

document.onclick = function(e){
    console.log(e.target.id)
    if(e.target.id !== 'sidebar' && e.target.id !== 'hamburger'  ){
            sidebarEl.classList.remove("open")
            hamburgerEl.classList.remove("open")
    
    }
}

hamburgerEl.onclick =function(){

    sidebarEl.classList.toggle("open")
  hamburgerEl.classList.toggle("open")
 
}

const eventTableEl = document.querySelector("#eventTable");

window.addEventListener("resize", ()=>{
  console.log(screen.width)
  if(screen.width <= 480){
    eventTableEl.classList.remove("notvissible")
  }else{
    eventTableEl.classList.add("notvissible")
  }
})