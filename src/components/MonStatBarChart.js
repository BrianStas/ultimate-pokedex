import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
  );
  
   
  
  export default function MonStatBarChart ({monCard}) {
    const options = {
      indexAxis: 'y', 
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      scales: {
        x: {
          max: 255
        }
      },
      plugins: {
        legend: {
          position: 'right'
        },
        title: {
          display: true,
          text: `${monCard.name}`,
        },
      },
    };
    
    const labels = ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'];
    
    const data = {
      labels,
      datasets: [
        {datalabels: {
          color: '#000000'
        },
          label: 'Dataset 1',
          data: monCard.stats.map((stat)=> stat.base_stat),
          borderColor: ['rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'],
          backgroundColor: ['rgba(255, 99, 132)',
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(201, 203, 207)'],
        },
      ],
    };

    return <Bar options={options} data={data} />;
  }