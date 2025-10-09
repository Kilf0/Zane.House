	document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("scroll-navbar");

  window.addEventListener("scroll", () => {
	const y = window.scrollY || document.documentElement.scrollTop;

	if (y > 0) {
	  // scrolled down at all → fade in
	  navbar.classList.add("show-delayed");
	} else {
	  // at the very top → fade out
	  navbar.classList.remove("show-delayed");
	}
  });
});


//	projects page Header Movement 
document.addEventListener("DOMContentLoaded", () => {
  const projectHeroMovement = document.getElementById("project-hero-id");

  function checkScroll() {
	if (window.scrollY > 0) {
	  projectHeroMovement.classList.add("move");
	  window.removeEventListener("scroll", checkScroll);
	}
  }
	  console.log(projectHeroMovement);
  window.addEventListener("scroll", checkScroll);
});




document.addEventListener("DOMContentLoaded", () => {
const projectHeroRemoval = document.getElementById("project-hero-id");

	if (!sessionStorage.getItem("hasVisited")) {
    	sessionStorage.setItem("hasVisited", "true");
		} else {
			projectHeroRemoval.style.display = "none"
		}
});

const status = document.getElementById("status");
const projectPageDropDownButton = document.getElementById("project-dropdown-button");
const projectPageDropDown = document.getElementById("project-dropdown");
const projectPageDropDownContent = document.getElementById("project-dropdown-content");

projectPageDropDownButton.addEventListener("click", () => {
	
	projectPageDropDown.classList.add("open");
	projectPageDropDownButton.classList.add("open");
	projectPageDropDownContent.classList.add("open");
	sessionStorage.setItem("clicked", "true");
	status.textContent = "Was Clicked";
	
 
});
		if (sessionStorage.getItem("clicked")) {
			projectPageDropDown.classList.add("open");
			projectPageDropDownButton.classList.add("open");
			projectPageDropDownContent.classList.add("open");
		  }

 const track = document.querySelector(".carousel-track-projects");
 const slides = Array.from(track.children);
 const nextBtn = document.querySelector(".carousel-btn-projects.right");
 const prevBtn = document.querySelector(".carousel-btn-projects.left");
 
 let currentIndex = 1;
 
 // ✅ Clone first and last slides for smooth looping
 const firstClone = slides[0].cloneNode(true);
 const lastClone = slides[slides.length - 1].cloneNode(true);
 
 firstClone.id = "first-clone";
 lastClone.id = "last-clone";
 
 track.appendChild(firstClone);
 track.insertBefore(lastClone, slides[0]);
 
 const allSlides = document.querySelectorAll(".carousel-track-projects > *");
 const slideWidth = slides[0].getBoundingClientRect().width;
 
 // ✅ Position track initially
 track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
 
 // ✅ Function to move slides
 function moveToSlide() {
	 track.style.transition = "transform 0.5s ease";
	 track.style.transform = `translateX(-${slideWidth * currentIndex }px)`;
 }
 
 // ✅ When transition ends, jump seamlessly
 track.addEventListener("transitionend", () => {
	 const allSlides = document.querySelectorAll(".carousel-track-projects > *");
	 if (allSlides[currentIndex].id === "first-clone") {
		 track.style.transition = "none";
		 currentIndex = 1;
		 track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
	 }
	 if (allSlides[currentIndex].id === "last-clone") {
		 track.style.transition = "none";
		 currentIndex = allSlides.length - 2;
		 track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
	 }
 });
 
 // ✅ Buttons
 nextBtn.addEventListener("click", () => {
	 if (currentIndex >= allSlides.length - 1) return;
	 currentIndex++;
	 moveToSlide();
 });
 
 prevBtn.addEventListener("click", () => {
	 if (currentIndex <= 0) return;
	 currentIndex--;
	 moveToSlide();
 });
 
 
document.addEventListener("DOMContentLoaded", () => {
	const upcomingProjectsHeader = document.getElementById("upcoming-text-animation")
	
	  function checkScroll() {
		if (window.scrollY > 1350) {
		  upcomingProjectsHeader.classList.add("move");
		  window.removeEventListener("scroll", checkScroll);
		}
	  }
	  window.addEventListener("scroll", checkScroll);
	});