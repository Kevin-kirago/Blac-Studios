// Get year
const year = new Date().getFullYear();
document.querySelector(".year").textContent = year;

// Map
var map;
function initMap() {
	map = new google.maps.Map(document.querySelector(".map"), {
		center: { lat: -1.2839974, lng: 36.8044067 },
		zoom: 8
	});
}
