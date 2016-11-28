$(function(){

	$("form").submit(function(evt){
		evt.preventDefault();
		
		//var with input field value
		var tagSearch = $("input").val();

		//ajax part
		var feed = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var options = {
			format : "json",
			tags :  tagSearch
		}

		function display(data){
			var photoHTML = "";
			$.each(data.items, function(i, photo){
				photoHTML += "<li><div class='photocontainer'><img src="; 
				photoHTML += data.items[i].media.m; 
				photoHTML += "</p></div></li>";
			}) // end foreach function
			photoHTML += "<div class='clearfix'></div>";
			$("#photos").html(photoHTML);

		}; //end of display function

		$.getJSON(feed, options, display);

	}); //end of form function

}); //end ready