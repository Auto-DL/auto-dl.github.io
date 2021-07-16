let firstTime = true;

document.addEventListener("scroll", function () {
    if (document.querySelector(".home-head").querySelector('.navbar') != null) {
        const navbar = document.querySelector(".home-head").querySelector('.navbar');
        // const headheight = document.getElementsByClassName('App-header').clientHeight;
        const navbarHeight = window.screen.height - 70;

        const distanceFromTop = Math.abs(
            document.body.getBoundingClientRect().top
        );

        (distanceFromTop >= navbarHeight) ? navbar.classList.add("fixed-top"): navbar.classList.remove("fixed-top");
    }

    // newsletter-modal
    if (firstTime === true && document.querySelector("#newsletter-modal") != null) {
        var newsModal = document.getElementById('newsletter-modal');
        const minHeight = 1200;

        const distFromTop = Math.abs(
            document.body.getBoundingClientRect().top
        );

        if (distFromTop >= minHeight) {
            var myModal = new bootstrap.Modal(newsModal, {});
            myModal.show(newsModal);
            firstTime = false;
        }
    }
});

$(window).on('load', function () {
    var head = document.querySelector('.home-head');

    // if (head != null && head.querySelector('.navbar') != null) {
    head.querySelector('.navbar').classList.remove('fixed-top');
    // }
});

// document.querySelector('header').classList.add("home-head");
$(window).on('load', function () {
    floatySpace();
});