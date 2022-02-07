const input = document.getElementById("input");
const button = document.getElementById("submit");
const theList = document.getElementById("list");
const hideshow = document.getElementById("showhide-btn");

button.addEventListener("click", () => {
    if (input.value != "") {
        let listItem = document.createElement("li");
        listItem.textContent = input.value;
        let list = document.getElementsByTagName("ul")[0];
        list.appendChild(listItem);
        input.value = "";
    }
});

hideshow.addEventListener("click", () => {
    if (theList.style.display == "block") {
        theList.style.display = "none";
        hideshow.textContent = "show";
    } else {
        theList.style.display = "block";
        hideshow.textContent = "hide";
    }
});
