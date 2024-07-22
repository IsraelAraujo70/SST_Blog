$(document).ready(function(){
    $('.cabecalho').css('transition', 'opacity 0.5s');

    $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $('.cabecalho').css('opacity', '0.83');
        } else {
            $('.cabecalho').css('opacity', '1');
        }
    });
});