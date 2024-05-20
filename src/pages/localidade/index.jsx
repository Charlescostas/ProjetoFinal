import { 
    Box,
    Button,
    MenuItem, 
    MenuList, 
    Paper, 
    Stack, 
    TextField, 
    Typography 
} from '@mui/material'
import { Link } from 'react-router-dom'
import { CornerUpLeft } from 'lucide-react'
import { HoorsLocalidade } from '../../hooks/hoorsLocalidade'
import styles from "./style.module.css"

export function Localidade() {  
    const {localidade,setLocalidade,usuarioIn,dashboardIn,locaisIn,handleBuscaCep,handleCadastrar} 
        = HoorsLocalidade()
    
    return (
        <>
            <div className={styles.containerMenu}>
                <img src="/logo.png" alt="Ativa 365" />
                <Stack marginTop={'34px'} direction="column" spacing={2}>
                    <Paper marginTop={15} color='#5ae671'>
                        <MenuList>
                            <MenuItem onClick={dashboardIn}>Dashborad</MenuItem>
                            <MenuItem onClick={locaisIn}>Local</MenuItem>
                            <MenuItem onClick={usuarioIn} >Usuários</MenuItem>
                        </MenuList>
                    </Paper>                
                </Stack>
                <CornerUpLeft size={20}></CornerUpLeft>
                <Link to={-1}>Voltar</Link>
            </div>
            
            <div className={styles.container}>
                <Typography variant="h5" color="#000000" marginLeft="50px" marginTop="30px" >Cadastro de localidade</Typography>
                <Typography color="#000000" marginLeft="60px" marginTop="1px" >Forneça todos os detalhes necessários para adicionar sua localização preferida para a prática de atividades físicas.</Typography>
                
                <div className={styles.localidade}>
                    <Box display="flex" alignItems="center" gap={2} width="100%" mt={2} marginLeft="20px">
                        <TextField
                            required 
                            label="Nome do Local"
                            variant="filled" 
                            placeholder='Digite o Local'
                            size="small"
                            sx={{flex: 1,}}
                            value={localidade.local}
                            onChange={event => {
                                setLocalidade(prevState => ({
                                    ...prevState, 
                                    local: event.target.value
                                }))
                            }}
                        /> 
                        <TextField
                            required 
                            label="Pratica esportiva"
                            variant="filled" 
                            placeholder='Digite a pratica esportiva'
                            size="small"
                            sx={{flex: 2,}}
                            value={localidade.pratica}
                            onChange={event => {
                                setLocalidade(prevState => ({
                                    ...prevState, 
                                    pratica: event.target.value
                                }))
                            }}
                        />
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} width="100%" mt={2} marginLeft="20px">
                        <TextField
                            label="Descrição"
                            variant="filled" 
                            placeholder='Digite a descrição'
                            size="small"
                            sx={{flex: 1,}}
                            value={localidade.descri}
                            onChange={event => {
                                setLocalidade(prevState => ({
                                    ...prevState, 
                                    descri: event.target.value
                                }))
                            }}
                        /> 
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} width="100%" mt={2} marginLeft="20px">
                        <TextField
                            required 
                            label="CEP"
                            variant="filled" 
                            placeholder='Digite o CEP'
                            size="small"
                            sx={{flex: 1,}}
                            value={localidade.cep}
                            onChange={event => {
                                setLocalidade(prevState => ({
                                    ...prevState, 
                                    cep: event.target.value
                                }))
                            }}
                            onBlur={() => {
                                {setLocalidade(handleBuscaCep())}
                            }}                   
                        />
                        <TextField
                            disabled 
                            label="Logradouro"
                            variant="filled" 
                            size="small"
                            sx={{flex: 2,}}
                            InputLabelProps={{shrink: true,}}
                            value={localidade.rua}
                            onChange={event => {
                                setLocalidade(prevState => ({
                                    ...prevState, 
                                    rua: event.target.value
                                }))
                            }}
                        />
                        <TextField
                            label="Complemento"
                            variant="filled" 
                            size="small"
                            sx={{flex: 1,}}
                            value={localidade.complemento}
                            onChange={event => {
                                setLocalidade(prevState => ({
                                    ...prevState, 
                                    complemento: event.target.value
                                }))
                            }}
                        />                                
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} width="100%" mt={2} marginLeft="20px">
                        <TextField
                            disabled 
                            label="Bairro"
                            variant="filled" 
                            placeholder='Digite o CEP'
                            size="small"
                            sx={{flex: 2,}}
                            InputLabelProps={{shrink: true,}}
                            value={localidade.bairro}
                            onChange={event => {
                                setLocalidade(prevState => ({
                                    ...prevState, 
                                    bairro: event.target.value
                                }))
                            }}
                        />
                        <TextField
                            disabled 
                            label="Cidade"
                            variant="filled" 
                            size="small"
                            sx={{flex: 2,}}
                            InputLabelProps={{shrink: true,}}
                            value={localidade.cidade}
                            onChange={event => {
                                setLocalidade(prevState => ({
                                    ...prevState, 
                                    cidade: event.target.value
                                }))
                            }}
                        />
                        <TextField
                            disabled 
                            label="Estado"
                            variant="filled" 
                            size="small"
                            sx={{flex: 1,}}
                            InputLabelProps={{shrink: true,}}
                            value={localidade.estado}
                            onChange={event => {
                                setLocalidade(prevState => ({
                                    ...prevState, 
                                    estado: event.target.value
                                }))
                            }}
                        />                                
                    </Box>
                    <Box display="flex" alignItems="center" gap={2} width="100%" mt={2} marginLeft="20px">
                        <TextField
                            disabled 
                            label="Altitude"
                            variant="filled" 
                            size="small"
                            sx={{flex: 1}}
                            InputLabelProps={{shrink: localidade.altitude!=='',}}
                            value={localidade.altitude}
                            onChange={event => {
                                setLocalidade(prevState => ({
                                    ...prevState, 
                                    altitude: event.target.value
                                }))
                            }}
                        />
                        <TextField
                            disabled 
                            label="Latitude"
                            variant="filled" 
                            size="small"
                            sx={{flex: 1,}}
                            InputLabelProps={{shrink: localidade.latitude!=='',}}
                            value={localidade.latitude}
                            onChange={event => {
                                setLocalidade(prevState => ({
                                    ...prevState, 
                                    latitude: event.target.value
                                }))
                            }}
                        />
                        <TextField
                            disabled 
                            label="Longitude"
                            variant="filled" 
                            size="small"
                            sx={{flex: 1,}}
                            InputLabelProps={{shrink: localidade.longitude!=='',}}
                            value={localidade.longitude}
                            onChange={event => {
                                setLocalidade(prevState => ({
                                    ...prevState, 
                                    longitide: event.target.value
                                }))
                            }}
                        /> 
                        <TextField
                            disabled 
                            label="Codigo IBGE"
                            variant="filled" 
                            size="small"
                            sx={{flex: 1,}}
                            InputLabelProps={{shrink: true,}}
                            value={localidade.codIbge}
                            onChange={event => {
                                setLocalidade(prevState => ({
                                    ...prevState, 
                                    codIbge: event.target.value
                                }))
                            }}
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
            </div>
        </>
    )
}