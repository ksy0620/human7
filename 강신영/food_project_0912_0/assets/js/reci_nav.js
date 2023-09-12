nav_pop();
nav_scoll();

function nav_scoll() {
    window.addEventListener("scroll", function () {
        let nav = document.querySelector("nav");
        if (window.scrollY > 400) {
            nav.style.display = "inline-block";
        } else
            nav.style.display = "none";
    });
    console.log(window.scrollY);
}

function nav_pop() {
    document.querySelector(".btn_nav").addEventListener("click", function () {
        let a = document.querySelector(".nav_contents");
        let b = document.querySelector(".btn_nav");
        if (a.style.display == "none") {
            a.style.display = "inline-block";
            b.textContent = "▶";
        } else {
            a.style.display = "none";
            b.textContent = "◀";
        }
    });
}