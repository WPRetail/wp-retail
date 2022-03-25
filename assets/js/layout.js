/**
 * EverestFormsRepeaterFieldsFrontEnd JS
 */
jQuery( function ( $ ) {
	var WPRetail = {
		init: function () {
			// WPRetail.bindUIActions();
			WPRetail.bindScrollTop();
		},

		/**
		 * Element bindings
		 */
		bindUIActions: function () {
			// Functions to write to control add and remove buttons.
			$( '#wpretail-wrapper #sidebarToggleTop' ).click( function () {
				if ( $( '#wpretail-wrapper .sidebar' ).is( ':visible' ) ) {
					$( '#wpretail-wrapper .sidebar' ).css( 'display', 'none' );
				} else {
					$( '#wpretail-wrapper .sidebar' ).css( 'display', 'block' );
				}
			} );
		},
		bindScrollTop: function () {
			$( '#sidebarToggle, #sidebarToggleTop' ).on( 'click', function () {
				$( 'body' ).toggleClass( 'sidebar-toggled' );
				$( '.sidebar' ).toggleClass( 'toggled' );
				if ( $( '.sidebar' ).hasClass( 'toggled' ) ) {
					$( '.sidebar .collapse' ).collapse( 'hide' );
				}
			} );

			// Close any open menu accordions when window is resized below 768px
			$( window ).resize( function () {
				if ( $( window ).width() < 768 ) {
					$( '.sidebar .collapse' ).collapse( 'hide' );
				}

				// Toggle the side navigation when window is resized below 480px
				if (
					$( window ).width() < 480 &&
					! $( '.sidebar' ).hasClass( 'toggled' )
				) {
					$( 'body' ).addClass( 'sidebar-toggled' );
					$( '.sidebar' ).addClass( 'toggled' );
					$( '.sidebar .collapse' ).collapse( 'hide' );
				}
			} );

			// Prevent the content wrapper from scrolling when the fixed side navigation hovered over
			$( 'body.fixed-nav .sidebar' ).on(
				'mousewheel DOMMouseScroll wheel',
				function ( e ) {
					if ( $( window ).width() > 768 ) {
						var e0 = e.originalEvent,
							delta = e0.wheelDelta || -e0.detail;
						this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
						e.preventDefault();
					}
				}
			);

			// Scroll to top button appear
			$( document ).on( 'scroll', function () {
				var scrollDistance = $( this ).scrollTop();
				if ( scrollDistance > 100 ) {
					$( '.scroll-to-top' ).fadeIn();
				} else {
					$( '.scroll-to-top' ).fadeOut();
				}
			} );

			// Smooth scrolling using jQuery easing
			$( document ).on( 'click', 'a.scroll-to-top', function ( e ) {
				$( 'html, body' ).stop().animate(
					{
						scrollTop: 0,
					},
					200,
					'easeInOutExpo'
				);
				e.preventDefault();
			} );
		},
	};
	WPRetail.init( jQuery );
} );
