$(document).ready(function() {

    //menu 펼치기
    $('header > ul > .left > .gnb_menu').on('click', function(event) {
        event.preventDefault();
        const menu = $('.menu');
        const button = $('.gnb_menu');
    
        if (menu.hasClass('on')) {
            menu.slideUp(300, function() {
                menu.removeClass('on');
                button.removeClass('on');
            });
        } else {
            menu.slideDown(300, function() {
                menu.addClass('on');
                button.addClass('on');
            });
        }

    });

    //menu 닫기
    $('.menuClose').on('click', function() {
        const menu = $('.menu');
        const button = $('.gnb_menu');

        menu.slideUp(300, function() {
            menu.removeClass('on');
            button.removeClass('on');
        });
    });

    //현재 보이는 section에서 메뉴 띄우기
        $('.gnb_menu').on('click', function() {
            event.preventDefault();
            let currentSection = null;
    
            $('section').each(function() {
                const rect = this.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    currentSection = $(this);
                }
            });
    
            if (currentSection) {
                console.log('현재 보이는 섹션:', currentSection);
                console.log('위치 정보:', currentSection.offset());
    
                $('.menu').css({
                    zIndex: '1000'
                }).appendTo(currentSection).fadeIn();
            }
        });

    //원페이지스크롤
    $(document).ready(function() {
        const $html = $('html, body');
        const $sections = $('section');
        let page = 0;
        const totalPages = $sections.length - 1;
    
        $html.animate({scrollTop: 0}, 10);
    
        $(window).on('wheel', function(e) {
            if ($html.is(':animated')) return;
    
            if (e.originalEvent.deltaY > 0) {
                if (page === totalPages) return; 
                page++;
            } 
            else {
                if (page === 0) return; 
                page--;
            }
    
            const posTop = $sections.eq(page).offset().top;
            $html.animate({scrollTop: posTop}, 400);
        });
    });

    //login room_select list
    $('.cont02 .subcont .select').on('click', function() {
        const select = $(this);
        const selectList = $('.cont02 .subcont .room_select');
    
        if (selectList.is(':visible')) {
            selectList.slideUp(300, function() {
                selectList.removeClass('on');
            });
        } else {
            selectList.slideDown(300, function() {
                selectList.addClass('on');
            });
        }
    });

    //footer family site
    $('footer .btmArea .right > button').on('click', function() {
        const button = $(this);
        const familysite = $('footer .btmArea .right > .familysite');
    
        if (familysite.is(':visible')) {
            familysite.slideUp(300, function() {
                familysite.removeClass('on');
                button.removeClass('on');
            });
        } else {
            familysite.slideDown(300, function() {
                familysite.addClass('on');
                button.addClass('on'); 
            });
        }
    });
})