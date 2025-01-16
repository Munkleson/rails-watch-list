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
