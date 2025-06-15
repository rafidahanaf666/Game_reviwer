document.addEventListener("DOMContentLoaded", () => {
  console.log("JS loaded");

  const form = document.getElementById("reviewForm");
  const successMessage = document.getElementById("successMessage");

  // Safely get reviews from localStorage or initialize empty array
  let reviews = JSON.parse(localStorage.getItem("gameReviews")) || [];

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const title = document.getElementById("title").value.trim();
      const genre = document.getElementById("genre").value.trim();
      const rating = parseInt(document.getElementById("rating").value.trim());
      const reviewText = document.getElementById("reviewText").value.trim();

      // Validation check
      if (!title || !genre || isNaN(rating) || !reviewText) {
        alert("Please fill in all fields correctly.");
        return;
      }

      const newReview = { title, genre, rating, reviewText };

      // Add and save
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
