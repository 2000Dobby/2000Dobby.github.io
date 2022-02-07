window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#top-back-button").show();
    } else {
        $("#top-back-button").hide();
    }
};

$("#top-back-button").on("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});