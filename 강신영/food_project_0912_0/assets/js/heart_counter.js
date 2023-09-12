heart_counter();

function heart_counter() {
    document.querySelector(".heart_text").addEventListener("click", function () {
        if (document.querySelector(".heart_text").innerText == "♥") {
            document.querySelector(".heart_text").innerText = "♡";
        } else
            document.querySelector(".heart_text").innerText = "♥";
    });
}