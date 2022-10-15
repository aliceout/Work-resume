'use strict';

var $win = $(window);

$(function(){

	$('.slick-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><i class="material-icons">keyboard_arrow_left</i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="material-icons">keyboard_arrow_right</i></button>',
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
	});

    // navigation submenu
	$('header, .menu-wrapper-mask').find('nav').on('click', 'a', function(){
		var $this = $(this).closest('li');
		if($this.find('ul').get(0)){
			$('header, .menu-wrapper-mask').find('nav ul ul').not($this.find('ul')).slideUp()
			$this.find('ul').slideToggle();
			return false;
		}
	});

    var $form = $('#mc-form');

	$('#mc-subscribe').on('click', function(event) {
        if (event)
            event.preventDefault();

        if(newsletterType == "mailchimp")
            registerMailChimp($form);
        else
            registerByEmail($form);
    });

    $('div.lightbox-gallery').each( function() {
        var $pic     = $(this),
            getItems = function() {
                var items = [];

                $pic.find('a').not('.slick-cloned a').each(function() {
                    var $href   = $(this).attr('href'),
                        $size   = $(this).data('size').split('x'),
                        $title  = $(this).data('title'),
                        $width  = $size[0],
                        $height = $size[1];
     
                    var item = {
                        src     : $href,
                        w       : $width,
                        h       : $height,
                        title   : $title
                    }
     
                    items.push(item);
                });
                return items;
            }
     
        var items = getItems();
        
        var $pswp = $('.pswp')[0];
        $pic.on('click', 'a', function(event) {
            event.preventDefault();
             
            var $index = $pic.find('a').not('.slick-cloned a').index($(this));
            var options = {
                index: $index,
                bgOpacity: 0.7,
                showHideOpacity: true
            }
             
            // Initialize PhotoSwipe
            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    });

    //fixed sidebar
    var $fixedSidebar = $('.fixed-sidebar'),
        $nav = $('nav'),
        navL = $nav.find('>ul'),
        navToggle = $('div.nav-toggle'),
        navH = navL.height(),
        $menuMask = $('.menu-wrapper-mask');

    navToggle.on('click', function(){
        if($('.toggle-menu').get(0)){
            $('.toggle-menu').toggleClass('hidden');
        }else{
            $(this).toggleClass('active');

            if($menuMask.get(0))
                $menuMask.toggleClass('active').find(navL).css('height', 'auto');
            else
                navL.hasClass('active') ? navL.css('height', 0).removeClass('active') : navL.css('height', navH).addClass('active');
        }
    });

    //lazy loading
    // Each time the user scrolls
    if($('#infinit-scroll').get(0)){
        $win.on('scroll', function() {
            // End of the document reached?
            if ($(document).height() - $win.height() == $win.scrollTop()) {
                var infinitLoading = $('#infinit-loading');
                var infinitScroll = $('#infinit-scroll');
                var TotalVisiblePost = infinitScroll.find('.card').length;

                //for demonstration purpose we stop after having 9 post loaded
                if(TotalVisiblePost < 9){
                    infinitLoading.addClass('active');

                    $.ajax({
                        url: 'php/get-post.php',
                        dataType: 'html',
                        data: {postCount: TotalVisiblePost},
                        success: function(html) {
                            infinitScroll.append(html);
                            infinitLoading.removeClass('active');
                        }
                    });
                }
            }
        });
    }

    if($('.isotope-grid').get(0)){
        var $grid = $('.isotope-grid').isotope({
          // options
          itemSelector: '.grid-item',
          layoutMode: 'fitRows'
        });
        // filter items on button click
        $('.filter-button-group').on( 'click', 'a', function() {
            var $this = $(this);
            $('.filter-button-group').find('a').removeClass('active');
            $this.addClass('active');
            var filterValue = $this.attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    }

    $win.on('resize', function(){

        // create responsive menu
        if($win.outerWidth() <= 991){
            // navH = navL.height();
            if(!$menuMask.get(0)){
                navL.css('height', 0).removeClass('active');
                navToggle.removeClass('active');
            }
        }else{
            navL.css('height', 'auto');
        }

        var $fullbg = $('.fullbg');
        if($fullbg.get(0)){
            if($('.fixed-sidebar', $fullbg).get(0) && $win.outerWidth() > 991)
                $('.fixed-sidebar', $fullbg).css('height', $win.height()-1);
            else
                $('.fixed-sidebar', $fullbg).css('height', 'auto');
            
            if($('.reveal-body-bg', $fullbg).get(0))
                $('.reveal-body-bg', $fullbg).css('margin-top', $win.height() - 300)
        }
    });

    var $scrollFadeMask = $('.scroll-fade-mask');

    $win.on('scroll', function(){
        if($menuMask.get(0)){
            $menuMask.removeClass('active').find(navL).css('height', 'auto');
            navToggle.removeClass('active');
        }
        if($scrollFadeMask.get(0)){
            if($win.scrollTop() > 100)
                $scrollFadeMask.css('opacity', 0.5)
            else
                $scrollFadeMask.css('opacity', 0)
        }
    });

    $win.on('scroll resize', function(){
        $fixedSidebar.fixSidebar();
    })

    $win.resize();

    if($("#contactForm").get(0))
        contactFormValidate();
})

function registerMailChimp($form) {
    var $note = $('#mc-notification');
    $note.find('.alert').addClass('hidden');

    $.ajax({
        type: $form.attr('method'),
        url: mailchimpAjaxLink,
        data: $form.serialize(),
        cache: false,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        error: function(err) {
            $note
                .addClass('active')
                .find('.alert-warning')
                .removeClass('hidden')
                .find('span')
                .html('Could not connect to server. Please try again later.');
        },
        success: function(data) {
            if (data.result != "success") {
                var message = data.msg;
                $note
                    .addClass('active')
                    .find('.alert-warning')
                    .removeClass('hidden')
                    .find('span')
                    .html(message);
            } else {
                var message = data.msg.substring(4);
                $note
                    .addClass('active')
                    .find('.alert-success')
                    .removeClass('hidden')
                    .find('span')
                    .html(newsletterSuccessMsg);
            }
        }
    });
}

function registerByEmail($form){
  	$.post( "php/newsletter-to-email.php", {  
                           email: $('#EMAIL').val(),
                        })
    .done(function( data ) {
        $('#mc-notification').fadeIn('normal', function(){$(this).html(data)});
    });
}

function contactFormValidate() {

    var contactform = $("#contactForm"),
        url = contactform.attr("action");

    contactform.validate({
        submitHandler: function(form) {

            // Loading State
            var submitButton = $(this.submitButton);
            submitButton.button("loading");

            // Ajax Submit
            $.ajax({
                type: "POST",
                url: url,
                data: {
                    "name": $("#contactForm #name").val(),
                    "email": $("#contactForm #email").val(),
                    "message": $("#contactForm #message").val()
                },
                dataType: "json",
                success: function (data) {
                    if (data.response == "success") {

                        $("#contactSuccess").removeClass("hidden");
                        $("#contactError").addClass("hidden");

                        // Reset Form
                        $("#contactForm .form-control")
                            .val("")
                            .blur()
                            .parent()
                            .removeClass("has-success")
                            .removeClass("has-error")
                            .find("label.error")
                            .remove();

                        if(($("#contactSuccess").position().top - 80) < $win.scrollTop()){
                            $("html, body").animate({
                                 scrollTop: $("#contactSuccess").offset().top - 80
                            }, 300);
                        }

                    } else {

                        $("#contactError").removeClass("hidden");
                        $("#contactSuccess").addClass("hidden");

                        if(($("#contactError").position().top - 80) < $win.scrollTop()){
                            $("html, body").animate({
                                 scrollTop: $("#contactError").offset().top - 80
                            }, 300);
                        }

                    }
                },
                complete: function () {
                    submitButton.button("reset");
                }
            });
        },
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        highlight: function (element) {
            $(element)
                .parent()
                .removeClass("has-success")
                .addClass("has-error");
        },
        success: function (element) {
            $(element)
                .parent()
                .removeClass("has-error")
                .addClass("has-success")
                .find("label.error")
                .remove();
        }
    });
    
    return false;
}

(function ( $ ) {
 
    $.fn.fixSidebar = function() {
        return this.each(function() {
            var $this = $(this);

            if($win.width() > 991 && $win.height() > $this.height()){
                $this.css('width', $this.width());
                $this.addClass('fixed');
                $this.removeClass('fixedbottom');
            }else if($win.width() > 991 && $win.scrollTop() > ($this.height()+35) - $win.height()){

                $this.css('width', $this.width());
                $this.addClass('fixedbottom');
            }else{
                $this.removeClass('fixedbottom fixed');
                $this.css('width', 'auto');
            }
        });
    };
 
}( jQuery ));