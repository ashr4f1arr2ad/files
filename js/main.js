/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    // $(window).on('load', function () {
    //     $(".loader").fadeOut();
    //     $("#preloder").delay(200).fadeOut("slow");
    // });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Magnific
	--------------------*/
    const player = new Plyr('#player', {
        controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
        seekTime: 5,
        quality: {
            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] 
        },
    });

    const player2 = new Plyr('#player2', {
        controls: ['play', 'progress', 'current-time'],
    });



})(jQuery);