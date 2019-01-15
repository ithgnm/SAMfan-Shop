$(document).ready(function() {
	$('button[id=remove]').click(function() {
		$(this).parent().parent().hide();
	});
});