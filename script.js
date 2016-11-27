$(function(){

	var feed = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var options = {
		"format" : "json"
	};

	$.getJSON(feed, options, function(result){
		alert("test");
	});
});