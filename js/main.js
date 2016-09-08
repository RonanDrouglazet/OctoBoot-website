
function main() {

(function () {
   'use strict';



    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    })

    /* ==============================================
  	Owl Sliders News, Testimonials, Clients
  	=============================================== */

  	$(document).ready(function(){
	    $(".news").owlCarousel({
		autoPlay: 6000,
        navigation : false, // Show next and prev buttons
		     navigationText: [
               "<i class='fa fa-angle-left'></i>",
               "<i class='fa fa-angle-right'></i>"
            ],
        slideSpeed : 300,
        singleItem:true,
		pagination: true,
		paginationSpeed : 400,
		stopOnHover: true
        });


      $(".testimonials").owlCarousel({
	    navigation : false, // Show next and prev buttons
        pagination: true,
		paginationSpeed : 400,
		slideSpeed : 300,
		stopOnHover: true,
		autoPlay: 6000,
		stopOnHover: true,
        singleItem:true

        });



  	  $(".clients").owlCarousel({
  	      autoPlay: 3000,
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      pagination: false,
  	      autoHeight : false,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });



  	});

    $(".why-us").slideUp(0)
    $(".why-us-trigger").click(function(){
        $(".why-us").slideUp(500)
        $($(".why-us")[$(this).index()]).slideDown(500)
    })

    window.duplicate_mission = function(el, duplicate) {
        var i = $(el).index()
        if (duplicate) {
            var wu = $($(".why-us").get(i - 1))
            $(el).click(function(){
                $(".why-us").slideUp(500)
                $($(".why-us")[$(this).index()]).slideDown(500)
            })
            wu.clone().insertAfter(wu)
            $(".why-us").slideUp(500)
        } else {
            $($(".why-us").get(i)).remove()
        }

        var ch = $(el).parent().children()
        var row = Math.ceil(ch / 12)
        var sp = ((12 * row) - ((duplicate ? ch.length : ch.length - 1) * 4)) / row

        for(var t=0; t<=row;t++) {
            $(ch[t * 3]).removeClass(function(index, classs) {
                var match = classs.match(/col-md-offset-\d+/)
                return match ? match[0] : null
            }).addClass('col-md-offset-' + sp)
        }
    }

}());


}
main();
