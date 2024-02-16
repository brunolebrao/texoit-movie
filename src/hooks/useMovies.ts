import { useCallback, useState } from 'react';

import api from 'service/api';

type Studio = {
  name: string;
  winCount: number;
};

type Studios = {
  studios: Studio[];
};

export type Internal = {
  id: number;
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
};

export type MinMax = {
  min: Internal[];
  max: Internal[];
};

export type ResponseContentData = {
  id: number;
  year: number;
  title: string;
  studios: string[];
  producers: string[];
  winner: boolean;
};

export type ContentData = {
  content: ResponseContentData[];
  size: number;
  numberOfElements: number;
  totalPages: number;
  totalElements: number;
  number: number;
};

export type yearWithMultipleWinners = {
  year: number;
  winnerCount: number;
};

export type yearsWithMultipleWinners = {
  years: yearWithMultipleWinners[];
};

export const useMovies = () => {
  const [moviesData, setMoviesData] = useState<ContentData>({
    content: [],
    size: 0,
    numberOfElements: 0,
    totalPages: 0,
    totalElements: 0,
    number: 0
  });
  const [yearsWithMultipleWinners, setYearsWithMultipleWinners] =
    useState<yearsWithMultipleWinners>({ years: [] });
  const [maxMinInterval, setMaxMinInterval] = useState<MinMax>({
    min: [],
    max: []
  });
  const [studiosWithWin, setStudiosWithWin] = useState<Studios>({
    studios: []
  });

  const onGetMovie = useCallback(async (page: number, pageSize: number) => {
    await api
      .get<ContentData>(`/movies?page=${page}&size=${pageSize}`)
      .then(({ data }) => {
        setMoviesData(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const onGetMovieYearsWithMultipleWinners = useCallback(async () => {
    await api
      .get<yearsWithMultipleWinners>(
        '/movies?projection=years-with-multiple-winners'
      )
      .then(({ data }) => {
        setYearsWithMultipleWinners(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const onGetMovieMaxMinInterval = useCallback(async () => {
    await api
      .get<MinMax>('/movies?projection=max-min-win-interval-for-producers')
      .then(({ data }) => {
        setMaxMinInterval(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  const onGetMovieStudiosWithWin = useCallback(async () => {
    await api
      .get<Studios>('/movies?projection=studios-with-win-count')
      .then(({ data }) => {
        setStudiosWithWin(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return {
    moviesData,
    onGetMovie,
    onGetMovieYearsWithMultipleWinners,
    yearsWithMultipleWinners,
    onGetMovieMaxMinInterval,
    maxMinInterval,
    onGetMovieStudiosWithWin,
    studiosWithWin
  };
};
