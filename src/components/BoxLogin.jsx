import React from 'react'
import loginIMG from '../images/loginIMG.jpeg'
import { MdAccountBox, MdPersonAddAlt1 } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState, useEffect, createContext } from 'react';
import { ImEnter } from "react-icons/im";
import { Link, Navigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { TextField, Button, Grid } from '@mui/material';
import { Collapse } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


export default function Box({valueCpf, cpfApi, studentData, valueSenha, setValueSenha, setValueCpf, loginVerify}){
  let Navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if(loginVerify){
      NotificationManager.success(``,'SUCESSO',100)
      sessionStorage.setItem('verified', JSON.stringify(true));
      setTimeout(() => {
        Navigate('/areadoaluno')
      }, 500);
    }
    else if(valueCpf === studentData.cpf && valueSenha !== studentData.senha){ 
      NotificationManager.error('Senha incorreta','ERRO',1500)
    }
    else if(cpfApi === studentData.cpf && valueSenha !== studentData.senha){ 
      NotificationManager.error('Senha incorreta','ERRO', 1500)
    }
    else{
      NotificationManager.warning('Itens incorretos','ERRO', 1500)
    }
  }
  console.log(loginVerify)

  return (
    <div id='main' className='flex flex-col w-screen'>
      <div className='flex flex-col items-center self-center mt-10 lg:w-1/2'> 
        <img className='lg:w-4/12 w-1/2 rounded-md mb-10' src={loginIMG} alt=''/>
        <form onSubmit={handleSubmit} className='flex flex-col p-5 bg-[#EBECF0] lg:w-1/2 items-center text-xl'>
        <div className='w-5/6 flex items-center bg-white rounded-lg mb-2'><MdAccountBox/>
        <InputMask mask="999.999.999-99" maskChar={null} onChange={(e)=> setValueCpf(e.target.value)} value={valueCpf} id='cpfAluno' className='p-2 w-full' >{() =><TextField label='CPF' className='w-full'/>}</InputMask>
        </div>
        <div className='w-5/6 flex items-center bg-white rounded-lg mb-2'>
          <RiLockPasswordFill/>
          <TextField 
          label='Senha' 
          onChange={(e)=> setValueSenha(e.target.value)} id='password' type='password' className='w-full'></TextField>
        </div>
        <Grid width='80%' gap={1} display='grid' gridTemplateRows='1fr 1fr 1fr' >
        <Button variant='contained' color='info' type='submit'><ImEnter/>&nbsp; Acessar</Button>
        <Button variant='contained' color='inherit' onClick={()=>Navigate('/register')} ><MdPersonAddAlt1/>&nbsp; Primeiro Acesso</Button>
        <Button variant='contained' color='inherit' ><MdPersonAddAlt1/>&nbsp; Esqueci minha senha</Button>
        </Grid>
        </form>
      </div>
      <NotificationContainer/>
    </div>
  )
}

