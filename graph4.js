google.load("visualization", {packages:["corechart"]});
google.setOnLoadCallback(drawStuff1);

      function drawStuff1() {
        var data = new google.visualization.arrayToDataTable([
          ['Date',        'Covid daily cases'],
          ['dec 30 2019', 3],
          ['jan 22 2020', 40],
          ['mar 14 2020', 333 ],
          ['may 5 2020',  6431 ],
          ['jun 26 2020', 7615],
          ['aug 17 2020', 6892],
          ['oct 9 2020',  6235],
          ['nov 29 2020', 11405],
          ['jan 21 2021', 17049],
          ['mar 13 2021', 9585],
          ['may 5 2021',  15333],
          ['jun 25 2021', 9045],
          ['aug 15 2021', 11154],
          ['oct 7 2021',  8086],
          ['nov 29 2021', 8516],
          ['jan 19 2022', 9547],
          ['mar 12 2022', 7174],
          ['may 03 2022', 1999],
          ['jun 25 2022', 1184],
          ['aug 15 2022', 2714],
          ['oct 6 2022',  1742],
          ['nov 27 2022', 1676],
          ['jan 18 2023', 2069],
          ['mar 11 2023', 1084],
          ['may 2 2023',  764],
          ['jun 23 2023', 469],
          ['aug 14 2023', 353],
          ['oct 05 2023', 342],
          ['nov 26 2023', 394],
          ['jan 17 2024', 703],
          ['mar 9 2024',  196]
        ]);
        

        var options = {
          title: 'Daily cases',
          width: 900,
          legend: { position: 'right' },
          chart: { title: 'daily deaths',
                   },
          bars: 'horizontal', // Required for Material Bar Charts.
          axes: {
            x: {
              0: { side: 'top', label: 'Percentage'} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('bar_graph2'));
        chart.draw(data, options);
      };
      $(window).resize(function(){
        drawStuff1();
         
      });