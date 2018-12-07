console.log("js loaded");

loadHeader();
loadFooter();
insertFavicon();

var allImages = document.querySelectorAll("img");
//clasic for loop
for (var i = 0; i < allImages.length; i++) {
  console.log(allImages[i]);
}

var allCatImages = document.querySelectorAll("#cat-container img");
//ES6 syntax
allCatImages.forEach(catImage => {
  console.log(catImage)
});

var allDogImages = document.querySelectorAll("#dog-container img");
allDogImages.forEach(dogImage => {
 console.log(dogImage)
});