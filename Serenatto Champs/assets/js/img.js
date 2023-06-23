
function troca() {
  let smile = document.getElementById("smile")
  smile.src = "./assets/imgs/smile-2.png"

  setTimeout(() => {
    smile.src = "./assets/imgs/smile.png";
  }, 2000);
  
}