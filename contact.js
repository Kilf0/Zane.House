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




document.addEventListener("DOMContentLoaded", () => {
	
const textBtn = document.getElementById("text-button");
const textPhone = document.getElementById("text-phone");
const callBtn = document.getElementById("call-button");
const callPhone = document.getElementById("call-phone");


	textBtn.addEventListener("click", () => {
	
	textPhone.classList.add("show")
	textBtn.classList.add("open")
	sessionStorage.setItem("textClicked", "true");
	
});
		if (sessionStorage.getItem("textClicked")) {
	textBtn.classList.add("open");
	textPhone.classList.add("show");
  }


	callBtn.addEventListener("click", () => {
 		
	 callPhone.classList.add("show")
	 callBtn.classList.add("open")
	 sessionStorage.setItem("callClicked", "true");
	 
 });
		 if (sessionStorage.getItem("callClicked")) {
	 callBtn.classList.add("open");
	 callPhone.classList.add("show");
   }
});
