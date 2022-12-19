
  

//copy email address: 
const copy = document.getElementById( "copy" );
copy.addEventListener( "click", () => {
  navigator.clipboard.writeText( "trupti16ghadekar@gmail.com" );
  copy.innerHTML = "copied";
  setTimeout( () => {
    copy.innerHTML = null;
  }, 1000 );
} );

document.getElementById("fa").style.display="none";
document.getElementById("fa1").style.display="none";

// document.querySelector(".resume").addEventListener("")

function newTab(){
  window.open("https://drive.google.com/file/d/1nNdOErx-1roOHqaRY6oxM4J0LCqmOzUp/view?usp=sharing" , "_blank");
}

    

