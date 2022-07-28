import React, { useState } from 'react';
import {AiFillFileText, AiFillPrinter} from 'react-icons/ai';
import {FaTimesCircle} from 'react-icons/fa'
import {IoIosArrowBack} from 'react-icons/io'
import { IoDocuments } from 'react-icons/io5';
import { TableRow, TableCell, Table, TableHead, TableContainer } from '@material-ui/core';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';

export default function AllCourses({data}){
    let [visCourseDetails ,setVisCourseDetails] = useState(false);
    let [selectedCourse, setSelectedCourse] = useState(false);

    let dateInitCourse = '', calcDays='',oldDate='',testDate='';
    let date = new Date(selectedCourse.dataMatricula).toLocaleDateString('pt-BR');
    let datePayment = '', dateFinalTest = '', testGrade ='', testResult='';
    if(selectedCourse.statusCurso === 4 || selectedCourse.statusCurso === 7){testResult = `${selectedCourse.statusCursoDescricao}. Fará 2ª Prova.`}
    else{testResult=selectedCourse.statusCursoDescricao}
    if(selectedCourse.dataPagamento){datePayment = new Date(selectedCourse.dataPagamento).toLocaleDateString('pt-BR');}
    if(selectedCourse.inicioCurso) {dateInitCourse = new Date(selectedCourse.inicioCurso).toLocaleDateString('pt-BR');
    calcDays = (selectedCourse.curso.cargaHoraria/4); oldDate = new Date(selectedCourse.inicioCurso.toString());
    testDate= new Date(oldDate.getFullYear(),oldDate.getMonth(),oldDate.getDate()+calcDays).toLocaleDateString('pt-BR');}
    if(selectedCourse.ultimaProvaRealizada)
    {dateFinalTest = new Date(selectedCourse.ultimaProvaRealizada.dataRecebidaProva).toLocaleDateString('pt-Br');
    testGrade = selectedCourse.ultimaProvaRealizada.nota}

    if(visCourseDetails===false){
    return(
    <Grid>
        <Box className='lg:p-10 p-5 flex flex-col items-center'>
        <h1 className='flex items-center text-2xl font-bold'><IoDocuments/>Todos os cursos</h1>
        <h2 className='text-gray-500 text-center lg:text-start'>Visualize a lista de todos os Cursos do Aluno</h2>
        </Box>
        <Paper sx={{overflow:'hidden', width:'100%'}} >
        <TableContainer style={{maxHeight:'60vh'}} >
            <Table stickyHeader>
                <TableHead>
                <TableRow>
                    <TableCell colSpan={2}>
                        <Typography>Curso</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography>Matrícula</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography>Término</Typography>
                    </TableCell>
                    <TableCell colSpan={2}>
                        <Typography>Situação</Typography>
                    </TableCell>
                </TableRow>
                </TableHead>
                {data.map(item=>
                <TableRow>
                    <TableCell>
                        <Typography>{item.curso.codigo}</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography>{item.curso.nome}</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography>{item.numeroMatricula ? item.numeroMatricula : 'N/D'}</Typography>
                    </TableCell>

                    <TableCell>
                        <Typography>{item.terminoCurso ? new Date(item.terminoCurso).toLocaleDateString('pt-BR') : 'Indefinido'}</Typography>
                    </TableCell>

                    <TableCell>
                        <Typography>{item.statusCursoDescricao}</Typography>
                    </TableCell>
                    {item.statusCurso!==1?
                    <TableCell>
                        <Button variant='contained' color='warning' onClick={()=>{setVisCourseDetails(true);setSelectedCourse(item)}} ><AiFillFileText/>&nbsp;Ver histórico&nbsp;</Button>
                    </TableCell>:
                    <TableCell>
                        <Button style={{marginBottom:'5px'}} variant='outlined' color='inherit' ><AiFillPrinter/>&nbsp;Imprimir boleto bancário</Button>
                        <Button variant='contained' color='error' ><FaTimesCircle/>&nbsp;Cancelar este curso&nbsp;</Button>
                    </TableCell>
                    }
                </TableRow>
                )}
            </Table>
        </TableContainer>
        </Paper>
    </Grid>
    )}
    else{
        return(
            <Grid className='lg:w-5/6 h-full'>
                <Box className='lg:p-10 p-5 flex flex-col items-center'>
                <h1 className='flex items-center text-2xl font-bold'><AiFillFileText/>Histórico de curso</h1>
                <h2 className='text-gray-500 text-center lg:text-start'>Histórico completo de andamento e avaliações do Aluno/Interno</h2>
                <Box className='flex flex-col lg:flex-row bg-gray-100 border border-gray-200 p-5 w-full justify-between rounded-md'>
                    <p className='flex flex-col text-sm lg:text-base flex-wrap lg:flex-row items-center'>Histórico do curso:&nbsp;<b>{selectedCourse.curso.codigo} - {selectedCourse.curso.nome}</b></p>
                    <Button variant='contained' color='warning' onClick={()=>{setVisCourseDetails(false)}}><IoIosArrowBack/>&nbsp;Voltar à lista dos cursos&nbsp;</Button>
                </Box>
                </Box>
                <Grid className='w-full h-5/6 flex flex-col lg:flex-row border-8 border-white rounded-xl flex-wrap'>
                    <Grid className='lg:w-1/2 p-2 overflow-auto lg:h-auto  border-gray-400'>
                        <p className='text-xl text-center font-bold mb-10'>Trâmites da Matrícula e do Curso</p>
                        <li className='border-2 list-none p-2 hover:bg-gray-200'>A pré-matrícula foi recebida/registrada na Escola CENED em: <b>{date}</b></li>
                        <li className='border-2 list-none p-2 hover:bg-gray-200'>Pré-matrícula realizada no site por: <b>{selectedCourse.aluno.nomePreposto}</b></li>
                        <li className='border-2 list-none p-2 hover:bg-gray-200'>Matrícula efetivada. Pagamento liquidado em: <b>{datePayment}</b></li>
                        <li className='border-2 list-none p-2 hover:bg-gray-200'>Início do curso: <b>{dateInitCourse}</b></li>
                        <li className='border-2 list-none p-2 hover:bg-gray-200'>Material didático enviado para: <b>{selectedCourse.materialEnviadoParaDescricao}</b></li>
                        <li className='border-2 list-none p-2 hover:bg-gray-200'>Situação do curso: <b>{selectedCourse.statusCursoDescricao}</b></li>
                        </Grid>
                    <Grid className='lg:w-1/2 p-2 h-72 overflow-auto lg:h-auto lg:border-l-2 border-gray-400'>
                        <p className='text-xl text-center font-bold mb-10'>Trâmite da Prova</p>
                        <li className='border-2 list-none p-2 hover:bg-gray-200'>Data prevista para realização da prova na Unidade Prisional: <b>{testDate}</b></li>
                        <li className={`${dateFinalTest === '' ? 'hidden':''} border-2 list-none p-2 hover:bg-gray-200`}>PROVA realizada. Resultado da prova: <b>{testGrade} - {testResult}</b></li>
                        </Grid>
                </Grid>
            </Grid>
        )
    }
}