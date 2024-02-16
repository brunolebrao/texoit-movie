import { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useMovies } from 'hooks/useMovies';

ChartJS.register(ArcElement, Tooltip, Legend);

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

export const PieChart = () => {
  const { onGetMovieStudiosWithWin, studiosWithWin } = useMovies();

  const studioTop3 = studiosWithWin.studios.slice(0, 3);

  useEffect(() => {
    onGetMovieStudiosWithWin();
  }, [onGetMovieStudiosWithWin]);
  const data = {
    labels: studioTop3.map((item) => item.name),
    datasets: [
      {
        label: '# of Votes',
        data: studioTop3.map((item) => item.winCount),
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
          'rgba(87, 84, 81, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
  return <Pie data={data} />;
};
