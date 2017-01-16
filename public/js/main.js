/**
 * Created by phamd on 1/13/2017.
 */

Chart.defaults.scale.ticks.beginAtZero = true;
Chart.defaults.global.responsive = false;

// a dung jquery vi muon dung ajax. jquery no wrap lai xhrrequest..
$(document).ready(function() { // cai nay de chac chan la document da loaed
    const CHART = document.getElementById('myChart');

    $.get('/data/output.json', function (data) {
        // console.log(CHART);
        var lineChart = new Chart(CHART, {
            type: 'line',
            data: {
                labels: ['Safe', 'Acceptable', 'Alarm', 'Danger'],
                datasets: [
                    {
                        label: 'Speed Less than 40',
                        fill: false,
                        backgroundColor: '#00FF00',
                        borderColor: '#00FF00',
                        borderWidth: 2,
                        data: [data.speedLess40.safe, data.speedLess40.acceptable, data.speedLess40.alarm, data.speedLess40.danger]
                    },
                    {
                        label: 'Speed From 40 To 70',
                        fill: false,
                        backgroundColor: '#00FF00',
                        borderColor: '#00FF00',
                        borderWidth: 2,
                        data: [data.speedFrom40To70.safe, data.speedFrom40To70.acceptable, data.speedFrom40To70.alarm, data.speedFrom40To70.danger]
                    },
                    {
                        label: 'Speed From 70 To 100',
                        fill: false,
                        backgroundColor: '#00FF00',
                        borderColor: '#00FF00',
                        borderWidth: 2,
                        data: [data.speedFrom70To100.safe, data.speedFrom70To100.acceptable, data.speedFrom70To100.alarm, data.speedFrom70To100.danger]
                    },
                    {
                        label: 'Speed Greater than 100',
                        fill: false,
                        backgroundColor: '#00FF00',
                        borderColor: '#00FF00',
                        borderWidth: 2,
                        data: [data.speedGreater100.safe, data.speedGreater100.acceptable, data.speedGreater100.alarm, data.speedGreater100.danger]
                    }
                ]
            }
        });
    });
});
