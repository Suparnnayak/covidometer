google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['date', 'total recovered'],
          ['dec 30 2019', 0],
          ['jan 22 2020', 988],
          ['mar 14 2020', 72603 ],
          ['may 5 2020',  1848339 ],
          ['jun 26 2020', 6753655],
          ['aug 17 2020', 16025693],
          ['oct 9 2020',  29986778],
          ['nov 29 2020', 49857608],
          ['jan 21 2021', 78985564],
          ['mar 13 2021', 107353142],
          ['may 5 2021',  141308643],
          ['jun 25 2021', 170368178],
          ['aug 15 2021', 191727053],
          ['oct 7 2021',  221676642],
          ['nov 29 2021', 245319525],
          ['jan 19 2022', 282647391],
          ['mar 12 2022', 419454131],
          ['may 03 2022', 493869647],
          ['jun 25 2022', 526560662],
          ['aug 15 2022', 571077808],
          ['oct 6 2022',  606092382],
          ['nov 27 2022', 624866748],
          ['jan 18 2023', 643115803],
          ['mar 11 2023', 654134512],
          ['may 2 2023',  660147513],
          ['jun 23 2023', 662456713],
          ['aug 14 2023', 665404132],
          ['oct 05 2023', 668505034],
          ['nov 26 2023', 670384103],
          ['jan 17 2024', 673035717],
          ['mar 9 2024',  673997093]
        ]);

        var options = {
          title: 'Total recovered',
          curveType: 'function',
          legend: { position: 'right' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart4'));

        chart.draw(data, options);
      }