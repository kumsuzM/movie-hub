const form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userInput = document.getElementById("search-bar").value;
    if (!userInput) return;
    localStorage.setItem("input", userInput);
    window.location.href = "http://127.0.0.1:5500/search.html";
  });
}