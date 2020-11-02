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
        $('#orderModal').find('.btn-secondary').removeClass('ml-auto');
    }
});