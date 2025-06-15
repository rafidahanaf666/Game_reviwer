document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reviewForm");
  const toast = document.getElementById("toast");

  if (!form || !toast) {
    console.error("Form or toast element not found.");
    return;
  }

  let reviews = JSON.parse(localStorage.getItem("gameReviews")) || [];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const genre = document.getElementById("genre").value.trim();
    const rating = parseInt(document.getElementById("rating").value.trim());
    const reviewText = document.getElementById("reviewText").value.trim();

    if (!title || !genre || isNaN(rating) || !reviewText) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const newReview = { title, genre, rating, reviewText };
    reviews.push(newReview);
    localStorage.setItem("gameReviews", JSON.stringify(reviews));

    form.reset();
    showToast("✅ Review added successfully!");
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
});
