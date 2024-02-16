'use client';
import { useEffect, useState } from 'react';

import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useMovies } from 'hooks/useMovies';

export const ListTemplate = () => {
  const { moviesData, onGetMovie } = useMovies();
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10
  });
  const filterMovies = moviesData.content?.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      year: movie.year,
      winner: movie.winner
    };
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Producer', width: 130 },
    { field: 'title', headerName: 'Interval', width: 300 },
    { field: 'year', headerName: 'PreviousWin', width: 130 },
    { field: 'winner', headerName: 'FollowingWin', width: 130 }
  ];

  useEffect(() => {
    onGetMovie(paginationModel.page, paginationModel.pageSize);
  }, [onGetMovie, paginationModel.page, paginationModel.pageSize]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={filterMovies}
        columns={columns}
        rowCount={moviesData.totalElements}
        slots={{ toolbar: GridToolbar }}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
      />
    </div>
  );
};
