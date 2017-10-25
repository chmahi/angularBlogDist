
/////////////////////DOCUMENT READY START////////////////////
(function ($) { 	
 	//-----------LIGHTBOX START --------------
	lightbox.option({
	   'resizeDuration': 200,
	   'wrapAround': false,
	   'disableScrolling': true,
	})
	//-----------LIGHTBOX END --------------
	
	// Main menu to copy mobile menu container start
		var copyMenu=$(".nav.navbar-nav").html();
		$("ul.CopyMobileMenu").html(copyMenu);
	// Main menu to copy mobile menu container end
	
	//-----------MOBILE MENU START --------------
	//Plugin Page : https://github.com/Blake-C/mobile-mega-menu
	! function(e, n) {
		if ("object" == typeof exports && "object" == typeof module) module.exports = n();
		else if ("function" == typeof define && define.amd) define([], n);
		else {
			var i = n();
			for (var t in i)("object" == typeof exports ? exports : e)[t] = i[t]
		}
	}(this, function() {
		return function(e) {
			function n(t) {
				if (i[t]) return i[t].exports;
				var s = i[t] = {
					exports: {}
					, id: t
					, loaded: !1
				};
				return e[t].call(s.exports, s, s.exports, n), s.loaded = !0, s.exports
			}
			var i = {};
			return n.m = e, n.c = i, n.p = "", n(0)
		}([function(e, n) {
			"use strict";
			! function() {
				window.$.fn.extend({
					mobileMegaMenu: function(e) {
						var n = {
								changeToggleText: !1
								, enableWidgetRegion: !1
								, prependCloseButton: !1
								, stayOnActive: !0
								, toogleTextOnClose: "Close Menu"
								, menuToggle: "toggle-menu"
							}
							, i = $.extend(n, e);
						return this.each(function() {
							var e = 250
								, n = '<a class="next-button" href="#"><i class="fa fa-angle-right" aria-hidden="true"></i></a>'
								, t = '<li><a class="back-button" href="#"><i class="fa fa-angle-left" aria-hidden="true"></i> Back To Menu</a></li>'
								, s = '<li><a class="close-button ' + i.menuToggle + '" href="#">Close Menu</a></li>'
								, l = -1
								, a = $(this)
								, o = $("a." + i.menuToggle)
								.html();
							a.find("ul ul")
								.before(n)
								.siblings("a:first-of-type")
								.addClass("has-next-button"), a.find("ul ul")
								.prepend(t), i.prependCloseButton && a.find("ul")
								.closest("ul")
								.prepend(s);
							var f = $("a." + i.menuToggle)
								, r = a.find("a.next-button")
								, u = a.find("a.back-button");
							if (i.enableWidgetRegion) {
								var d = a.find(".widget-region")
									.detach();
								a.find("ul:first")
									.append(d)
							}
							var c = a.find("ul");
							c.toArray()
								.forEach(function(e) {
									l = l > $(e)
										.height() ? l : $(e)
										.height()
								}), a.css("min-height", l + 50), i.stayOnActive && ! function() {
									var e = window.location.href
										, n = e.replace("#", "");
									a.find("ul li a")
										.filter(function() {
											return this.href === n
										})
										.addClass("active")
										.css("font-weight", "bold"), a.find("a.active")
										.siblings("ul")
										.length > 0 && a.find("a.active")
										.removeClass("active")
										.css("font-weight", "bold")
										.siblings("ul")
										.find("li:first-of-type")
										.first()
										.find("a")
										.addClass("active"), a.find("a.active")
										.closest("ul")
										.addClass("is-in-view")
										.parents("ul")
										.addClass("has-been-viewed"), a.find("a.active")
										.closest("ul")
										.parents()
										.siblings("li")
										.find("ul")
										.hide()
								}(), f.on('click',function(e) {
									e.preventDefault(), a.find("ul:first-child")
										.hasClass("has-been-viewed") || a.find("ul:first-child")
										.toggleClass("is-in-view"), i.changeToggleText && (a.hasClass("open") ? a.hasClass("open") && $("a." + i.menuToggle)
											.html(o) : $("a." + i.menuToggle)
											.html(i.toogleTextOnClose)), a.toggleClass("open")
								}), r.on('click',function(n) {
									n.preventDefault(), setTimeout(function() {
											$("html, body")
												.animate({
													scrollTop: 0
												}, e)
										}, e), $(this)
										.siblings("ul:first-of-type")
										.addClass("is-in-view"), $(this)
										.parents()
										.siblings("li")
										.find("ul")
										.hide(), $(this)
										.siblings("ul")
										.show(), $(this)
										.parents("ul:first-of-type")
										.addClass("has-been-viewed")
										.removeClass("is-in-view")
								}), u.on('click',function(e) {
									e.preventDefault(), $(this)
										.parents("ul.is-in-view")
										.closest("ul.has-been-viewed")
										.toggleClass("has-been-viewed is-in-view")
										.promise()
										.done(function() {
											a.find("ul.is-in-view ul.is-in-view")
												.toggleClass("is-in-view")
										})
								}), ($("html")
									.hasClass("no-csstransforms") || $("html")
									.hasClass("no-cssanimations")) && (f.on('click',function(e) {
									e.preventDefault(), a.css("transform", "none"), a.hasClass("open") ? a.animate({
										right: 0
									}) : a.animate({
										right: "-100%"
									})
								}), r.on('click', function(n) {
									n.preventDefault(), a.find(".has-been-viewed")
										.css("transform", "none"), a.find("ul")
										.animate({
											right: "+=100%"
										}, e)
								}), u.on('click', function(n) {
									n.preventDefault(), a.find(".has-been-viewed")
										.css("transform", "none"), a.find("ul")
										.animate({
											right: "-=100%"
										}, e)
								}))
						})
					}
				})
			}()
		}])
	});
	 
		$( '.main-menu' ).mobileMegaMenu({
			changeToggleText: true,
			enableWidgetRegion:  false,
			prependCloseButton: true,
			stayOnActive: false,
			toogleTextOnClose: '<i class="fa fa-times" aria-hidden="true"></i>',
			menuToggle: 'main-menu-toggle'
		});
	// Overlay Settings start				
		$('.main-menu-toggle').on( 'click', function() {
			$('.p-overlay').toggle();
			return false;
		});	
		$('.p-overlay').on( 'click', function() {
			$('.open').removeClass('open');
			return false;				
		});
		$('.p-overlay').on( 'click', function() {
			$(this).css('display','none');	
			$('.fa-times').addClass('fa-reorder');	
			return false;				
		});
	// Overlay Settings end
	//-----------MOBILE MENU END -------------- 
	 
	//-----------HEADER SLIDER START --------------
		var swiper = new Swiper('.swiper-container', {
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			slidesPerView: 3,
			longSwipes:true,
			spaceBetween: 20,
			autoplay:4000,
			loop:true,
			grabCursor: true,
			preloadImages: true,
			// Enable lazy loading
			lazyLoading: true,
			   breakpoints: {
				1171: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				1024: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				640: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				}
			}
		});
	 
	//-----------HEADER SLIDER END --------------

	//-----------OWL CAROUSEL PAGE-CONTENT-SLIDER SLIDER START --------------	  
		$("#page-content-slider").owlCarousel({
			navigation : true,
			// Show next and prev buttons
			navigationText: [
				"<i class='fa fa-angle-left'></i>",
				"<i class='fa fa-angle-right'></i>"
			],
			autoPlay : 3000,
			stopOnHover : true,
			singleItem : true,
			autoHeight : true,
			transitionStyle : "fade",
		});
	//-----------OWL CAROUSEL PAGE-CONTENT-SLIDER SLIDER END --------------

	//-----------OWL CAROUSEL LATEST COMMENTS SLIDER START --------------
		$("#latest-comments-slider").owlCarousel({
			navigation : true,
			// Show next and prev buttons
			navigationText: [
				"<i class='fa fa-angle-left'></i>",
				"<i class='fa fa-angle-right'></i>"
			],
			slideSpeed : 300,
			transitionStyle : "backSlide",
			pagination : false,
			paginationSpeed : 400,
			singleItem:true,
			autoPlay: 3000,
			transitionStyle : "fade",
			singleItem:true // "singleItem:true" is a shortcut for:
		});
	//-----------OWL CAROUSEL LATEST COMMENTS SLIDER END --------------

	//-----------PRODUCT SLIDER START --------------
		$("#product-carousel-owl").owlCarousel({
			navigation : true,
			
			navigationText: [
				"<i class='fa fa-angle-left'></i>",
				"<i class='fa fa-angle-right'></i>"
			],
			slideSpeed : 300,
			transitionStyle : "backSlide",
			pagination : false,
			paginationSpeed : 400,
			singleItem:true,
			autoPlay: 3000,
			transitionStyle : "fade",
			singleItem:true 
		});
	//-----------PRODUCT SLIDER END --------------
	 

	//-----------INSTAFEED & OWL CAROUSEL JS START --------------
		var feed = new Instafeed({
				get: 'user',
				userId: '4554590347',
				clientId: '7cf679d0a9824b0fa707a1680369e1c7',
				accessToken: '4554590347.1677ed0.0583c4d3087545c5bfa87f2872031513',
				template: '	<div class="item" id="{{id}}">\
								<a href="{{link}}" id="{{id}}" class="instafeed-image">\
									<img class="lazyOwl img-responsive" data-src="{{image}}" /> \
									<div class="instagram-overlay-wrap">\
										<div class="instafeed-overlay">\
											<span>{{likes}} Likes</span>\
											<span> {{comments}} Comments</span>\
										</div>\
									</div>\
									<em class="dt-text">{{caption}}</em>\
								</a>\
							</div>',
				resolution: 'standard_resolution',
				sortBy: 'most-recent',
				limit: 99999,
				links: false,
				after: function() 
				{
					$('#instafeed').owlCarousel({  
						navigation : true,
						// Show next and prev buttons
						navigationText: [
							"<i class='fa fa-angle-left'></i>",
							"<i class='fa fa-angle-right'></i>"
						],
						slideSpeed : 300,
						lazyLoad : true,
						pagination : false,
						paginationSpeed : 400,
						singleItem:true, 
						spaceBetween: 10,
						marginRight:10,
						autoPlay: 6000,
						transitionStyle : "fade",
					});
				}
		 
		});
			feed.run();	
	//-----------INSTAFEED & OWL CAROUSEL JS END --------------

	//-----------THEIA STICKY SIDEBAR JS START --------------
		$('.sticky-left,.sticky-right')
			.theiaStickySidebar({
				additionalMarginTop: 0
		}); 
	//-----------THEIA STICKY SIDEBAR JS JS END --------------

	//-----------GARAND STICKY START --------------
		$(".sticky-header").sticky({
			topSpacing:0,
			bottomSpacing:0,
			zIndex:999,
		});
	//-----------GARAND STICKY END --------------
	//-----------PRELOADER START ----------------
			
	//-----------PRELOADER END --------------

	//-----------TOP SCROLL START --------------
	//Check to see if the window is top if not then display button
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollToTop').fadeIn();
			} else {
				$('.scrollToTop').fadeOut();
			}
		});
		//Click event to scroll to top
		$('.scrollToTop').on( 'click', function() {
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
	//-----------TOP SCROLL END --------------
	//-----------CONTENT EXCERP START --------------
		$('.article-excerpt,.header-slider-desc').text(function(i, text) {
			var t = $.trim(text);
			if (t.length > 10) {
				return $.trim(t).substring(0, 130) + "  ...";
			}
			return t;
		});
 	//-----------CONTENT EXCERP END --------------	
})(jQuery);
/////////////////////DOCUMENT READY END////////////////////			
 