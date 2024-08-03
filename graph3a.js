google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Date', 'Serious and Critical Cases'],
        ['Jan 22 2020', 17],
        ['Mar 12 2020', 5498],
        ['May 01 2020', 265330],
        ['Jun 20 2020', 554099],
        ['Aug 09 2020', 835289],
        ['Sep 28 2020', 1127927],
        ['Nov 17 2020', 1468646],
        ['Jan 06 2021', 2066866],
        ['Feb 25 2021', 2687003],
        ['Apr 16 2021', 3197718],
        ['Jun 05 2021', 3826650],
        ['Jul 25 2021', 4247551],
        ['Sep 13 2021', 4731536],
        ['Nov 02 2021', 5112726],
        ['Dec 22 2022', 5464157],
        ['Feb 10 2023', 5894551],
        ['Apr 01 2022', 6226375],
        ['May 21 2022', 6349094],
        ['Aug 29 2022', 6537334],
        ['Oct 18 2022', 6613850],
        ['Dec 07 2022', 6692306],
        ['Jan 26 2023', 6792613],
        ['Mar 17 2023', 6851425],
        ['May 06 2023', 6895434],
        ['Jun 25 2023', 6925729],
        ['Aug 14 2023', 6931035],
        ['Oct 03 2023', 6946094],
        ['Nov 22 2023', 6965245],
        ['Jan 11 2023', 6987812],
        ['Mar 01 2024', 7004919],
    ]);

    var options = {
      title: 'Total Serious and Critical Cases',
      curveType: 'function',
      legend: { position: 'right' }
      
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart8'));

    chart.draw(data, options);
}
