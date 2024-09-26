$(document).ready(function () {
    $('.btn_close').on('click', function () {
        $('.top_event').fadeOut()
    })


    const $nav = $('.sub');
    const $depthWrap = $('.depth_wrap');

    $nav.on('mouseover focusin', function () {
        let idx = $(this).index();
        let $depths = $depthWrap.find('.dep');

        $depthWrap.addClass('on').fadeIn(300);
        $depths.removeClass('on');
        $depths.eq(idx).addClass('on').fadeIn(300);

        $('.dim').addClass('on').fadeIn(300);
    });


    $depthWrap.on('mouseleave focusout', function () {
        let idx = $(this).index();
        let $depths = $depthWrap.find('.dep');

        $depthWrap.removeClass('on').fadeOut(300);
        $depths.removeClass('on').fadeOut(300);

        $('.dim').removeClass('on').fadeOut(300);
    });

    $('.nav > li').not('.sub').on('mouseover', function () {
        $depthWrap.removeClass('on').fadeOut(300);
        $('.dim').removeClass('on').fadeOut(300);
    });

    $('.select button').on('click', function() {
        $(this).siblings('ul').stop().slideToggle();
     });

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    var swiper = new Swiper(".main02swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        mousewheel: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    var swiper = new Swiper(".main05swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        mousewheel: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    var swiper = new Swiper(".main06swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        mousewheel: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });


})