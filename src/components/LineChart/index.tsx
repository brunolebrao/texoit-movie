import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { useMovies } from 'hooks/useMovies';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
      text: 'Chart.js Line Chart'
    }
  }
};

export const LineChart = () => {
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
        label: 'interval year count',
        data: yearsWithMultipleWinners.years.map((item) => item.winnerCount),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  };
  return <Line options={options} data={data} />;
};
