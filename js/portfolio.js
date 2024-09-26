$(document).ready(function() {

    //sub menu
    const $depth = $('.depth');

    $('.project').on('mouseenter', function() {
        $depth.stop(true, true).fadeIn(100).addClass('on');
    });

    $('.project').on('mouseleave', function() {
        $depth.stop(true, true).fadeOut(100).removeClass('on');
    });

    $depth.on('mouseleave', function() {
        $depth.stop(true, true).fadeOut(200).removeClass('on');
    });

    //main text animation
    $('.title span').each(function(index) {
        $(this).delay(100 * index).fadeIn(300, function() {
            if (index === $('.title span').length - 1) {
                $('.maintxt').addClass('visible');
            }
        });
    });

    //scroll 이동
    $('.gnb li a').on('click', function(event) {
        event.preventDefault();
        
        const target = $(this).attr('href');
        const headerHeight = $('header').outerHeight();

        $('html, body').animate({
            scrollTop: $(target).offset().top - headerHeight - 50
        }, 800);
    });

});
