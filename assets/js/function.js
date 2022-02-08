const sitesURL = 'http://localhost/personal-homepage/sites/';
const fileType = 'html';
const timeoutAfter = 10000;

var pageContainer = undefined;
var popup = undefined;
var popupBackground = undefined;
var popupMessage = undefined;

$(function() {
    pageContainer = $('#page-container');
    popup = $('#popup');
    popupBackground = $('#popup-background');
    popupMessage = $('#popup-message');

    let loader = $('#autoload-page');
    if (loader.length) {
        let site = loader.data('href');
        loadPageContent(site);
    }
});

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('#top-back-button').show();
    } else {
        $('#top-back-button').hide();
    }
};

$('#top-back-button').on('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

$('.link-to').on('click', function () {
    $('.navbar-link.active').removeClass('active');

    if ($(this).hasClass('.navbar-link')) {
        $(this).addClass('active');
    }

    let path = $(this).data('href');
    loadPageContent(path);
});

$('#popup-dismiss').on('click', function() {
    popup.removeClass('show');
    popupBackground.removeClass('show');
});

$('.popup-show').on('click', function () { 
    let message = $(this).data('popup-message');
    openPopup(message);
});


function loadPageContent(sitePath) {
    if (typeof sitePath === 'undefined') {
        openPopup('Something went wrong, please try again later.');
        return;
    }

    hidePageContent(function() {
        let xhttp = new XMLHttpRequest();
        let timeout = setTimeout(function() {
            xhttp.abort();
            showPageContent();
            openPopup('It seems like you are not connected to the Internet, please check your connection and try again.');
        }, timeoutAfter);
    
        xhttp.onreadystatechange = function() {
            if(this.readyState !== 4)
            return;
    
            clearTimeout(timeout);
            if (this.status === 200) {
                replacePageContent(this.responseText);
                showPageContent();
            } else {
                showPageContent();
                if (this.status == 404) {
                    openPopup('It seems like the page you were looking for does not exist.');
                } else {
                    openPopup('It seems like there has been an error performing your request.');
                }
            }
        };     

        xhttp.open('GET', sitesURL + sitePath + '.' + fileType, true);
        xhttp.send();
    });
}

function hidePageContent(callback) {
    pageContainer.slideUp('fast', callback);
}

function showPageContent(callback) {
    pageContainer.slideDown('fast', callback);
}

function replacePageContent(content) {
    pageContainer.empty();
    pageContainer.append(content);
}

function openPopup(message) {
    popupMessage.html(message);
    popup.addClass('show');
    popupBackground.addClass('show');
}