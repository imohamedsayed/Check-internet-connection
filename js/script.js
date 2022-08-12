let reloadBtn = document.querySelector("button");
let onlineMessage = document.querySelector(".online");
let offlineMessage = document.querySelector(".offline");

reloadBtn.onclick = () => {
  location.reload();
};

onload = () => {
  if (window.navigator.onLine) {
    online();
  } else {
    offline();
  }
};

window.addEventListener("online", () => {
  online();
});
window.addEventListener("offline", () => {
  offline();
});
function online() {
  onlineMessage.classList.remove("hide");
  offlineMessage.classList.add("hide");
}
function offline() {
  offlineMessage.classList.remove("hide");
  onlineMessage.classList.add("hide");
}







































































