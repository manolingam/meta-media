window.addEventListener("load", function () {
    new Glider(document.querySelector(".glider"), {
        slidesToShow: 1,
        slidesToScroll: "auto",
        scrollLock: true,
        draggable: true,
        dots: ".dots",
        arrows: {
            prev: ".glider-prev",
            next: ".glider-next",
        },
        responsive: [
            {
                breakpoint: 1035,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    duration: 0.25,
                    draggable: false,
                    dots: ".dots",
                },
            },
        ],
    });
});
