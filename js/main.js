/*global $,console*/

$(document).ready(function () {
	
	"use strict";
	
	$(window).scroll(function () {
		
		var navbar = $('.navbar');
		
		if ($(window).scrollTop() >= navbar.height()) { // condition ? true : false;
			
			navbar.addClass('scrolled');
		
		} else {
			
			navbar.removeClass('scrolled');
		}
		
		//$(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
		//console.log($(".navbar").height());
		//console.log($(window).scrollTop());
	});
	
	$('.tab-switch li').click(function () {
		
		$(this).addClass("selected").siblings().removeClass("selected");
		
		$('.tabs-section .tabs-content > div').hide();
		
		$(('.') + $(this).data('class')).show();
		
		console.log($(this).data('class'));
	});
	
});