import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import {FaDollarSign, FaComment, FaLongArrowAltRight} from 'react-icons/fa'
import {HiCurrencyDollar} from 'react-icons/hi'
import { Link } from 'react-router-dom';


export default function BuyNewCourse(){
    return(
        <Grid className='lg:w-5/6 h-full'>
            <Box className='lg:p-10 p-5 flex flex-col items-center h-full'>
                <h1 className='flex items-center text-2xl font-bold'><FaDollarSign/>Comprar Novo Curso</h1>
                <h2 className='text-gray-500 text-center lg:text-start'>Realize uma nova matrícula para o Aluno, adiquira mais um dos Cursos disponíveis</h2>
                <Grid className='items-center flex flex-wrap bg-gray-100 border border-gray-200 p-5 w-full justify-around rounded-md'>
                    <FaComment color='darkblue' size={80}/>
                    <p className='flex flex-col text-sm lg:text-xl lg:flex-row items-center lg:w-11/12'>
                    Será realizado um curso de cada vez, sendo que o início de um ocorrerá subsequentemente ao término de outro. 
                    O aluno/reeducando poderá ser matriculado em mais de um curso: o PRIMEIRO CURSO será ativado e os demais ficarão agendados no sistema, aguardando conclusão do curso em realização. 
                    Na hipótese de matrícula em mais de um curso, será encaminhado à Unidade Prisional o material didático, individualmente, de cada curso, conforme a sua conclusão.</p>
                </Grid>
                <Grid className='items-center gap-5 mt-10 flex bg-gray-100 border border-gray-200 p-5 w-full rounded-md'>
                    <p className='flex flex-col lg:text-2xl text-xs flex-wrap lg:flex-row items-center'>
                    Clique no botão à sua direita e compre um novo curso</p><FaLongArrowAltRight size={50}/>
                    <Link to='/cursos'>
                    <Button variant='contained' color='warning' ><HiCurrencyDollar size={40}/></Button>
                    </Link>
                </Grid>
            </Box>
        </Grid>
    )
}