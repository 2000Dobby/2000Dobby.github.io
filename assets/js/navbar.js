$("#nav-backdrop").on("click", function() {
    hideNavbar();
});

$("#nav-close").on("click", function() {
    hideNavbar();
});

$("#nav-toggler").on("click", function() {
    showNavbar();
});

function hideNavbar() {
    $("#nav-offcanvas").removeClass("show");
    $("#nav-backdrop").removeClass("show");
}

function showNavbar() {
    $("#nav-offcanvas").addClass("show");
    $("#nav-backdrop").addClass("show");
}
