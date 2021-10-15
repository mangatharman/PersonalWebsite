var button = document.getElementById("topButton");

window.onscroll = function () {scrollFunc()};

function scrollFunc() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function topFunc () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}