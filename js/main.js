$(document).ready(function() {
	// Custom Range Slider JS
	$("#rangeSliderValueDisplay").html($("#rangeSlider").val());
	$(".range-slider").on("input", function() {
		$("#rangeSliderValueDisplay").html($(this).val());
	});
});