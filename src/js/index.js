$(function(){
    $.pjax({
        area : '.l-body',
        link : 'a:not([target])',
        ajax: { timeout: 2000},
        wait: 600
    });

    // $(document).bind('pjax:fetch', function(){
    //     $('body').css('overflow', 'hidden');
    //     $('.l-body').attr({'class': 'bookOut l-body'});
    // });
    // $(document).bind('pjax:render', function(){
    //     $('.l-body').attr({'class': 'bookIn l-body'});
    //     $('body').css('overflow', '');
    // });

    $(document).on('pjax:fetch',function(){ // 消える時の処理
        var windowScr = $(window).scrollTop();

        if(windowScr){
           $('body,html').animate({scrollTop : 0},'200');
           $('.l-body').removeClass('bookIn').addClass('bookOut');
        }else{
           $('.l-body').removeClass('bookIn').addClass('bookOut');
        }
    });

    $(document).on('pjax:render',function(){ // 現れる時の処理
        $('.l-body').removeClass('bookOut').addClass('bookIn');
    });
});
