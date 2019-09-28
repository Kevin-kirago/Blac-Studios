// Get year
const year = new Date().getFullYear();
document.querySelector(".year").textContent = year;

// Aos lib initialization
AOS.init();

// Modal popup
document.querySelectorAll(".gallery-container").forEach(el => {
	el.addEventListener("click", showPopup);
});
const popup = document.querySelector(".popup");
popup.addEventListener("click", hidePopup);

function showPopup() {
	popup.classList.add("show-popup");
}
function hidePopup() {
	popup.classList.remove("show-popup");
}
