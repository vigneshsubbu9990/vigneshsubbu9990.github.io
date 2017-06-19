$("#main-container").hide();
$("#preselect-materials").on("click", function(){
	$("#main-container").show("slow");
	$("#sub-container").hide("slow");
});

$("#prime-search").on("keyup", function(){
	var searchKey = $(this).val();

	if(!searchKey || searchKey.length < 1) {
		$("#main-container").hide("slow");
		$("#sub-container").hide("slow");
		return;
	}

	$("#main-container").hide("slow");
	$("#sub-container").show("slow");
	$("#sub-container .sub-list-group").empty();
	if( $( "#sub-container" ).has( "h3" ) && !$( "#sub-container h3").text().length ) {
		$("#sub-container").prepend("<h3>Material Safety Data Sheets</h3>");
	}
	
	// if(searchKey.length < 2) return;
	$( ".main-list-group a:contains('"+searchKey+"')" ).clone().appendTo($("#sub-container .sub-list-group"));

	if($("#sub-container .sub-list-group a").length == 0)
	$("#sub-container h3").text("");
});

