import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useMovies } from 'hooks/useMovies';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'List years with multiple winners '
    }
  }
};

export const BarChart = () => {
  const { onGetMovieYearsWithMultipleWinners, yearsWithMultipleWinners } =
    useMovies();
  useEffect(() => {
    onGetMovieYearsWithMultipleWinners();
  }, [onGetMovieYearsWithMultipleWinners]);
  const data = {
    labels: yearsWithMultipleWinners.years.map((item) => item.year),

    datasets: [
      {
        fill: true,
        label: 'Winner',
        data: yearsWithMultipleWinners.years.map((item) => item.winnerCount),
        backgroundColor: '#cc0088'
      }
    ]
  };
  return <Bar data={data} options={options} />;
};
