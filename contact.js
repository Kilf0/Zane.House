	document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("scroll-navbar");

  window.addEventListener("scroll", () => {
	const y = window.scrollY || document.documentElement.scrollTop;

	if (y > 0) {
	  // scrolled down at all → fade in
	  navbar.classList.add("show");
	} else {
	  // at the very top → fade out
	  navbar.classList.remove("show");
	}
  });
});