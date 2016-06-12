'use strict';

import Chart from 'chart.js';
import data from './data';

document.addEventListener('DOMContentLoaded', () => {
  let context = document.getElementById('chart');
  let labels = [];
  let dataUtiliz = [];
  let dataPower = [];
  let dataCapacity = [];

  data.forEach((item) => {
    labels.push(item.date);
    dataUtiliz.push(item.utilization);
    dataPower.push(item.power);
    dataCapacity.push(item.capacity);
  });

  let chart = new Chart(context, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Wind Power, MW',
        data: dataPower,
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        yAxisID: 'y1',
      }, {
        label: 'Utilization, %',
        fill: false,
        type: 'line',
        data: dataUtiliz,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        yAxisID: 'y2',
      }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            parser: 'DD.MM.YYYY HH:mm'
          }
        }],
        yAxes: [{
          id: 'y1',
          position: 'left'
        }, {
          id: 'y2',
          position: 'right'
        }]
      }
    }
  });

});

