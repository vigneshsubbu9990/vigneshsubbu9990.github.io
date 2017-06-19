
var Chart = (function () {
	var contentData, crossContentStatisticsChart, compareType="volume";
 
        function setCrossContentStatisticsChart(data) {
        		contentData = data;
		        crossContentStatisticsChart = Highcharts.chart('crosscontent_container', {
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
			            data: [
        						{	name: contentData.content.chemadvisor.name,
					                y: getContentNumbers(contentData.content.chemadvisor)
					            }, 
					            {
					                name: contentData.content.synapse.name,
					                y: getContentNumbers(contentData.content.synapse),
					                sliced: true,
					                selected: true
					            }, 
					            {
					                name: contentData.content.actio.name,
					                y: getContentNumbers(contentData.content.actio)
					            },
					            {
					                name: contentData.content.reaxys.name,
					                y: getContentNumbers(contentData.content.reaxys)
					            }]
			        }]
			    });

        }

        function getSeriesData() {
        	var seriesData = [
        						{	name: contentData.content.chemadvisor.name,
					                y: getContentNumbers(contentData.content.chemadvisor)
					            }, 
					            {
					                name: contentData.content.synapse.name,
					                y: getContentNumbers(contentData.content.synapse),
					                sliced: true,
					                selected: true
					            }, 
					            {
					                name: contentData.content.actio.name,
					                y: getContentNumbers(contentData.content.actio)
					            },
					            {
					                name: contentData.content.reaxys.name,
					                y: getContentNumbers(contentData.content.reaxys)
					            }];
        	return seriesData;
        }
 
        function getCrossContent() {
            $.getJSON( "resources/content-statistics.json", setCrossContentStatisticsChart);
        }
 
        function setChart(compareType) {
        	getCrossContent(); 
        }

        function resetChartData(){
        	crossContentStatisticsChart.series[0].setData(getSeriesData());
        }
  
        function getContentNumbers(contentVendor) {
        	return (compareType == "volume") ? contentVendor.volume : contentVendor.identifiers[compareType].total;

        }

        function setCompareType(compareTypeReference){
        	compareType = compareTypeReference;
        }

        function getCompareType(){
        	return compareType;
        }

        return {
            setChart: setChart,
            getSeriesData: getSeriesData,
            resetChartData: resetChartData,
            setCompareType: setCompareType
        };
 
    })();

$(".dropdown > ul > li > a").on("click", function(){
	Chart.setCompareType($(this).data("value"));
    Chart.resetChartData();
    $("#chartInput").text($(this).html());
    $(".dropdown").removeClass("open");
    return false;
});



