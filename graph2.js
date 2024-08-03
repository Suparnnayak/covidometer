google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['patient count', 'USA', 'Russia','India','Brazil','UK',],
          ['0',  0 , 0,0,0,0],
          ['250',  276191,      49762,    146973,   175981,    73194],
          ['500',  642120,      180041,   442024,   564840,    156352],
          ['750',  1029086,     376167,   526384,   662076,    193171],
          ['1000',  1124880,    394080,   532068,   692934,    214271],
          ['1250',  1190207,    400009 ,  533291,   705313,    229446],
          ['1500',  1219487,    402756,   533557,   711380,   232112],
           
        ]);

        var options = {
          title: 'Cumulative number of deaths ,by number of days since 100 deaths',
          curveType: 'function',
          legend: { position: 'right' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('covid'));

        chart.draw(data, options);
      }