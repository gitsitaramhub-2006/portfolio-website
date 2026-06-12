document.addEventListener("DOMContentLoaded", () => {
	console.log("Portfolio Website Loaded");

	// Set current year in footer
	const yearEl = document.getElementById('current-year');
	if (yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}
});
