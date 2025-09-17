setTimeout(function(){ 
    const img = document.getElementById('button');
    img.style.display ='block' ;

}, 3350);

   window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
});

 if (window.innerWidth <= 430) {
    window.location.href = "second.html";
  }
