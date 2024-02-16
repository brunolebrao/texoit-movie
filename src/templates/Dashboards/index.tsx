'use client';

import React, { useEffect } from 'react';

import { BarChart } from 'components/BarChart';
import DataGrid from 'components/DataGrid';
import { PieChart } from 'components/PieChart';

import { Box, Grid, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useMovies } from 'hooks/useMovies';

export const DashboardTemplate = () => {
  const { onGetMovieMaxMinInterval, maxMinInterval } = useMovies();

  useEffect(() => {
    onGetMovieMaxMinInterval();
  }, [onGetMovieMaxMinInterval]);

  const columns: GridColDef[] = [
    { field: 'producer', headerName: 'Producer', width: 130 },
    { field: 'interval', headerName: 'Interval', width: 80 },
    { field: 'previousWin', headerName: 'PreviousWin', width: 130 },
    { field: 'followingWin', headerName: 'FollowingWin', width: 130 }
  ];
  return (
    <>
      <Grid container>
        <Grid item xs={8}>
          <BarChart />
        </Grid>
        <Grid item xs={4}>
          <PieChart />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs>
          {maxMinInterval.max && (
            <>
              <Typography variant="h4">Maximum</Typography>
              <DataGrid data={maxMinInterval.max} columns={columns} />
            </>
          )}
        </Grid>
      </Grid>
      <Box sx={{ mt: '3rem' }}>
        <Grid container spacing={5}>
          <Grid item xs>
            {maxMinInterval.min && (
              <>
                <Typography variant="h4">Minimum</Typography>
                <DataGrid data={maxMinInterval.min} columns={columns} />
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
