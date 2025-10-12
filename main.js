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


// Intro Video 1 RNG
document.addEventListener("DOMContentLoaded", function () {
	
  // Pick a random start time
  const randomStart = Math.floor(Math.random() * 0 );
  
  // Build the YouTube embed URL
  const videoId = "ptVNdIAeoeg";
  const url = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&start=${randomStart}`;

  // Assign it to the iframe
  document.getElementById("intro-video-1").src = url;
});


// Intro Video 2 RNG
document.addEventListener("DOMContentLoaded", function () {
	
  // Pick a random start time
  const randomStart = Math.floor(Math.random() * 365 );
  
  // Build the YouTube embed URL
  const videoId = "QMkZKbIJgXQ";
  const url = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&start=${randomStart}`;

  // Assign it to the iframe
  document.getElementById("intro-video-2").src = url;
});


// Intro Video 3 RNG
document.addEventListener("DOMContentLoaded", function () {
	
  // Pick a random start time
  const randomStart = Math.floor(Math.random() * 70 );
  
  // Build the YouTube embed URL
  const videoId = "9hO3Wc1i1HI";
  const url = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&start=${randomStart}`;

  // Assign it to the iframe
  document.getElementById("intro-video-3").src = url;
});


// Intro Video 4 RNG
document.addEventListener("DOMContentLoaded", function () {
	
  // Pick a random start time
  const randomStart = Math.floor(Math.random() * 300 );
  
  // Build the YouTube embed URL
  const videoId = "uFlBHVwQlvI";
  const url = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&start=${randomStart}`;

  // Assign it to the iframe
  document.getElementById("intro-video-4").src = url;
});


// Intro Video 5 RNG
document.addEventListener("DOMContentLoaded", function () {
	
  // Pick a random start time
  const randomStart = Math.floor(Math.random() * 45 );
  
  // Build the YouTube embed URL
  const videoId = "bgH-jlmGHW8";
  const url = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&start=${randomStart}`;

  // Assign it to the iframe
  document.getElementById("intro-video-5").src = url;
});

  // Video Carousel
const track = document.querySelector('.carousel-track');
  const nextButton = document.querySelector('.carousel-btn.right');
  const prevButton = document.querySelector('.carousel-btn.left');
  const iframes = document.querySelectorAll('.intro-videos');
  
  let players = [];
  let currentIndex = 0; // declare ONCE ✅
  
  
  
  
  function updateCarousel() {
	const slideWidth = iframes[0].getBoundingClientRect().width;
	track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  
	// Pause all videos
	players.forEach(player => {
	  if (player && player.pauseVideo) {
		player.pauseVideo();
	  }
	});
  
	// Play current video
	const currentPlayer = players[currentIndex];
	if (currentPlayer && currentPlayer.playVideo) {
	  currentPlayer.playVideo();
	}
  }
  
  // Next button
  nextButton.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % iframes.length;
	updateCarousel();
  });
  
  // Prev button
  prevButton.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + iframes.length) % iframes.length;
	updateCarousel();
  });
// End of the Carousel



//	for the primary "intro" text animator
document.addEventListener("DOMContentLoaded", () => {
  const animatedIntroTextPrimary = document.getElementById("intro-primary");
  const animatedIntroTextPrimary2 = document.getElementById("intro-primary2");

  function checkScroll() {
	if (window.scrollY > 650) {
	  animatedIntroTextPrimary.classList.add("animate");
	  animatedIntroTextPrimary2.classList.add("animate");
	  window.removeEventListener("scroll", checkScroll);
	}
  }

  window.addEventListener("scroll", checkScroll);
});
//	for the secondary "intro" text animator 
document.addEventListener("DOMContentLoaded", () => {
  const animatedIntroTextSecondary = document.getElementById("intro-secondary");
  const animatedIntroTextSecondary2 = document.getElementById("intro-secondary2");

  function checkScroll() {
	if (window.scrollY > 1000) {
	  animatedIntroTextSecondary.classList.add("animate");
	  animatedIntroTextSecondary2.classList.add("animate");
	  window.removeEventListener("scroll", checkScroll);
	}
  }

  window.addEventListener("scroll", checkScroll);
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