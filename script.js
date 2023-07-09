$(document).ready(function(){

    $('#menu').click(function(){
        $(this).tooggleClass('fa-times');
        $('header').tooggleClass('toggle');
    })

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop()>0){
            $('.top').show();
        }
        else{
           $('.top').hide(); 
        }
    });

    //smooth toogling
    $('a[href*="#]').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );
    });
});