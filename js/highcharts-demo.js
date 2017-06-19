
// $(document).ready(function () {

//     // Build the chart
//     Highcharts.chart('crosscontent_container', {
//         chart: {
//             plotBackgroundColor: null,
//             plotBorderWidth: null,
//             plotShadow: false,
//             type: 'pie'
//         },
//         title: {
//             text: 'Distribution of Substances over ecah Vendors '
//         },
//         tooltip: {
//             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//         },
//         plotOptions: {
//             pie: {
//                 allowPointSelect: true,
//                 cursor: 'pointer',
//                 dataLabels: {
//                     enabled: false
//                 },
//                 showInLegend: true
//             }
//         },
//         series: [{
//             name: 'Substance Coverage',
//             colorByPoint: true,
//             data: [{
//                 name: 'ChemAdvisor - LOLI',
//                 y: 473626
//             }, {
//                 name: 'Synapse',
//                 y: 114000,
//                 sliced: true,
//                 selected: true
//             }, {
//                 name: 'Actio',
//                 y: 400000
//             },{
//                 name: 'Reaxys',
//                 y: 3000000
//             }]
//         }]
//     });
// });