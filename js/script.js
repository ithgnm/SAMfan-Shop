$(document).ready(function() {
	$('button[id=remove]').click(function() {
		$(this).parent().parent().hide();
	});
	$(window).on("scroll", function() {
        if($(window).scrollTop() > 90) 
        	$('#nav-index').addClass('bg-dark fixed-top');
        else $('#nav-index').removeClass('bg-dark fixed-top');
  	});
  	$('#index-button').click(function() {
		$('#nav-index').addClass('bg-dark');
	});
});