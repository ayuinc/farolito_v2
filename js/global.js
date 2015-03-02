$(document).ready(function(){
	var $internalCircle = $('.internal-circle');
	$internalCircle.hover(function(){
		$('.external-circle').toggleClass('active');
		$('.circle-text-default').toggleClass('hidden');
		$('.circle-text-hover').toggleClass('hidden');
	});
	var $empresa1a2 = $('#empresa_1_2');
	$empresa1a2.click(function(){
		$('#empresa-2').slideDown("slow");
	});
});