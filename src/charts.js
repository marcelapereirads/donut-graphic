window.onload = function () {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     23],
        ['Eat',      77],
        ]);

        var options = {
        legend: 'none',
        pieSliceText: 'none',
        pieHole: 0.8,
        tooltip: { trigger: 'none' },
        pieSliceBorderColor: 'transparent',
        slices: {
            0: { color: 'blue' },
            1: { color: 'gray' }
        }
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }
}