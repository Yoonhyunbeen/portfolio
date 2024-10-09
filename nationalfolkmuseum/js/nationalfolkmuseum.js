document.addEventListener('DOMContentLoaded', ()=>{
    const interval = window.setInterval(rollingCallback, 3000);
})

//.header_top_inner .right .lang 클릭 시 .lang_inner 띄우기
$('.header_top_inner .right .lang').on('click', function() {
    const lang = $(this);
    const langInner = lang.find('.lang_inner');
    
    if (langInner.is(':visible')) {
        lang.removeClass('on');
    } else {
        lang.addClass('on');
    }
})

//gnb > li에 mouseover 시 depth
$('.header .gnb > li').on('mouseover', function() {
    const depth = $(this).find('.depth');

    if (depth.is(':visible')) {
        depth.stop(true, true).slideDown(300);
    } else {
        $('.header .gnb .depth').slideUp(300);
        depth.stop(true, true).slideDown(300);
    }
}).on('mouseleave', function() {
    const depth = $(this).find('.depth');
    depth.stop(true, true).slideUp(300);
});

$('.header .gnb .depth').on('mouseenter', function() {
    $(this).stop(true, true).slideDown(300);
}).on('mouseleave', function() {
    $(this).stop(true, true).slideUp(300);
});


//새소식 텍스트 슬라이드
function rollingCallback() {
    let current = document.querySelector('.textslide .current');
    let next = document.querySelector('.textslide .next');
    let prev = document.querySelector('.textslide .prev');

    current.classList.remove('current');
    current.classList.add('prev');

    if (!next.nextElementSibling) {
        next.parentElement.firstElementChild.classList.add('next');
    } else {
        next.nextElementSibling.classList.add('next');
    }

    next.classList.remove('next');
    next.classList.add('current');
}
