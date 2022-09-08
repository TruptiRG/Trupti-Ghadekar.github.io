
  

//copy email address: 
const copy = document.getElementById( "copy" );
copy.addEventListener( "click", () => {
  navigator.clipboard.writeText( "trupti16ghadekar@gmail.com" );
  copy.innerHTML = "copied";
  setTimeout( () => {
    copy.innerHTML = null;
  }, 1000 );
} );


