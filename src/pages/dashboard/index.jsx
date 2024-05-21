import { 
    Box, 
    Card, 
    CardContent, 
    Grid, 
    MenuItem, 
    MenuList, 
    Paper, 
    Stack, 
    Typography 
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { Users,MapPinned, CornerUpLeft,AlignJustify } from 'lucide-react'
import { Tgraphy } from '../../components/typography'
import { useEffect, useState } from 'react'
import styles from "./style.module.css"
import {TablePage} from '../../components/table'
import 'leaFlet/dist/leaflet.css'
import { MapMak } from '../mapas'

export function Dashboard() {   
    const navigate = useNavigate()
    const [qtdUsuario,setQtdUsuario] = useState(0)
    const [qtdLocais,setQtdLocais] = useState(0)
    const [isAcessaMap,setIsAcessa] = useState(false)
    const [isAcessaTable,setIsAcessaTable] = useState(true)

    function fAcessaMap() {
        setIsAcessa(true),
        setIsAcessaTable(false)
    } 

    function fAcessaTable() {
        setIsAcessa(false),
        setIsAcessaTable(true)
    } 
    
    useEffect(() => {
        let qtdUser = 0
        let qtdLoca = 0
        const usuarioStorage = JSON.parse(localStorage.getItem('Usuarios'))
        const localidadeStorage = JSON.parse(localStorage.getItem('Localidades'))
 
        if(localidadeStorage){qtdLoca = localidadeStorage.length}
        if(usuarioStorage){qtdUser = usuarioStorage.length}

        /*localidadeStorage.forEach(local=> {
            createData(local.local,local.nome)
            
        })  */

        setQtdUsuario(qtdUser)
        setQtdLocais(qtdLoca)
        //fCarregaLocalidade(localidadeStorage)
    }, [])

    function signIn() {navigate("/usuario")} 
    function dashboardIn() {navigate("/dashboard")} 
    function locaisIn() {navigate("/locais")}  

    return (
        <>
            <div className={styles.containerMenu}>
                <img src="/logo.png" alt="Ativa 365" />
                <Stack marginTop={'34px'} direction="column" spacing={2}>
                    <Paper marginTop={15} color='#5ae671'>
                        <MenuList>
                            <MenuItem onClick={dashboardIn}>Dashborad</MenuItem>
                            <MenuItem onClick={locaisIn}>Local</MenuItem>
                            <MenuItem onClick={signIn} >Usuários</MenuItem>
                        </MenuList>
                    </Paper>                
                </Stack>
                <CornerUpLeft size={25}></CornerUpLeft>
                <Link to={-1}>Voltar</Link>
            </div>
            
            <div className={styles.container}>
                <div className={styles.containerTitulo}>
                    <Typography variant="h4" color="#000000" marginLeft="50px" marginTop="5px" >Dashboard</Typography>
                </div>
                <Grid container spacing={4} maxWidth={"1120px"} marginTop={"-10px"} marginLeft={1}>
                    <Grid item md={4} xs={12} >
                        <Card elevation={0}>
                            <CardContent>
                                <Typography color="#4D4D53" marginBottom={-1.0} marginLeft="10px" >Usuários</Typography>
                                <Box className={styles.containerGrid} display="flex" alignItems="center" justifyContent= "space-between" >
                                    <Tgraphy>{qtdUsuario}</Tgraphy>
                                    <Users size={60} color="#00B37E" />
                                </Box>
                            </CardContent>                            
                        </Card>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Card elevation={0}>
                            <CardContent>
                                <Typography color="#4D4D53" marginBottom={-1.0} marginLeft="10px">Locais</Typography>
                                <Box className={styles.containerGrid} display="flex" alignItems="center" justifyContent= "space-between" >
                                    <Tgraphy>{qtdLocais}</Tgraphy>
                                    <MapPinned size={60} color="#00B37E" />
                                </Box>
                            </CardContent>                            
                        </Card>
                    </Grid>
                </Grid>

                <Typography variant="h5" color="#000000" marginLeft="50px" marginTop="10px" >Locais</Typography>
                <Typography color="#000000" marginLeft="60px" marginTop="1px" >Listagem das localidades cadastradas</Typography>

                <div className={styles.tableLocais}>
                    <MapPinned onClick={() => fAcessaMap()} />
                    <AlignJustify onClick={() => fAcessaTable()}/>
                    
                    {isAcessaMap?<MapMak></MapMak>: true}
                    {isAcessaTable?<TablePage></TablePage>: true}
                </div>
            </div>
        </>
    )
}