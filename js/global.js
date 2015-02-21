$(document).ready(function(){
	var $internalCircle = $('.internal-circle');
	$internalCircle.hover(function(){
		$('.external-circle').toggleClass('active');
		$('.circle-text-default').toggleClass('hidden');
		$('.circle-text-hover').toggleClass('hidden');
	});
});