// ============================================================================
// /register
// ============================================================================
const btn = document.querySelector(".show-password-button");
const passwordInputs = document.querySelectorAll('input[type="password"]');

if (btn && passwordInputs) {
  btn.addEventListener("click", () => {
    passwordInputs.forEach((passwordInput) => {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    });
  });
}
