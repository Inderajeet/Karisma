/*
 * Child Theme Js 
 */ 

(function( $ ) {

	"use strict";
		  
	$( document ).ready(function() {
	
		if( $( ".aditional-filters-wrap" ).length ){
			$( document ).on( "click", ".aditional-filters-trigger", function( e ) {
				e.preventDefault();
				$(this).parents("#doctors-filter-form").find(".aditional-filters-wrap").slideToggle();
			});
			
			$( document ).on( "click", ".dd-form-reset", function( e ) {
				e.preventDefault();
				document.getElementById("doctors-filter-form").reset();
				$("#doctors-filter-form").find("input").val('');
				$("#doctors-filter-form").find("select > option:first-child").attr('selected', 'selected');
			});
		}
		
		if( $( ".doctor-mail-wrap" ).length ){
			$( document ).on( "click", ".doctors-directory-mail-submit", function( e ) {
			
				e.preventDefault();
				
				var dd_name = $("#doctors-directory-name").val();
				var dd_sender = $("#doctors-directory-sender").val();
				var dd_content = $("#doctors-directory-content").val();
				if( dd_name != '' && dd_sender != '' && dd_content != '' ){
					$(".doctors-directory-mail-status").text( dd_ajax_var.dd_processing );
					$.ajax({
						type: 'post',
						//dataType: 'json',
						url: dd_ajax_var.ajaxurl,
						data: { action: "doctor_directory_email", 
								security: dd_ajax_var.dd_email_security,
								name: dd_name,
								email: dd_sender,
								content: dd_content
						},success: function(data){
							if( data == 'success' ){
								$(".doctors-directory-mail-status").text( dd_ajax_var.dd_mail_success );
								$("#doctors-directory-name").val('');
								$("#doctors-directory-sender").val('');
								$("#doctors-directory-content").val('');								
							}else{
								$(".doctors-directory-mail-status").text( dd_ajax_var.dd_mail_failed );
							}
						},error: function(xhr, status, error) {
							$(".doctors-directory-mail-status").text( dd_ajax_var.dd_mail_failed );
						}
					});
				}else{
					$(".doctors-directory-mail-status").text( dd_ajax_var.dd_filled );
				}
			});
		}
		
		//Doctor directory list slide
		if( $( ".owl-carousel.doctors-directory-carousel" ).length ){
			$( ".owl-carousel.doctors-directory-carousel" ).each(function() {
				var items = $(this).data("items");
				var mobile = $(this).data("mobile-items");
				var margin = $(this).data("margin");
				var dots = $(this).data("dots");
				var nav = $(this).data("nav");
				var loop = $(this).data("loop");
				var autoplay = $(this).data("autoplay");
				
				$(this).owlCarousel({
					loop: loop,
					margin: margin,
					nav: nav,
					dots: dots,
					autoplay: autoplay,
					responsive:{
						0:{
							items: mobile
						},
						768:{
							items: items
						}
					}
				});
			});
		}
		
		$(window).on('load', function() {
			if ($(".half-map-doctors-list:not(.full-map-doctors-list)").length) {
				$("body").addClass("half-map-activated");
				setMapHeights();
		} 

			function setMapHeights() {
				var winHeight = $(window).height();
				var headerHeight = $(".site-header").outerHeight();
				var adminBarHeight = $('#wpadminbar').outerHeight() || 0;
				var topPosition = headerHeight + adminBarHeight;
				var propWrapHeight = winHeight - topPosition;
		
				if ($("body").hasClass("half-map-activated")) {
					$(".half-map-filtered-list-wrap").css({
						"top": topPosition + "px",
						"height": propWrapHeight + "px"
					});
		
					$(".half-map-doctors-list").css({
						"top": topPosition + "px",
						"height": propWrapHeight + "px"
					});

				}
			}
	

			// Recalculate heights on window resize
			$(window).resize(function() {
				setMapHeights();
			});
		});	
		
	});
	
})( jQuery );