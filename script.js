$(function(){

	var feed = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";


	$.getJSON(feed, function(result){
		alert("test");
	});
});