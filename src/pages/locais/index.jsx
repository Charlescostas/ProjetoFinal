import { 
    Button,
    MenuItem, 
    MenuList, 
    Paper, 
    Stack, 
    Typography 
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./style.module.css"
import { CornerUpLeft } from 'lucide-react'
import { TablePage } from '../../components/table'
import { MapMak } from '../mapas'
import { useState } from 'react'
import { MapPinned,AlignJustify } from 'lucide-react';

export function Locais() {   
    const navigate = useNavigate()
    const [isAcessaMap,setIsAcessa] = useState(false)
    const [isAcessaTable,setIsAcessaTable] = useState(true)

    function signIn() {navigate("/usuario")} 
    function dashboardIn() {navigate("/dashboard")}  
    function locaisIn() {navigate("/locais")} 
    function LocalidadeIn() {navigate("/localidade")} 

    function fAcessaMap() {
        setIsAcessa(true),
        setIsAcessaTable(false)
    } 

    function fAcessaTable() {
        setIsAcessa(false),
        setIsAcessaTable(true)
    } 
    
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
                    <Typography variant="h5" color="#000000" marginLeft="40px" marginTop="20px" >Locais</Typography>
                </div>
                <div className={styles.containerTitulo}>
                    <Typography color="#000000" marginLeft="60px" marginTop="2px">Localidades de atividades cadastradas</Typography>
                    
                    <Stack spacing={2} direction="row" marginLeft='890px' marginTop='-40px'>
                        <Button 
                            variant="contained"
                            color="success"
                            onClick={LocalidadeIn}
                            >Cadastrar Local 
                        </Button> 
                    </Stack> 
                </div>

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