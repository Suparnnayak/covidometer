google.load("visualization", {packages:["corechart"]});
google.setOnLoadCallback(drawStuff2);

      function drawStuff2() {
        var data = new google.visualization.arrayToDataTable([
          ['Date',        'Covid daily cases'],
          ['dec 30 2019', 0],
          ['jan 22 2020', 988],
          ['mar 14 2020', 20410 ],
          ['may 5 2020',  82259 ],
          ['jun 26 2020', 187115],
          ['aug 17 2020', 207191],
          ['oct 9 2020',  378092],
          ['nov 29 2020', 527615],
          ['jan 21 2021', 635739],
          ['mar 13 2021', 453471],
          ['may 5 2021',  861118],
          ['jun 25 2021', 416394],
          ['aug 15 2021', 207191],
          ['oct 7 2021',  378092],
          ['nov 29 2021', 646494],
          ['jan 19 2022', 3453453],
          ['mar 12 2022', 1763707],
          ['may 03 2022', 1340903],
          ['jun 25 2022', 504296],
          ['aug 15 2022', 598222],
          ['oct 6 2022',  600030],
          ['nov 27 2022', 356736],
          ['jan 18 2023', 337443],
          ['mar 11 2023', 118858],
          ['may 2 2023',  70481],
          ['jun 23 2023', 39450],
          ['aug 14 2023', 64730],
          ['oct 05 2023', 44087],
          ['nov 26 2023', 140354],
          ['jan 17 2024', 77549],
          ['mar 9 2024',  19002]
        ]);
        

        var options = {
          title: 'Daily cases',
          width: 900,
          legend: { position: 'none' },
          chart: { title: 'daily new cases',
                   subtitle: 'cases per day' },
          bars: 'horizontal', // Required for Material Bar Charts.
          axes: {
            x: {
              0: { side: 'top', label: 'covid daily cases'} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('bar_graph1'));
        chart.draw(data, options);
      };
      $(window).resize(function(){
        drawSuff2();
        
      });