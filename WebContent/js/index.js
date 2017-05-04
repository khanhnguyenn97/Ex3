$(document).ready(function() {
	$('#header .menu li').click(function() {
		var li = $(this).html();
	});
	$(document).ready(function(){
	$('#LeftPanel').click(function() {
		$('#LeftPanel').slideToggle(2000);
	});
	var li = $('#header .menu li').html();
	
});