function startIntro() {
	const introContainer = document.getElementById("intro-container");
	const introImage = introContainer.querySelector("img");

	// Hide the introContainer after 3.9 seconds
	setTimeout(function() {
		introContainer.style.display = "none";
		document.getElementById("homepage-container").style.display = "block";
	}, 3900)

	// Start the GIF from the beginning on page load
	introImage.src = introImage.src;
}

function scrollTrigger() {
	let els = document.querySelectorAll(".right");
	els = Array.from(els);
	els.forEach(el => {
	  addObserver(el);
	});
  }
  
  function addObserver(el) {
	let observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('activeright');
		  observer.unobserve(entry.target);
		}
	  });
	});
	observer.observe(el);
  }
  
  // Call scrollTrigger() initially
  scrollTrigger();


  function scrollTrigger2() {
	let els2 = document.querySelectorAll(".left");
	els2 = Array.from(els2);
	els2.forEach(el => {
	  addObserver2(el);
	});
  }
  
  function addObserver2(el) {
	let observer2 = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('activeleft');
		  observer2.unobserve(entry.target);
		}
	  });
	});
	observer2.observe(el);
  }
  
  // Call scrollTrigger() initially
  scrollTrigger2();
  

