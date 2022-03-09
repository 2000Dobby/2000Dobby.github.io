$('#nav-backdrop').on('click', hideNavbar);
$('#nav-close').on('click', hideNavbar);
$('#nav-toggler').on('click', showNavbar);
$('.navbar-link').on('click', hideNavbar);

function hideNavbar() {
    $('#nav-offcanvas').removeClass('show');
    $('#nav-backdrop').removeClass('show');
}

function showNavbar() {
    $('#nav-offcanvas').addClass('show');
    $('#nav-backdrop').addClass('show');
}
