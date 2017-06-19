
var Chart = (function () {
 
        function setCrossContentStatisticsChart(data) {
		        var crossContentStatisticsChart = Highcharts.chart('crosscontent_container', {
			        chart: {
			            plotBackgroundColor: null,
			            plotBorderWidth: null,
			            plotShadow: false,
			            type: 'pie'
			        },
			        title: {
			            text: 'Distribution of Substances over ecah Vendors '
			        },
			        tooltip: {
			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			        },
			        plotOptions: {
			            pie: {
			                allowPointSelect: true,
			                cursor: 'pointer',
			                dataLabels: {
			                    enabled: false
			                },
			                showInLegend: true
			            }
			        },                
			        series: [{
			            name: 'Substance Coverage',
			            colorByPoint: true,
			            data: [{
			                name: data.content.chemadvisor.name,
			                y: data.content.chemadvisor.volume
			            }, {
			                name: data.content.synapse.name,
			                y: data.content.synapse.volume,
			                sliced: true,
			                selected: true
			            }, {
			                name: data.content.actio.name,
			                y: data.content.actio.volume
			            },{
			                name: data.content.reaxys.name,
			                y: data.content.reaxys.volume
			            }]
			        }]

			    });

        }
 
        function getCrossContent() {
            $.getJSON( "resources/content-statistics.json", setCrossContentStatisticsChart);
        }
 
        function setChart(series) {
        	getCrossContent(); 
        }
  
        return {
            setChart: setChart
        };
 
    })();
 

// $("#preselect-materials").on("click", function(){

// });

// $("#prime-search").on("keyup", function(){
// 	var searchKey = $(this).val();

// 	if(!searchKey || searchKey.length < 3) {
// 		$("#main-container").hide("slow");
// 		$("#sub-container").hide("slow");
// 		return;
// 	}

// 	$("#main-container").hide("slow");
// 	$("#sub-container").show("slow");
// 	$("#sub-container .sub-list-group").empty();
// 	if( $( "#sub-container" ).has( "h3" ) && !$( "#sub-container h3").text().length ) {
// 		$("#sub-container").prepend("<h3>Material Safety Data Sheets</h3>");
// 	}
	
// 	// if(searchKey.length < 2) return;
// 	$( ".main-list-group a:contains('"+searchKey+"')" ).clone().appendTo($("#sub-container .sub-list-group"));

// 	if($("#sub-container .sub-list-group a").length == 0)
// 	$("#sub-container h3").text("");
// });

$(".dropdown > ul > li > a").on("click", function(){
    var $a = $(this);
    alert($a.html());
    $("#chartInput").text($a.html());
    $(".dropdown").removeClass("open");
    return false;
});



