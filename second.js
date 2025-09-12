   window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
});

window.addEventListener("load", () => {
  // Page load hone ke 3s baad VHS video load hoga
  setTimeout(() => {
    const effect = document.getElementById("effect");
    const source = document.createElement("source");
    source.src = "vi/lowVhs.mp4";
    source.type = "video/mp4";
    effect.appendChild(source);
    effect.load();
  }, 3000);
});
