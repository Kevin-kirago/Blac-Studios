// Aos lib initialization
AOS.init();

// Get year
const year = new Date().getFullYear();
document.querySelector(".year").textContent = year;

if (document.querySelector(".navigation-toggler")) {
	// fire up the navigation
	document.querySelector(".header-menu-toggle, .header-menu-toggle *").addEventListener("click", function() {
		document.querySelector(".header-nav").classList.toggle("menu-is-open");
	});

	// Close the navigation
	document.querySelector(".header-nav__close").children[1].addEventListener("click", function() {
		document.querySelector(".header-nav").classList.toggle("menu-is-open");
	});
}
