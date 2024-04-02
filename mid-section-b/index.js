const imageContainer = document.getElementById("image-container");
const button1 = document.getElementById("prev");
const button2 = document.getElementById("next");
button1.onclick = clickImage;
function clickImage(){
    const container = document.createElement("div");
    container.classList.add("image-container");
    const image = document.createElement("p");
    image.src = "one.svg";
    image.src = "two.svg";
    image.src = "two.svg";
    image.src = "two.svg";
    image.classList.add("image");
    imageContainer.appendChild(image);
    imageContainer.appendChild(button1);
    imageContainer.appendChild(button2);
}