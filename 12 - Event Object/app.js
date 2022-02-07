document.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
})

list.addEventListener("mouseover" , (event) => {
    event.target.textContent = event.target.textContent.toUpperCase();
});

list.addEventListener("mouseout", (event) => {
    event.target.textContent = event.target.textContent.toLowerCase();
});