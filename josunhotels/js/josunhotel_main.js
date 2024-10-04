$(document).ready(function() {

    //페이지 로드 시 book_wrap fadein
    $('.book_wrap').addClass('show');

    //스크롤 시 헤더 디자인 변경
    $('header').each(function() {
        const $win = $(window),
            $header = $(this),
            headerOffsetTop = $header.offset().top;
            console.log(headerOffsetTop);

        let $clone = $header.contents().clone();
        let $cloneHTML = $("<div class='header_white'></div>");
        let wrapHeight = $header.offset().top + $header.outerHeight();

        $cloneHTML.append($clone);
        $cloneHTML.appendTo('body');
        $win.on('scroll', function() {
            if ($win.scrollTop() > wrapHeight) {
                $cloneHTML.addClass('on')
            } else {
                $cloneHTML.removeClass('on')
            }
        })
    })
    //main01 book_wrap 클릭 시 sub menu 펼치기
    $('.main01 .book_wrap > li').on('click', function() {
        const select = $(this).find('.sub');
        const dim =$('.dim');
        const bookWrap = $('.book_wrap');

        if (select.is(':visible')) {
            select.slideUp(300, function() {
                dim.removeClass('on');
                bookWrap.css('margin-top', '0')    
            });
        } else {
            $('.book_wrap .sub').slideUp(300, function() {
                dim.removeClass('on');
                bookWrap.css('margin-top', '0');
            });

            select.slideDown(300, function() {
                dim.addClass('on');
                bookWrap.css('margin-top', '70px');
            })
        }
    
        $('.btnClose').on('click', function() {
            dim.removeClass('on');
            bookWrap.css('margin-top','0');
        })
    });
    //main05 book_wrap
    $('.main05 .book_wrap > li').on('click', function() {
        const select = $(this).find('.sub');
        const dim =$('.dim');

        if (select.is(':visible')) {
            select.slideUp(300, function() {
                dim.removeClass('on');
            });
        } else {
            $('.main05 .book_wrap .sub').slideUp(300, function() {
                dim.removeClass('on');
            });
            select.slideDown(300, function() {
                dim.addClass('on');
            })
        }
        $('.btnClose').on('click', function() {
            dim.removeClass('on');
        })
    });
    //menu 펼치기
    $('header > ul > .left > .gnb_menu').on('click', function(event) {
        event.preventDefault();
        const menu = $('.menu');
        const header = $('header');
        const button = $('.gnb_menu');
    
        if (menu.hasClass('on')) {
            menu.slideUp(300, function() {
                menu.removeClass('on');
                header.removeClass('white');
                button.removeClass('on');
            });
        } else {
            header.addClass('white');
            menu.slideDown(300, function() {
                menu.addClass('on');
                button.addClass('on');
            });
        }

    });

    //menu 닫기
    $('.menuClose').on('click', function() {
        const menu = $('.menu');
        const header = $('header');
        const button = $('.gnb_menu');

        menu.slideUp(300, function() {
            menu.removeClass('on');
            header.removeClass('white');
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


    //main06 bg변경
    $('.main06 > .content > .logo tr > td').on('mouseover', function() {
        const bgImg = $(this).data('bg');

        $('.main06').css('background-image', bgImg);
        $(this).find('span').addClass('on')
    }).on('mouseout', function() {
        $('.main06').css('background-image', `url('img/section06_bg.jpg')`);
        $(this).find('span').removeClass('on')
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