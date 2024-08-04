google.load("visualization", {packages:["corechart"]});
google.setOnLoadCallback(drawChart6);

      function drawChart6() {
        var data = google.visualization.arrayToDataTable([
          ['total covid cases','cases'],
          // ['dec 30 2019',0],
          ['jan 22 2020', 988],
          ['mar 14 2020', 218183 ],
          ['may 5 2020',  3927685 ],
          ['jun 26 2020', 10442306],
          ['aug 17 2020', 23234840],
          ['oct 9 2020',  37952396] ,
          ['nov 29 2020', 64161626],
          ['jan 21 2021', 98434157],
          ['mar 13 2021', 120372970],
          ['may 5 2021',  158550164],
          ['jun 25 2021', 181744320],
          ['aug 15 2021', 209143420],
          ['oct 7 2021',  238945426],
          ['nov 29 2021', 264335455],
          ['jan 19 2022', 342838485],
          ['mar 12 2022', 461657356],
          ['may 03 2022', 516627604],
          ['jun 25 2022', 550261673],
          ['aug 15 2022', 596913910],
          ['oct 6 2022',  626796326],
          ['nov 27 2022', 646983000],
          ['jan 18 2023', 679018296],
          ['mar 11 2023', 681932824],
          ['may 2 2023',  687718446],
          ['jun 23 2023', 690763678],
          ['aug 14 2023', 693695869],
          ['oct 05 2023', 696313840],
          ['nov 26 2023', 698638766],
          ['jan 17 2024', 702537488],
          ['mar 9 2024',  704753890], 
        ]);

        var options = {
          title: 'Total cases',
          
          curveType: 'function',
          legend: { position: 'right' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('graph5'));

        chart.draw(data, options);
      }
      $(window).resize(function(){
        drawChart6();
         
      });