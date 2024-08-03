google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Date', 'Serious and Critical Cases'],
        ['Feb 02 2020', 2298],
        ['Mar 24 2020', 10490],
        ['May 14 2020', 44918],
        ['Jul 04 2020', 56733],
        ['Aug 24 2020', 59496],
        ['Oct 14 2020', 67552],
        ['Dec 04 2020', 104403],
        ['Jan 24 2021', 110498],
        ['Mar 16 2021', 87486],
        ['May 06 2021', 106495],
        ['Jun 26 2021', 85338],
        ['Aug 16 2021', 108088],
        ['Oct 06 2021', 85433],
        ['Nov 26 2021', 83447],
        ['Jan 16 2022', 94979],
        ['Mar 08 2022', 67874],
        ['Apr 28 2022', 42272],
        ['Jun 18 2022', 36030],
        ['Aug 08 2022', 44156],
        ['Sep 28 2022', 39678],
        ['Nov 18 2022', 36026],
        ['Jan 08 2023', 47500],
        ['Feb 28 2023', 40534],
        ['Apr 20 2023', 39579],
        ['Jun 10 2023', 37636],
        ['Jul 31 2023', 37136],
        ['Sep 20 2023', 38013],
        ['Nov 10 2023', 37874],
        ['Dec 31 2023', 36092],
        ['Feb 20 2024', 35687],
        ['Apr 11 2024', 34791],
    ]);

    var options = {
      title: 'Total Serious and Critical Cases',
      curveType: 'function',
      legend: { position: 'right' },
      hAxis: {
        title: 'Date',
        format: 'MMM dd yyyy'
      },
      vAxis: {
        title: 'Number of Cases'
      }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart6'));

    chart.draw(data, options);
}
