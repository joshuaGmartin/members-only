const path = window.location.pathname;

// ============================================================================
// /register/guest or /login
// ============================================================================
if (path === "/register/guest" || path === "/login") {
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
// /register/member
// ============================================================================
if (path === "/register/member") {
  // ============ show hints ============
  const hintSections = document.querySelectorAll(".hint-section");

  hintSections.forEach((hintSection) => {
    const showHintButton = hintSection.querySelector(".show-hint-button");
    const hint = hintSection.querySelector(".hint");

    showHintButton.addEventListener("click", () => {
      hint.style.display = "block";
      showHintButton.style.display = "none";
    });
  });

  // ============ focus on first error ============
  document.addEventListener("DOMContentLoaded", () => {
    // get first
    const firstErrorQuote = document.querySelectorAll(".quote-error")[0];
    if (firstErrorQuote) {
      const firstErrorQuestion = firstErrorQuote.parentElement;
      const firstErrorInput = firstErrorQuestion.querySelector("input");

      firstErrorInput.focus();
      firstErrorInput.select();
    }
  });

  // ============ bypass quiz ============
  const bypassButton = document.getElementById("demo-bypass");

  bypassButton.addEventListener("click", (e) => {
    // no submit
    e.preventDefault();

    // reveal answers
    const quiz = window.quizData;
    const allInputs = document.querySelectorAll("input");

    allInputs.forEach((input) => {
      input.value = quiz[input.id].a;
    });

    // reveal hints
    const allShowHintBtns = document.querySelectorAll(".show-hint-button");
    allShowHintBtns.forEach((showHintBtn) => {
      showHintBtn.click();
    });
  });
}
