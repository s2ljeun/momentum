const images = [
  "cyberpunk.jpg",
  "forest.jpg",
  "houses.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImg");

document.body.prepend(bgImage);