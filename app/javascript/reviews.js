var reviewButton = document.querySelector(".review-button");
var reviewForm = document.querySelector(".add-review-div");
reviewButton.addEventListener("click", displayReviewForm);

function displayReviewForm() {
  if (reviewForm.classList.contains("d-none")) {
    reviewForm.classList.remove("d-none");
  } else {
    reviewForm.classList.add("d-none");
  }
}

var showReviewsButton = document.querySelector(".show-reviews-button");
var reviewsDiv = document.querySelector(".reviews-div")

showReviewsButton.addEventListener("click", displayReviews);
function displayReviews() {
  if (reviewsDiv.classList.contains("d-none")) {
    reviewsDiv.classList.remove("d-none");
  } else {
    reviewsDiv.classList.add("d-none");
  }
}
