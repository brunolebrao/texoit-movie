import * as React from 'react';

import { DataGrid as MuiDataGrid, GridColDef } from '@mui/x-data-grid';
import { Internal } from 'hooks/useMovies';

type DataGridProps = {
  data: Internal[];
  columns: GridColDef[];
};

export default function DataGrid({ data, columns }: DataGridProps) {
  const newDataId = data.map((item, index) => {
    return { ...item, id: index };
  });
  return (
    <MuiDataGrid
      rows={newDataId}
      columns={columns}
      // initialState={{
      //   pagination: {
      //     paginationModel: { page: 0, pageSize: 5 }
      //   }
      // }}
      // pageSizeOptions={[5, 10]}
      hideFooterPagination
      hideFooterSelectedRowCount
      hideFooter
    />
  );
}
