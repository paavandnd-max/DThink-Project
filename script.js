function goTo(page) {
  window.location.href = page;
}

function getSummary() {
  document.getElementById("summary").innerHTML =
    "✨ AI Summary: The solar system consists of planets orbiting the sun due to gravity.";
}

function startQuiz() {
  document.getElementById("quiz").innerHTML = `
    <p>Which is largest planet?</p>
    <button onclick="check('Jupiter')">Jupiter</button>
    <button onclick="check('Mars')">Mars</button>
  `;
}

function check(ans) {
  alert(ans === "Jupiter" ? "✅ Correct" : "❌ Try again");
}