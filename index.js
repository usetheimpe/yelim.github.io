(function ($) {
    // var $grid = $('.grid').masonry({
    //     itemSelector: '.grid-item',
    //     percentPosition: true,
    //     columnWidth: '.grid-sizer'
    //   });
    //   // layout Masonry after each image loads
    //   $grid.imagesLoaded().progress( function() {
    //     $grid.masonry();
    //   });  
      
    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function (e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance;
        if (heading == "#top"){
            scrollDistance = 0; 
        }else{
            scrollDistance = $(heading).offset().top - $('#headerContainer').height();
        }

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - scrollDistance) / 3);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 50);
    });

    // Create timeline
    $('#experience-timeline').each(function () {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function () {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });
        $this.find('.vtimeline-point').each(function () {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function () {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function () {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function () {
        $('header, body').removeClass('active');
    });

    // when a toggle button is clicked 
    $('.togglebutton').click(function(){
        $('.togglebutton').removeClass('togglebutton-select');
        $('.togglebutton').removeClass('togglebutton-deselect');
        $(this).addClass('togglebutton-select');
       $('.togglebutton').not(this).addClass('togglebutton-deselect');
        // 2. display things only matter
        var toggleType = "."+ $(this).data("toggle");
        if (toggleType != ".all"){
            $(".adopt-a-pup-card").parent().show(); 
            $(".adopt-a-pup-card").not(toggleType).parent().fadeOut();
        }else{
            $(".adopt-a-pup-card").parent().show(); 
        }
    });
})(jQuery);
