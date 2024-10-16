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


//footer .sitemap button 클릭 시 .lang_inner 띄우기
$('.f_top_inner .sitemap > button').on('click', function() {
    const sitemap = $('.f_top_inner .sitemap');
    const sitemapList = $('.f_top_inner .sitemap > ul');
    
    if (sitemapList.is(':visible')) {
        sitemap.removeClass('on');
    } else {
        sitemap.addClass('on');
    }
})

// lnb 아코디언메뉴
const depth1Items = document.querySelectorAll('.lnb_depth1');
console.log(depth1Items);

    depth1Items.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            const depth1 = this;
            const depth2 = item.querySelector('.lnb_depth2');

            const isOpen = depth2 && depth1.classList.add('on');

            if (!isOpen) {
                depth2.classList.add('on');
            }
        });
    });

//contents 아코디언메뉴
const contTitles = document.querySelectorAll('section .title');

contTitles.forEach(title => {
    title.addEventListener('click', function (e) {
        e.preventDefault();

        const content = this.nextElementSibling;
        const isOpen = content.classList.contains('on');

        if (!isOpen) {
            content.classList.add('on');
            title.classList.add('on'); 
        } else {
            content.classList.remove('on');
            title.classList.remove('on');
        }
    });
});