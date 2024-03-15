import React from "react";
import Navbar from "../components/Navbar";
import { Grid, Paper, Typography } from "@mui/material";
import { paperStyle } from "../utils";
import DataGridComponent from '../components/DataGridComponent';


export default function Quartos() {
    return (
        <React.Fragment>
            <Navbar />
            <Grid container justifyContent={"center"}>
                <h1>Gestão de Quartos</h1>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Paper sx={paperStyle}>
                    <DataGridComponent 
                        rows={rows}
                        columns={columns}
                    />
                </Paper>
            </Grid>
        </React.Fragment>
    );
}


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150 },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];