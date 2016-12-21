$("#main-container").hide();
$("#preselect-materials").on("click", function(){
	$("#main-container").show();
	$("#sub-container").hide();
});

$("#prime-search").on("keyup", function(){
	var searchKey = $(this).val();
	
	if(!searchKey) {
		$("#main-container").hide();
		$("#sub-container").hide();
		return;
	}

	$("#main-container").hide();
	$("#sub-container").show();
	$("#sub-container .sub-list-group").empty();
	if( $( "#sub-container" ).has( "h3" ) && !$( "#sub-container h3").text().length ) {
		$("#sub-container").prepend("<h3>Material Safety Data Sheets</h3>");
	}
	
	// if(searchKey.length < 2) return;
	$( ".main-list-group a:contains('"+searchKey+"')" ).clone().appendTo($("#sub-container .sub-list-group"));

	if($("#sub-container .sub-list-group a").length == 0)
	$("#sub-container h3").text("");
});