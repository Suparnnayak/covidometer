google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['date', 'active cases' ],
          ['dec 30 2019', 0],
          ['jan 22 2020', 971],
          ['mar 14 2020', 103402 ],
          ['may 5 2020',  1907233],
          ['jun 26 2020', 2997877],
          ['aug 17 2020', 5527786],
          ['oct 9 2020',  6613168],
          ['nov 29 2020', 13235766],
          ['jan 21 2021', 16579506],
          ['mar 13 2021', 10563209],
          ['may 5 2021',  13797184],
          ['jun 25 2021', 7374679],
          ['aug 15 2021', 12970842],
          ['oct 7 2021',  12375319],
          ['nov 29 2021', 13703357],
          ['jan 19 2022', 56131604],
          ['mar 12 2022', 34424129],
          ['may 03 2022', 17291472],
          ['jun 25 2022', 16918415],
          ['aug 15 2022', 20428366],
          ['oct 6 2022',  14344306],
          ['nov 27 2022', 15434802],
          ['jan 18 2023', 22445321],
          ['mar 11 2023', 20923849],
          ['may 2 2023',  20848917],
          ['jun 23 2023', 20459792],
          ['aug 14 2023', 21171340],
          ['oct 05 2023', 20998408],
          ['nov 26 2023', 21511485],
          ['jan 17 2024', 22514536],
          ['mar 9 2024',  22232103]
        ]);

        var options = {
          title: 'Active cases',
          curveType: 'function',
          legend: { position: 'right' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart3'));

        chart.draw(data, options);
      }