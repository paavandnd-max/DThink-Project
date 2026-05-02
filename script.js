alert("JS loaded");

window.goTo = function(page) {
  console.log("Navigating to:", page);
  window.location.href = page;
};

window.getSummary = function() {
  const box = document.getElementById("summary");

  box.innerHTML = "⏳ Generating summary...";

  setTimeout(() => {
    box.innerHTML = `
      <div style="padding:10px; border-radius:10px; background:rgba(255,255,255,0.1);">
        🤖 <strong>AI Summary</strong><br>
        The solar system consists of planets orbiting the sun due to gravity.
      </div>
    `;
  }, 1000);
};

window.startQuiz = function() {
  document.getElementById("quiz").innerHTML = `
    <p>Which is the largest planet?</p>
    <button onclick="checkAnswer('Jupiter')">Jupiter</button>
    <button onclick="checkAnswer('Mars')">Mars</button>
  `;
};

window.checkAnswer = function(ans) {
  alert(ans === "Jupiter" ? "✅ Correct!" : "❌ Try again");
};