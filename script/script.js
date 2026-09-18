const password = document.querySelector("password");
const checkPassword = document.querySelector("passwordCheck");

checkPassword.addEventListener( "input", () => {
    if (checkPassword.value !== "" && checkPassword.value !== password.value) {
    checkPassword.classList.add("invalid");
  } else {
    checkPassword.classList.remove("invalid");
  }
});

