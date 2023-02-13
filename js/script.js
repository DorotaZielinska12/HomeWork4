{
    const welcome = () => {
        console.log("Hello!")
    }

    const toggleBackground = () => {
        const body = document.documentElement;
        const nextColoreName = document.querySelector(".js-button__span--backroundColor");

        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundColor");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}