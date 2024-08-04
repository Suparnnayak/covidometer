google.load("visualization", {packages:["corechart"]});
google.setOnLoadCallback(drawChart4);

      function drawChart4() {
        var data = google.visualization.arrayToDataTable([
          ['patient count', 'USA', 'Europe','India'],
          ['0',  0 , 0,0],
          ['250',  276191,      320594,       146973],
          ['500',  642120,       1149999,     442024],
          ['750',  1029086,      1791889,     526384],
          ['1000',  1124880,     1979155,     532068],
          ['1250',  1190207,      2071058,    533291],
          ['1500',  1219487,      2101824,    533557],
           
        ]);

        var options = {
          title: 'Cumulative number of deaths Europe vs USA,by number of days since 100 deaths',
          curveType: 'function',
          legend: { position: 'right' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('graph4'));

        chart.draw(data, options);
      }
      $(window).resize(function(){
        drawChart4();
       
      });