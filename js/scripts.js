/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    const expandBtns = document.querySelectorAll('.expandBtn');
    const contents = document.querySelectorAll('.content');

    for (let i = 0; i < expandBtns.length; i++) {
        expandBtns[i].addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                contents[i].style.display = 'none';
                this.querySelector('.btnText').innerHTML = 'See More';
            } else {
                this.classList.add('active');
                contents[i].style.display = 'block';
                this.querySelector('.btnText').innerHTML = 'See Less';
            }
        });
    }

    /*
    const expandBtn = document.getElementsByClassName('expandBtn');
    const content = document.getElementsByClassName('content');

    expandBtn.addEventListener('click', function() {
    if (expandBtn.classList.contains('active')) {
        expandBtn.classList.remove('active');
        content.style.display = 'none';
        document.getElementByClassName('btnText').innerHTML = 'See More';
    } else {
        expandBtn.classList.add('active');
        content.style.display = 'block';
        document.getElementByClassName('btnText').innerHTML = 'See Less';
    }
    });
    */

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict
