import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';



export default function DataGridComponent(props) {
    const { rows, columns, handleRowClick } = props;

    return (
        <div style={{ height: 300, width: '100%', backgroundColor: "#fff" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                onRowClick={handleRowClick}
            />
        </div>
    );
}
