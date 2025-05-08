document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("signupUser").value;
      const pass = document.getElementById("signupPass").value;
      localStorage.setItem("user", user);
      localStorage.setItem("pass", pass);
      alert("Signup successful!");
      window.location.href = "index.html";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("loginUser").value;
      const pass = document.getElementById("loginPass").value;
      if (user === localStorage.getItem("user") && pass === localStorage.getItem("pass")) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid credentials!");
      }
    });
  }
});

