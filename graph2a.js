google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Date', 'Recovery Rate', 'Death Rate'],
        ['Feb 02 2020', .5676,.4324],
        ['Mar 05 2020', .9423,.0577],
        ['Mar 22 2020', .8659,.1341],
        ['Apr 05 2020', .8030,.1970],
        ['May 10 2020', .8639,.1361],
        ['Jun 28 2020', .9220,0.078],
        ['Aug 16 2020', .9484,0.0516],
        ['Oct 04 2020', .9617,0.0383],
        ['Nov 22 2020', .9678,.0322],
        ['Jan 10 2021', .9720,.028],
        ['Feb 28 2021', .9738,.0262],
        ['Apr 18 2021', .9751,.0249],
        ['Jun 06 2021', .9769,.0231],
        ['Jul 25 2021', .9772,.0228],
        ['Sep 12 2021', .9778,.0222],
        ['Oct 31 2021', .9786,.0214],
        ['Dec 19 2022', .9791,.0209],
        ['Feb 06 2022',.9828,.0172],
        ['Mar 27 2022', .9862,.0138],
        ['May 15 2022',.9875,.0125],
        ['Jul 03 2022', .9881,.0119],
        ['Aug 21 2022', .9888,.0112],
        ['Oct 09 2022', .9892,.0108],
        ['Nov 27 2023', .9894,.0106],
        ['Jan 15 2023', .9896,.0104],
        ['Mar 05 2023', .9896,.0104],
        ['Apr 23 2023', .9897,.0103],
        ['Jun 11 2023',.9897,.0103],
        ['Jul 30 2023', .9897,.0103],
        ['Sep 17 2023', .9897,.0103],
        ['Nov 05 2023', .9897,.0103],
        ['Dec 24 2024', .9897,.0103],
        ['Feb 11 2024', .9897,.0103],
        ['Mar 31 2024', .9897,.0103],
    ]);

    var options = {
      title: 'Outcome of Cases (Recovery rate vs Death rate)',
      curveType: 'function',
      legend: { position: 'right' },
      hAxis: {
        title: 'Date',
        format: 'MMM dd yyyy'
      },
      vAxis: {
        title: 'Percent(%)',
        format: 'percent'
      }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart7'));

    chart.draw(data, options);
}