// this checks for right answers to add errors to individual questions (see view for error handling)
function checkQuiz(values) {
  const quiz = createQuiz();

  for (const [q, qData] of Object.entries(quiz)) {
    if (values[q].trim().toLowerCase() !== qData.a.toLowerCase()) {
      qData.error = true;
    }
  }

  return quiz;
}

// make quiz copies as needed
function createQuiz() {
  return {
    q1: {
      q: `"I hate Illinois ___________."`,
      a: "Nazis",
      hint: `"We're on a mission from God."`,
      error: false,
    },
    q2: {
      q: `"Heeeeeeere's ___________!"`,
      a: "Johnny",
      hint: `"Perhaps... they need a good... talking to... if you don't mind my saying so. Perhaps... a bit more."`,
      error: false,
    },
    q3: {
      q: `"It's a ___________!"`,
      a: "trap",
      hint: `"I've got a bad feeling about this..."`,
      error: false,
    },
    q4: {
      q: `"African or ___________?..."`,
      a: "European",
      hint: `"What's your favorite color?"`,
      error: false,
    },
    q5: {
      q: `"You've got ___________ on you."`,
      a: "red",
      hint: `"Thanks, Babe."`,
      error: false,
    },
    q6: {
      q: `"Say '___________' again! I dare you!"`,
      a: "what",
      hint: `"Ah man, I shot Marvin in the face."`,
      error: false,
    },
    q7: {
      q: `"He chose... ___________."`,
      a: "poorly",
      hint: `"It belongs in a museum!"`,
      error: false,
    },
    q8: {
      q: `"How ___________, is it not?!"`,
      a: "beautiful",
      hint: `"Vi Veri Veniversum Vivus Vici."`,
      error: false,
    },
    q9: {
      q: `"Boil 'em, mash 'em, stick 'em in a ___________."`,
      a: "stew",
      hint: `"Looks like meat's back on the menu, boys!"`,
      error: false,
    },
    q10: {
      q: `"I gotcha you for three minutes. Three minutes of ___________!"`,
      a: "playtime",
      hint: `"I missed the part where that's my problem"`,
      error: false,
    },
  };
}

module.exports = {
  createQuiz,
  checkQuiz,
};
