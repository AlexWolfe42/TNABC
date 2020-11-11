$(function() {
    function resetFaqHeight () 
    {
        $('.faq').each(function () {
            $(this).css('height', $(this).find('.faq-question').height() + 'px');
            if ($(this).find('.faq-answer').hasClass('reveal'))
            {
                $(this).children('.faq-answer').removeClass('reveal');
            }
        });
    }

    resetFaqHeight();

    $('.faq').click(function () {
        resetFaqHeight();
        answerHeight = parseInt($(this).children('.faq-answer').css('height'));
        questionHeight = parseInt($(this).children('.faq-question').css('height'));
        faqHeight = answerHeight + questionHeight;
        $(this).css('height', faqHeight + 'px');
        $(this).find('.faq-answer').addClass('reveal');
    });

    if ((navigator.userAgent.indexOf(/IE/i) > -1) || (navigator.userAgent.indexOf("Trident") > -1)) {
        // Fix modal button position on IE
        $('#orderModal').find('.btn-secondary').removeClass('ml-auto');

        // Sticky top nav in IE
        const nav = $('nav');
        const tmp = nav.clone().attr('class', 'tmp').css('visibility', 'hidden');
        const offset = nav.offset();
        const navWidth = nav.width();

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > offset.top) {
                nav.after(tmp);
                nav.css({'position': 'fixed', 'top': 0, 'width' : "100%"});
            } else {
                $('.tmp').remove();
                nav.css({'position': 'static', 'top': ''});
            }
        });

        // FAQ questions word wrap in IE
        $('.faq-question h3').each(function () {
            $(this).css({'word-wrap': 'break-word', 'white-space': 'normal'});  // Not work
        });
    }
});