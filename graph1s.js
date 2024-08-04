
google.load("visualization", {packages:["corechart"]});
google.setOnLoadCallback(drawChart1);

function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Day','Brazil','India','Russia', 'United Kingdom', 'United States'],
          ['0',   0,       0,        0,        0,          0],
          ['250', 6767713, 10075422 ,2681256  ,1680110,    12869047],
          ['500', 20467705,32557767 ,6766541  ,6164702,    36342897],
          ['750', 30355919,43091393 ,18174991 ,21707235,   82233475],
          ['1000',36354255,44681355, 21810511 ,24110398,  102097299],
          ['1250',37779799,44998162, 23003453 ,24685994,   107934745],
          ['1500',38743918,45035393, 24124215 ,24910387,   111820082],
        ]);

        var options = {
          title: 'Cumulative number of cases in major countries,by number of days since 10,000cases',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart1'));

        chart.draw(data, options);
      }
      $(window).resize(function(){
        drawChart1();
         
      });
      