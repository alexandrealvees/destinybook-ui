import React from "react";
import Navbar from "../components/Navbar";
import DataGridComponent from "../components/DataGridComponent";
import { Button, Grid, Paper } from "@mui/material";
import { paperStyle, buttonStyle } from "../utils";
import AddClientTable from "../components/AddClientTable";


export default function Clientes() {
    const [ addClient, setAddClient ] = React.useState(false);
    const [ selectedRow, setSelectedRow ] = React.useState({});

    const createClient = () => {
        setAddClient(true);
    };

    const handleRowClick = (params) => {
        console.log(params.row);
    };

    return (
        <React.Fragment>
            <Navbar />
            <Grid container justifyContent={"center"}>
                <h1>Gestão de Clientes</h1>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Paper sx={paperStyle}>
                    <Grid container justifyContent={"center"}>
                        <Grid item xs={12}>
                            <Grid container justifyContent={"center"}>
                                <Grid item xs={4} sx={{marginBottom: "10px"}}>
                                    <Grid container justifyContent={"center"}>
                                        <Button
                                            sx={buttonStyle}
                                            onClick={() => {
                                                createClient();
                                            }}
                                        >
                                        Adicionar Cliente
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                    <Grid container justifyContent={"center"}>
                                        <Button sx={buttonStyle}>Remover Cliente</Button>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                    <Grid container justifyContent={"center"}>
                                        <Button sx={buttonStyle}>Editar Cliente</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <DataGridComponent
                        rows={rows}
                        columns={columns}
                        handleRowClick={handleRowClick}
                    />
                </Paper>
            </Grid>
            { addClient &&
                <Grid container justifyContent={"center"} sx={{marginTop: "8px"}}>
                    <Paper sx={paperStyle}>
                        <AddClientTable />
                    </Paper>
                </Grid>
            }
        </React.Fragment>
    );
}


const columns = [
    { field: 'pais_origem', headerName: 'País de Origem', width: 150 },
    { field: 'cpf', headerName: 'CPF', width: 150 },
    { field: 'passaporte', headerName: 'Passaporte', width: 150 },
    { field: 'nome', headerName: 'Nome Completo', width: 150 },
    { field: 'data_nascimento', headerName: 'Data de Nascimento', width: 150 },
    { field: 'endereco', headerName: 'Endereço no País de Origem', width: 150 },
    { field: 'email', headerName: 'E-mail', width: 150 },
];

const rows = [
    { id: 1, pais_origem: 'Brasil', cpf: '123.456.789-00', passaporte: '123456789', nome: 'Jon Snow', data_nascimento: '01/01/1990', endereco: 'Rua dos Bobos, nº 0', email: 'jonsnow@gmail.com'},
    { id: 2, pais_origem: 'Brasil', cpf: '123.456.789-00', passaporte: '123456789', nome: 'Cersei Lannister', data_nascimento: '01/01/1990', endereco: 'Rua dos Bobos, nº 0', email: 'cersei@gmail.com'},
    { id: 3, pais_origem: 'Brasil', cpf: '123.456.789-00', passaporte: '123456789', nome: 'Jaime Lannister', data_nascimento: '01/01/1990', endereco: 'Rua dos Bobos, nº 0', email: 'jaime@gmail.com'},
    { id: 4, pais_origem: 'Brasil', cpf: '123.456.789-00', passaporte: '123456789', nome: 'Arya Stark', data_nascimento: '01/01/1990', endereco: 'Rua dos Bobos, nº 0', email: 'arya@gmail.com'},
];