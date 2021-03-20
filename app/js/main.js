$(function(){

    $("a.click").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 700);
	});

	$('.catalog-list').slick({
		dots: true,
		infinite: true,
		speed: 300,
		cssEase: 'linear',
		appendArrows: $('.catalog-arrows'),
		nextArrow: '<img src="images/arrow-right.svg" class="slick-next" alt="">',
    	prevArrow: '<img src="images/arrow-left.svg" class="slick-prev" alt="">',
	  });

	  $('.comments-list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		appendArrows: $('.comments-arrows'),
		nextArrow: '<img src="images/arrow-right.svg" class="slick-comments-next" alt="">',
    	prevArrow: '<img src="images/arrow-left.svg" class="slick-comments-prev" alt="">',
	  });

	  $("#menu__toggle").click(function(){
		$(".main-nav__list").toggleClass("active"); return false;
	});
	$("#menu__toggle").click(function(){
		$("#menu__toggle").toggleClass("active"); return false;
	});
	  

});