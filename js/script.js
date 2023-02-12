{
const button = document.querySelector("button");
const body = document.querySelector("body");
const themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});

console.log("Hello World!");
}