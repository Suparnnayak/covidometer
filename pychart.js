google.load("visualization", {packages:["corechart"]});
google.setOnLoadCallback(drawChart5);
      function drawChart5() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['United States: 14.30 %',  111820082],
          ['India: 6.30 %',           49035393],
          ['France: 5.10 %',          40138560],
          ['Germany: 4.90 %',         38828995],
          ['Brazil: 4.90 %',          38743918],
          ['South Korea: 4.40 %',     34571873],
          ['Japan: 4.30 %',           33803572],
          ['Italy: 3.40 %',           26723249],
          ['United Kingdom: 3.2 %',   24910387],
          ['Russia: 3.1 %',           24124215],
          ['Other: 46.1 %',           361818217]  
        ]);

        var options = {
          title: 'Distribution of cases',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
      $(window).resize(function(){
        drawChart5();
        
      });