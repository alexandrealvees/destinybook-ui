import React from 'react';
import { Grid, TextField, Button, FormControl } from '@mui/material';
import { buttonStyle } from '../utils';
import axios from 'axios';

export default function AddClientTable(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData);
        let data = {
            nomeCompleto: formData.get('nomeCompleto'),
            paisOrigem: formData.get('paisOrigem'),
            cpf: formData.get('cpf'),
            passaporte: formData.get('passaporte'),
            dataNascimento: formData.get('dataNascimento'),
            endereco: formData.get('endereco'),
            telefone: formData.get('telefone'),
            email: formData.get('email')
        };
        axios.post("http://localhost:8080/clientes", data).then((response) => {
            console.log(response);
        });
    };

    return (
        <React.Fragment>
            <Grid container justifyContent={"center"}>
                <h1>Adicionar Cliente</h1>
                <Grid item xs={12}>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                required
                                id="nomeCompleto"
                                label="Nome Completo"
                                name="nomeCompleto"
                                sx={{
                                    input: { color: '#fff' }, // Muda a cor do texto inserido
                                    '& label': { color: '#fff' }, // Muda a cor do label quando não está focado
                                    '& .MuiInput-underline:before': { borderBottomColor: '#fff' }, // Cor da linha antes da interação
                                    '& .MuiInput-underline:after': { borderBottomColor: '#fff' }, // Cor da linha durante e após interação
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#fff' }, // Cor da borda para variant="outlined"
                                        '&:hover fieldset': { borderColor: '#fff' }, // Cor da borda ao passar o mouse para variant="outlined"
                                        '&.Mui-focused fieldset': { borderColor: '#fff' }, // Cor da borda quando focado para variant="outlined"
                                    },
                                    '& label.Mui-focused': { color: '#fff' }, // Muda a cor do label quando está focado
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                required
                                id="paisOrigem"
                                label="País de Origem"
                                name="paisOrigem"
                                sx={{
                                    input: { color: '#fff' }, // Muda a cor do texto inserido
                                    '& label': { color: '#fff' }, // Muda a cor do label quando não está focado
                                    '& .MuiInput-underline:before': { borderBottomColor: '#fff' }, // Cor da linha antes da interação
                                    '& .MuiInput-underline:after': { borderBottomColor: '#fff' }, // Cor da linha durante e após interação
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#fff' }, // Cor da borda para variant="outlined"
                                        '&:hover fieldset': { borderColor: '#fff' }, // Cor da borda ao passar o mouse para variant="outlined"
                                        '&.Mui-focused fieldset': { borderColor: '#fff' }, // Cor da borda quando focado para variant="outlined"
                                    },
                                    '& label.Mui-focused': { color: '#fff' }, // Muda a cor do label quando está focado
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                required
                                id="cpf"
                                label="CPF"
                                name="cpf"
                                inputProps={{ pattern: "[0-9]*" }}
                                sx={{
                                    input: { color: '#fff' }, // Muda a cor do texto inserido
                                    '& label': { color: '#fff' }, // Muda a cor do label quando não está focado
                                    '& .MuiInput-underline:before': { borderBottomColor: '#fff' }, // Cor da linha antes da interação
                                    '& .MuiInput-underline:after': { borderBottomColor: '#fff' }, // Cor da linha durante e após interação
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#fff' }, // Cor da borda para variant="outlined"
                                        '&:hover fieldset': { borderColor: '#fff' }, // Cor da borda ao passar o mouse para variant="outlined"
                                        '&.Mui-focused fieldset': { borderColor: '#fff' }, // Cor da borda quando focado para variant="outlined"
                                    },
                                    '& label.Mui-focused': { color: '#fff' }, // Muda a cor do label quando está focado
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                id="passaporte"
                                label="Passaporte"
                                name="passaporte"
                                sx={{
                                    input: { color: '#fff' }, // Muda a cor do texto inserido
                                    '& label': { color: '#fff' }, // Muda a cor do label quando não está focado
                                    '& .MuiInput-underline:before': { borderBottomColor: '#fff' }, // Cor da linha antes da interação
                                    '& .MuiInput-underline:after': { borderBottomColor: '#fff' }, // Cor da linha durante e após interação
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#fff' }, // Cor da borda para variant="outlined"
                                        '&:hover fieldset': { borderColor: '#fff' }, // Cor da borda ao passar o mouse para variant="outlined"
                                        '&.Mui-focused fieldset': { borderColor: '#fff' }, // Cor da borda quando focado para variant="outlined"
                                    },
                                    '& label.Mui-focused': { color: '#fff' }, // Muda a cor do label quando está focado
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                required
                                id="dataNascimento"
                                label="Data de Nascimento"
                                name="dataNascimento"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                sx={{
                                    input: { color: '#fff' }, // Muda a cor do texto inserido
                                    '& label': { color: '#fff' }, // Muda a cor do label quando não está focado
                                    '& .MuiInput-underline:before': { borderBottomColor: '#fff' }, // Cor da linha antes da interação
                                    '& .MuiInput-underline:after': { borderBottomColor: '#fff' }, // Cor da linha durante e após interação
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#fff' }, // Cor da borda para variant="outlined"
                                        '&:hover fieldset': { borderColor: '#fff' }, // Cor da borda ao passar o mouse para variant="outlined"
                                        '&.Mui-focused fieldset': { borderColor: '#fff' }, // Cor da borda quando focado para variant="outlined"
                                    },
                                    '& label.Mui-focused': { color: '#fff' }, // Muda a cor do label quando está focado
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                required
                                id="endereco"
                                label="Endereço no País de Origem"
                                name="endereco"
                                sx={{
                                    input: { color: '#fff' }, // Muda a cor do texto inserido
                                    '& label': { color: '#fff' }, // Muda a cor do label quando não está focado
                                    '& .MuiInput-underline:before': { borderBottomColor: '#fff' }, // Cor da linha antes da interação
                                    '& .MuiInput-underline:after': { borderBottomColor: '#fff' }, // Cor da linha durante e após interação
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#fff' }, // Cor da borda para variant="outlined"
                                        '&:hover fieldset': { borderColor: '#fff' }, // Cor da borda ao passar o mouse para variant="outlined"
                                        '&.Mui-focused fieldset': { borderColor: '#fff' }, // Cor da borda quando focado para variant="outlined"
                                    },
                                    '& label.Mui-focused': { color: '#fff' }, // Muda a cor do label quando está focado
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                required
                                id="telefone"
                                label="Telefone"
                                name="telefone"
                                sx={{
                                    input: { color: '#fff' }, // Muda a cor do texto inserido
                                    '& label': { color: '#fff' }, // Muda a cor do label quando não está focado
                                    '& .MuiInput-underline:before': { borderBottomColor: '#fff' }, // Cor da linha antes da interação
                                    '& .MuiInput-underline:after': { borderBottomColor: '#fff' }, // Cor da linha durante e após interação
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#fff' }, // Cor da borda para variant="outlined"
                                        '&:hover fieldset': { borderColor: '#fff' }, // Cor da borda ao passar o mouse para variant="outlined"
                                        '&.Mui-focused fieldset': { borderColor: '#fff' }, // Cor da borda quando focado para variant="outlined"
                                    },
                                    '& label.Mui-focused': { color: '#fff' }, // Muda a cor do label quando está focado
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                required
                                id="email"
                                label="Email"
                                name="email"
                                type="email"
                                sx={{
                                    input: { color: '#fff' }, // Muda a cor do texto inserido
                                    '& label': { color: '#fff' }, // Muda a cor do label quando não está focado
                                    '& .MuiInput-underline:before': { borderBottomColor: '#fff' }, // Cor da linha antes da interação
                                    '& .MuiInput-underline:after': { borderBottomColor: '#fff' }, // Cor da linha durante e após interação
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#fff' }, // Cor da borda para variant="outlined"
                                        '&:hover fieldset': { borderColor: '#fff' }, // Cor da borda ao passar o mouse para variant="outlined"
                                        '&.Mui-focused fieldset': { borderColor: '#fff' }, // Cor da borda quando focado para variant="outlined"
                                    },
                                    '& label.Mui-focused': { color: '#fff' }, // Muda a cor do label quando está focado
                                }}
                            />
                        </FormControl>
                        <Grid container justifyContent={"center"}>
                            <Button 
                                sx={buttonStyle}
                                type="submit">
                                Adicionar Cliente
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
