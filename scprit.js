document.addEventListener("DOMContentLoaded", () => {
  console.log("JS loaded");
});
// Load existing reviews from localStorage
const reviews = JSON.parse(localStorage.getItem("gameReviews")) || [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reviewForm");
  const successMessage = document.getElementById("successMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const title = document.getElementById("title").value.trim();
      const genre = document.getElementById("genre").value.trim();
      const rating = parseInt(document.getElementById("rating").value.trim());
      const reviewText = document.getElementById("reviewText").value.trim();

      if (!title || !genre || !rating || !reviewText) {
        alert("Please fill in all fields.");
        return;
      }

      const newReview = { title, genre, rating, reviewText };
      reviews.push(newReview);
      localStorage.setItem("gameReviews", JSON.stringify(reviews));

      form.reset();
      successMessage.style.display = "block";

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);
    });
  }
});