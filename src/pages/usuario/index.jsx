import { Button, TextField, Box, Select, MenuItem, FormControl, InputLabel, Stack } from '@mui/material';
import { Link } from 'react-router-dom'
import { HoorsUsuario } from '../../hooks/hoorsUsuario';
import { CornerUpLeft } from 'lucide-react';
import styles from './style.module.css'

export function Usuario() {
    const {dados,setUsuario, handleBuscaCep,handleCadastrar,handleConsultaUsuario} = HoorsUsuario()

  return (
        <>
        <div className={styles.container} >
            <h2 className={styles.h2}> Cadastro de Usuário </h2>
            <Box display="flex" alignItems="center" gap={2} width="100%" mt={2}>
                <TextField
                    required 
                    label="CPF"
                    variant="filled" 
                    placeholder='Digite o Cpf'
                    size="medium"
                    value={dados.cpf}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            cpf: event.target.value
                        }))
                    }}
                    sx={{flex: 1,}}
                    onBlur={() => handleConsultaUsuario()}
                /> 
                <TextField
                    required 
                    label="Nome"
                    variant="filled" 
                    placeholder='Digite o Nome'
                    size="medium"
                    sx={{flex: 2,}}
                    value={dados.nome}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            nome: event.target.value
                        }))
                    }}
                />
            </Box>
            <Box display="flex" alignItems="center" gap={2} width="100%" mt={2}>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel variant="filled">Sexo</InputLabel>
                    <Select
                        variant="filled"
                        size="medium"
                        sx={{flex: 1,}}
                        value={dados.sexo}
                        label="Sexo"
                        onChange={event => {setUsuario(prevState => ({
                                ...prevState, 
                                sexo: event.target.value
                            }))
                        }}>   
                        <MenuItem value={'Masculino'}>Masculino</MenuItem>
                        <MenuItem value={'Feminino'}>Feminino</MenuItem>
                    </Select>
                </FormControl>
                <TextField 
                    label="Data de Nascimento"
                    variant="filled" 
                    placeholder='Informe a Data de Nascimento'
                    size="medium"
                    type="date"
                    InputLabelProps={{shrink: true,}}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            dtNascimento: event.target.value
                        }))
                    }} 
                    value={dados.dtNascimento}
                    sx={{flex: 1,}}
                />
                <TextField
                    required 
                    label="E-Mail"
                    variant="filled" 
                    placeholder='Digite o E-mail'
                    size="medium"
                    sx={{flex: 2,}}
                    value={dados.eMail}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            eMail: event.target.value
                        }))
                    }}                    
                />                                                  
                <TextField
                    required 
                    label="Senha"
                    variant="filled" 
                    placeholder='Digite a Senha'
                    size="medium"
                    type="password"
                    sx={{flex: 1,}}
                    value={dados.senha}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            senha: event.target.value
                        }))
                    }}
                />    
            </Box>
            <h2 className={styles.h2}> Endereço </h2>
            <Box display="flex" alignItems="center" gap={2} width="100%" mt={2}>
                <TextField 
                    required 
                    label="CEP"
                    value={dados.cep}
                    variant="filled" 
                    placeholder='Digite o CEP'
                    size="medium"
                    sx={{flex: 1,}}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            cep: event.target.value.replace(/[^0-9]/g, '')
                        }))
                    }}
                    onBlur={() => {setUsuario(handleBuscaCep())}}
                />
                <TextField
                    disabled 
                    label="Logradouro"
                    variant="filled" 
                    size="medium"
                    InputLabelProps={{shrink: true,}}
                    value={dados.logradouro}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            teste: event.target.value
                        }))
                    }}
                    sx={{flex: 2,}}
                />
                <TextField
                    label="Complemento"
                    variant="filled" 
                    size="medium"
                    sx={{flex: 1,}}
                    value={dados.complemento}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            complemento: event.target.value
                        }))
                    }}
                />                                
            </Box>
            <Box display="flex" alignItems="center" gap={2} width="100%" mt={2}>
                <TextField
                    disabled 
                    label="Bairro"
                    variant="filled" 
                    size="medium"
                    InputLabelProps={{shrink: true,}}
                    value={dados.bairro}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            Bairro: event.target.value
                        }))
                    }}
                    sx={{flex: 2,}}
                />
                <TextField
                    disabled 
                    label="Cidade"
                    variant="filled" 
                    size="medium"
                    InputLabelProps={{shrink: true,}}
                    value={dados.cidade}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            cidade: event.target.value
                        }))
                    }}
                    sx={{flex: 2,}}
                />
                <TextField
                    disabled 
                    label="Estado"
                    variant="filled" 
                    size="medium"
                    InputLabelProps={{shrink: true,}}
                    value={dados.estado}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            estado: event.target.value
                        }))
                    }}
                    sx={{flex: 1,}}
                />                                
            </Box>
            <Box display="flex" alignItems="center" gap={2} width="100%" mt={2}>
                <TextField
                    disabled={dados.altitude!==''}
                    InputLabelProps={{shrink: dados.altitude!=='',}}
                    label="Altitude"
                    variant="filled" 
                    size="medium"
                    value={dados.altitude}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            altitude: event.target.value
                        }))
                    }}
                    sx={{flex: 1}}
                />
                <TextField
                    disabled={dados.latitude!==''}
                    InputLabelProps={{shrink: dados.latitude!=='',}}
                    label="Latitude"
                    variant="filled" 
                    size="medium"
                    value={dados.latitude}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            latitude: event.target.value
                        }))
                    }}
                    sx={{flex: 1,}}
                />
                <TextField
                    disabled={dados.longitude!==''}
                    InputLabelProps={{shrink: dados.longitude!=='',}}
                    label="Longitude"
                    variant="filled" 
                    size="medium"
                    value={dados.longitude}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            longitude: event.target.value
                        }))
                    }}
                    sx={{flex: 1,}}
                /> 
                <TextField
                    disabled 
                    label="Codigo IBGE"
                    variant="filled" 
                    size="medium"
                    InputLabelProps={{shrink: true,}}
                    value={dados.codIBGE}
                    onChange={event => {
                        setUsuario(prevState => ({
                            ...prevState, 
                            codIBGE: event.target.value
                        }))
                    }}
                    sx={{flex: 1,}}
                />                                                
            </Box>
            <br/>
            <Stack direction="row" spacing={2}>
                <Button 
                    variant="contained"
                    color="success"
                    margin="App"
                    onClick={() => handleCadastrar()}
                    >Cadastrar  
                </Button>            
                <Button 
                    variant="contained"
                    color="success"
                    margin="App"
                    
                    onClick={() => window.location.reload(false)}
                    >Limpar  
                </Button> 
            </Stack>
        </div>
        <CornerUpLeft size={20}></CornerUpLeft>
        <Link to={-1}>Voltar</Link>
        </>
    );
}
