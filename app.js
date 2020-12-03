document.getElementById("menu-home").addEventListener("click", function () {
    document.getElementById("home").style.display = "block";
    document.getElementById("project").style.display = "none";
    document.getElementById("experience").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("show").style.display = "none";

    document.getElementById("menu-home").style.borderBottom = "2px solid orange";
    document.getElementById("menu-project").style.borderBottom = "none";
    document.getElementById("menu-experience").style.borderBottom = "none";
    document.getElementById("menu-about").style.borderBottom = "none";
})
document.getElementById("menu-project").addEventListener("click", function () {
    document.getElementById("project").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("experience").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("show").style.display = "none";

    document.getElementById("menu-project").style.borderBottom = "2px solid orange";
    document.getElementById("menu-home").style.borderBottom = "none";
    document.getElementById("menu-experience").style.borderBottom = "none";
    document.getElementById("menu-about").style.borderBottom = "none";
})
document.getElementById("menu-experience").addEventListener("click", function () {
    document.getElementById("experience").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("show").style.display = "none";

    document.getElementById("menu-experience").style.borderBottom = "2px solid orange";
    document.getElementById("menu-home").style.borderBottom = "none";
    document.getElementById("menu-project").style.borderBottom = "none";
    document.getElementById("menu-about").style.borderBottom = "none";
})
document.getElementById("menu-about").addEventListener("click", function () {
    document.getElementById("about").style.display = "block";
    document.getElementById("experience").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("show").style.display = "none";

    document.getElementById("menu-about").style.borderBottom = "2px solid orange";
    document.getElementById("menu-home").style.borderBottom = "none";
    document.getElementById("menu-project").style.borderBottom = "none";
    document.getElementById("menu-experience").style.borderBottom = "none";
})