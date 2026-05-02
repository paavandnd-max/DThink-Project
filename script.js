console.log("Script running");
alert("JS loaded");

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("dashboardBtn").addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });

  document.getElementById("summaryBtn").addEventListener("click", () => {
    const box = document.getElementById("summary");
    box.innerHTML = "⏳ Generating summary...";

    setTimeout(() => {
      box.innerHTML = `
        <div style="padding:10px; border-radius:10px; background:rgba(255,255,255,0.1);">
          🤖 <strong>AI Summary</strong><br>
          The solar system consists of planets orbiting the sun.
        </div>
      `;
    }, 1000);
  });

  document.getElementById("arBtn").addEventListener("click", () => {
    window.location.href = "ar.html";
  });

  document.getElementById("quizBtn").addEventListener("click", () => {
    document.getElementById("quiz").innerHTML = `
      <p>Which is the largest planet?</p>
      <button onclick="checkAnswer('Jupiter')">Jupiter</button>
      <button onclick="checkAnswer('Mars')">Mars</button>
    `;
  });

});

window.checkAnswer = function(ans) {
  alert(ans === "Jupiter" ? "✅ Correct!" : "❌ Try again");
};