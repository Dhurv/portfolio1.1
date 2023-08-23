console.log("JS is running");
const HeyThere = document.getElementById("welcome-text");
const tourGuide = document.getElementById("tourGuide");
const tourGuide1 = document.getElementById("tourGuide1");

HeyThere.addEventListener("click", function () {
  tourGuide.classList.remove("hidden");
  tourGuide1.classList.remove("hidden");
  setTimeout(() => {
    tourGuide.classList.add("hidden");
    tourGuide1.classList.add("hidden");
  }, 5000);
});
