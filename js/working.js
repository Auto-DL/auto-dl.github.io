// **** SLIDING ANIMATION ****
var $window = $(window);
var $animation_elementsR, $animation_elementsL;

function check_if_in_view() {
	$animation_elementsR = $('.right-slide');
	check_if___($animation_elementsR, 'go-right', false);

	$animation_elementsL = $('.left-slide');
	check_if___($animation_elementsL, 'go-left'), false;

	check_if___($('.inner-content'), 'text-anim', false);

	// lottie animation
	check_if___($('#completed'), '_', true);
}

function check_if___($animation_elements, clas, lottie) {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);

	if (lottie === false) {
		$.each($animation_elements, function () {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top + 100;
			var element_bottom_position = (element_top_position + element_height) - 100;

			var classList = $element.attr('class').split(/\s+/);

			// console.log("ele:", classList);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
				$element.addClass(clas);
			} else if (classList.includes(clas)) {
				$element.removeClass(clas);
			}
		});
	}

	// for lottie animation
	else {
		var $element = $animation_elements;
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top + 100;
		var element_bottom_position = (element_top_position + element_height) - 100;

		// console.log("ele:", classList);
		var obj = getLottie();

		//check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
			load()
		} else if (classList.includes(clas)) {
			$element.removeClass(clas);
		}
	}
}

// $window.on('load', () => {
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
// });