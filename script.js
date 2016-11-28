$(function(){

	$("form").submit(function(evt){
		evt.preventDefault();
		
		//var with input field value
		var tag = $("input").val();

		//ajax part
		var feed = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var options = {
			format : "json"
		}

		function display(data){
			console.log(data.items[0].link + " " + data.items[0].title);

			var photoHTML = "<li><img src=" + data.items[0].media.m + "><p class='title'>" + data.items[0].title + "</p></li>"
			$("#photos").html(photoHTML);
		};

		$.getJSON(feed, options, display);

	})


}); //end ready