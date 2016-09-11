$(document).ready(function(){

(function makeDiv(){
    // vary size for fun
    var imgsize = ((Math.random()*10) + 15).toFixed();
    $newimg = $('<img/>').css({
        'width':imgsize+'em',
        'height':imgsize+'em',
    })
    $newimg.attr('src', '/bubble');
    // make position sensitive to size and document's width
    var posx = (Math.random() * ($(document).width() - imgsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - imgsize)).toFixed();

    $newimg.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( '.bubbles' ).fadeIn(100).delay(500).fadeOut(800, function(){
      $(this).remove();
      makeDiv();
    });
})();
(function staticImg(){
    // vary size for fun
    var imgsize2 = ((Math.random()*10) + 15).toFixed();
    $newimg2 = $('<img/>').css({
        'width':imgsize2+'em',
        'height':imgsize2+'em',
    })
    $newimg2.attr('src', '/bubble');
    // make position sensitive to size and document's width
    var posx = (Math.random() * ($(document).width() - imgsize2)).toFixed();
    var posy = (Math.random() * ($(document).height() - imgsize2)).toFixed();

    $newimg2.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( '.bubbles' ).fadeIn(100).delay(500).fadeOut(2000,function(){
      $(this).remove();
      staticImg();
    });
})();

})
