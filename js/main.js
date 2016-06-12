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
        backgroundColor: 'rgba(54, 162, 235, 0.4)'
      }
      // , {
      //   label: 'Power',
      //   type: 'line',
      //   data: dataUtiliz,
      //   backgroundColor: 'rgba(75, 192, 192, 0.2)'
      // }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          // stacked: true
          type: 'time',
          time: {
            parser: 'DD.MM.YYYY HH:mm'
          }
        }]
      }
    }
  });

});

