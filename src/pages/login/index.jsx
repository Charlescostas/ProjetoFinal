
import { TextField, FormControl, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dataUsuario from '../../UsuariosJson.json'
import dataLocalidade from '../../LocalidadeJson.json'
import styles from './style.module.css';

export function Login() {
    const [dadologin,setLogin] = useState({eMail: '',senha: ''})    
    const navigate = useNavigate();

    //*********************************************************/
    //********** carrega usuario no localStorage ****************/
    //*********************************************************/
    function getCarregaUsuario() {
        const usuarioStorage = localStorage.getItem('Usuarios');
        if (!usuarioStorage) {
            localStorage.setItem('Usuarios', JSON.stringify(dataUsuario))
        }

        const localidadeStorage = localStorage.getItem('Localidades');
        if (!localidadeStorage) {
            localStorage.setItem('Localidades', JSON.stringify(dataLocalidade))
        }
    }

    useEffect(() => {
        getCarregaUsuario()
    }, [])

    function cadastrar() { navigate("/usuario"); }

    function acessar() {
        let isAcesso = false;
        const usuarioStorage = localStorage.getItem('Usuarios');

        JSON.parse(usuarioStorage).forEach(usuario => {
        if ((usuario.eMail === dadologin.eMail) && (usuario.senha === dadologin.senha)) {
                localStorage.setItem('UserLog', JSON.stringify(usuario)) 
                isAcesso = true;
            }
        });

        if (isAcesso) navigate("/dashboard");
        else { alert('E-mail ou senha incorreta!!'); }
    }

    return (
        <div className={styles.container}>
            <img src="/logo.png" alt="Ativa 365" />

            <FormControl>
                <h1>Efetuar login</h1>
                <TextField
                    required
                    id="idemail"
                    label="E-mail"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    autoComplete='false'
                    value={dadologin.eMail}
                    onChange={event => {
                        setLogin(prevState => ({
                            ...prevState,
                            eMail: event.target.value
                        }));
                    }} />
                <TextField
                    required
                    id="idpassword"
                    label="Senha"
                    type='password'
                    variant="outlined"
                    margin="normal"
                    autoComplete='false'
                    value={dadologin.senha}
                    onChange={event => {
                        setLogin(prevState => ({
                            ...prevState,
                            senha: event.target.value
                        }));
                    }} />
                <Stack direction="column" spacing={2}>
                    <Button
                        variant="contained"
                        color="success"
                        margin="App"
                        onClick={acessar}
                    >Entrar
                    </Button>

                    <Button
                        variant="outlined"
                        color="success"
                        onClick={cadastrar}>
                        Cadastra-se
                    </Button>
                </Stack>
            </FormControl>
        </div>
    );
}
