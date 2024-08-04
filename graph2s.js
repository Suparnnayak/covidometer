
google.load("visualization", {packages:["corechart"]});
google.setOnLoadCallback(drawChart2);

      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Day', 'Europe', 'United States'],
          ['0',    0,             0],
          ['250',  13225218,    12869047],
          ['500',  49924827,    36342897],
          ['750',  176258274,   82233475],
          ['1000', 238983644,  102097299],
          ['1250', 249857397,   107934745],
          ['1500', 253406198,   111820082],
        ]);

        var options = {
          title: 'Cumulative number of cases Europe vs USA,by number of days since 10,000cases',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart2'));

        chart.draw(data, options);
      }
      $(window).resize(function(){
         
        drawChart2();
      });