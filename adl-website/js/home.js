document.addEventListener("scroll", function () {
    if (document.querySelector(".home-head").querySelector('.navbar') != null) {
        const navbar = document.querySelector(".home-head").querySelector('.navbar');
        // const headheight = document.getElementsByClassName('App-header').clientHeight;
        const navbarHeight = window.screen.height - 70;
    
        const distanceFromTop = Math.abs(
            document.body.getBoundingClientRect().top
        );

        (distanceFromTop >= navbarHeight) ? navbar.classList.add("fixed-top") : navbar.classList.remove("fixed-top");
    }
});

// document.querySelector('header').classList.add("home-head");