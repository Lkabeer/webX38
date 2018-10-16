var navX = document.querySelector('nav');
var stickyNavX = document.getElementById('stickyNavX');
var hideNavX = document.getElementById('hideNavX');
var shrinkNavX = document.getElementById('shrinkNavX');
var shrinkNavLinksX = document.querySelectorAll('#shrinkNavX a');

var navXOffsetTop = navX.offsetTop;
var prevScrollpos = window.pageYOffset;
var currentScrollPos;

// When the user scrolls the page, execute stickNavX 
window.onscroll = function () {

    // X-Team StickyNav javascript
    if(stickyNavX) {
        if (window.pageYOffset >= navXOffsetTop) {
            stickyNavX.classList.add("stickyX");
        } else {
            stickyNavX.classList.remove("stickyX");
        }
    }

    // X-Team HideNav JavaScript 
    if(hideNavX) {
        currentScrollPos = window.pageYOffset;
        if ((prevScrollpos > currentScrollPos) && (prevScrollpos > navXOffsetTop)) {
            hideNavX.classList.add('stickyX');
            hideNavX.style.top = "0";
            console.log('hide');
        } else {
            hideNavX.classList.remove('stickyX');
            hideNavX.style.top = "-" + hideNavX.offsetHeight + "px";
            console.log('show');
        }
        prevScrollpos = currentScrollPos;
    }

    // ShrinkNav JavaScript X-Team
    if(shrinkNavX) {
        if (window.pageYOffset >= navXOffsetTop) {
            shrinkNavX.classList.add("stickyX");
            shrinkNavLinksX.forEach(function(a) {
                a.classList.add('shrinkX');
            });
        } else {
            shrinkNavX.classList.remove("stickyX");
            shrinkNavLinksX.forEach(function(a) {
                a.classList.remove('shrinkX');
            });
        }
    }
};