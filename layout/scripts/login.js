const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container1");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

var modal = document.getElementById("id01");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};