document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("signupUser").value.trim();
      const pass = document.getElementById("signupPass").value;

      const storedUser = localStorage.getItem("user");
      if (storedUser === user) {
        showMessage("signupMsg", "❌ Username already exists.");
        return;
      }

      localStorage.setItem("user", user);
      localStorage.setItem("pass", pass);
      showMessage("signupMsg", "✅ Account created! Redirecting...", "green");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("loginUser").value.trim();
      const pass = document.getElementById("loginPass").value;

      const storedUser = localStorage.getItem("user");
      const storedPass = localStorage.getItem("pass");

      if (user === storedUser && pass === storedPass) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
      } else {
        showMessage("loginMsg", "❌ Invalid username or password.");
      }
    });
  }

  function showMessage(id, msg, color = "red") {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = msg;
      el.style.color = color;
    }
  }
});
