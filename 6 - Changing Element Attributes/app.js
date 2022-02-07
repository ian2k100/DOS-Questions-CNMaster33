const input = document.getElementById("input");
const button = document.getElementById("submit");
const image = document.getElementById("image");
console.log(image);

button.addEventListener("click", ()=>{
    image.src = input.value;
})