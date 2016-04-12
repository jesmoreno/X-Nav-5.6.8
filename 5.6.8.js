
tagImages = function (){

	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	//var tag = $("#tag").val();
	//alert(tag);
	$.getJSON( flickerAPI, {
		tags: "fuenlabrada",
		tagmode: "any",
		format: "json"
	})
		.done(function( data ) {
			$.each( data.items, function( i, item ) {
				$( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
			});
		})

		.fail(function() {
			console.log( "error" );
		});
};


/*$(document).ready(function() {
    $("#send").click(function(){
    	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    	var tag = $("#tag").val();
    	alert(tag);
		$.getJSON(flickerAPI, {
			tags: tag,
			tagmode: "any",
			format: "json"
		})
		.done(function( data ) {
			$.each( data.items, function( i, item ) {
				$( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
			});
		})
		.fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
		});
	});
});*/

