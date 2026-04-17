const path = window.location.pathname;

// ============================================================================
// /register
// ============================================================================
if (path === "/register") {
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
}

// ============================================================================
// /member-register
// ============================================================================
if (path === "/member-register") {
  const hintSections = document.querySelectorAll(".hint-section");

  hintSections.forEach((hintSection) => {
    const showHintButton = hintSection.querySelector(".show-hint-button");
    const hint = hintSection.querySelector(".hint");

    showHintButton.addEventListener("click", () => {
      hint.style.display = "block";
      showHintButton.style.display = "none";
    });
  });

  //reveal hint
}
