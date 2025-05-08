document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  // SIGN UP
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("signupUser").value.trim();
      const pass = document.getElementById("signupPass").value;

      // Check if the user already exists
      const storedUser = localStorage.getItem("user");
      if (storedUser && storedUser === user) {
        showMessage("signupMsg", "❌ Username already exists. Please choose another.");
        return;
      }

      if (user === "" || pass === "") {
        showMessage("signupMsg", "❌ Please fill in both fields.");
        return;
      }

      // Store user info in localStorage
      localStorage.setItem("user", user);
      localStorage.setItem("pass", pass);

      // Success message and redirect
      showMessage("signupMsg", "✅ Account created successfully!", "green");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    });
  }

  // LOGIN
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("loginUser").value.trim();
      const pass = document.getElementById("loginPass").value;

      const storedUser = localStorage.getItem("user");
      const storedPass = localStorage.getItem("pass");

      // Check if the user exists and credentials match
      if (!storedUser || !storedPass) {
        showMessage("loginMsg", "❌ No account found. Please sign up.");
        return;
      }

      if (user === storedUser && pass === storedPass) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
      } else {
        showMessage("loginMsg", "❌ Invalid username or password.");
      }
    });
  }

  // Function to display messages
  function showMessage(id, msg, color = "red") {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = msg;
      el.style.color = color;
    }
  }
});
