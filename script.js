$(function(){

	$("form").submit(function(evt){
		evt.preventDefault();
		console.log("test");
	})

	var tag = $("form").value;

}); //end ready