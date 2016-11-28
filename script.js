$(function(){

	$("form").submit(function(evt){
		evt.preventDefault();
		
		//deactivate search field and button
		$("input").prop("disabled", true);
		$("button").prop("disabled", true).text("Seaching...");

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
				photoHTML += "<li>"; 
				photoHTML += "<div class='photocontainer'><img src="; 
				photoHTML += data.items[i].media.m; 
				photoHTML += "</div></li>";
			}) // end foreach function
			photoHTML += "<div class='clearfix'></div>";
			$("#photos").html(photoHTML);

			//reactivate search field and button after search
			$("input").prop("disabled", false);
			$("button").prop("disabled", false).text("Search again");

		}; //end of display function

		$.getJSON(feed, options, display);

	}); //end of form function

}); //end ready