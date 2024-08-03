
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Date', 'New Cases','New Recoveries'],
        ['Jan 22 2020', 271, 34],
        ['Mar 11 2020', 11629,1750],
        ['Apr 29 2020', 90217,52549],
        ['Jun 17 2020', 149328,112363],
        ['Aug 05 2020', 261008,204257],
        ['Sep 23 2020', 288763,307938],
        ['Nov 11 2020', 633814,369173],
        ['Dec 30 2020', 771915,627428],
        ['Feb 17 2021', 401384,569452],
        ['Apr 07 2021', 749260,550641],
        ['May 26 2021', 528918,737840],
        ['Jul 14 2021', 567412,375268],
        ['Sep 01 2021', 706398,652763],
        ['Oct 20 2021', 481710,430870],
        ['Dec 08 2021', 705674,539390],
        ['Jan 21 2022', 3827656,1990691],
        ['Jan 26 2022', 3564370,2710143],
        ['Mar 16 2022', 1965397,1813856],
        ['May 04 2022', 673167,845835],
        ['Jun 22 2022', 824880,491305],
        ['Aug 10 2022', 962702,1195477],
        ['Sep 28 2022', 594465,494749],
        ['Nov 16 2022', 466400,386396],
        ['Jan 04 2023', 479344,486380],
        ['Feb 22 2023', 174392,183457],
        ['Apr 12 2023', 112239,94410],
        ['May 31 2023', 65207,61212],
        ['Jul 19 2023', 69140,35571],
        ['Sep 06 2023', 41420,80644],
        ['Oct 25 2023', 63297,45442],
        ['Dec 13 2023', 68225,37141],
        ['Jan 31 2024', 62548,40588],
        ['Mar 20 2024', 14425,40982],
    ]);

    var options = {
      title: 'New cases over time',
      curveType: 'function',
      legend: { position: 'right' },
      hAxis: {
        title: 'Date',
        format: 'MMM dd yyyy'
      },
      vAxis: {
        title: 'New Daily Coronavirus Cases + Cured '
      }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart5'));

    chart.draw(data, options);
}