$(document).ready(function(e) {
    
    $('.loading-bar').css({width: '100%',height:  '100%'}).animate({width: '100%',height: '0%'}, 2000, function(e) {
        $('#loading-mask').fadeOut(1200);
    });
    $('.loading-bar').fadeOut(1200);
    
});