var addBookmarkButton = document.querySelector(".add-new-bookmark-button");
var closeBookmarkButton = document.querySelector(".close-bookmark-button");

var bookmarkPopup = document.querySelector(".bookmark-popup")

addBookmarkButton.addEventListener("click", showBookmarkPopup);
closeBookmarkButton.addEventListener("click", closeBookmarkPopup);

function showBookmarkPopup() {
  if (bookmarkPopup.classList.contains("d-none")) {
    bookmarkPopup.classList.remove("d-none");
  } else {
    bookmarkPopup.classList.add("d-none");
  }
}

function closeBookmarkPopup(event) {
  event.preventDefault();
  bookmarkPopup.classList.add("d-none");
}
