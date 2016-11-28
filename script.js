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
			var photoHTML = "";
			$.each(data.items, function(i, photo){
				photoHTML += "<li><img src="; 
				photoHTML += data.items[i].media.m; 
				// photoHTML += "><p class='title'>";
				// photoHTML += data.items[i].title ;
				photoHTML += "</p></li>";
			}) // end foreach function

			$("#photos").html(photoHTML);
			
		}; //end of display function

		$.getJSON(feed, options, display);

	}); //end of form function

}); //end ready