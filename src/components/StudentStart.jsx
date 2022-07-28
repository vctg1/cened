import {React, useState} from 'react'
import { AiFillHome } from 'react-icons/ai';
import {MdMessage, MdPowerSettingsNew} from 'react-icons/md'
import {HiOutlineDocumentSearch} from 'react-icons/hi';
import {IoDocuments} from 'react-icons/io5'
import {FiEdit} from 'react-icons/fi'
import {BiBarcodeReader} from 'react-icons/bi'
import {RiLockPasswordFill} from 'react-icons/ri'
import {MdError} from 'react-icons/md';
import { Collapse } from '@mui/material';
import {FaDollarSign} from 'react-icons/fa'

export default function StudentStart(){
    let [open, setOpen] = useState(false);
    return(
        <div className='lg:w-5/6 h-full'>
            <div className='lg:p-10 p-5 flex flex-col items-center'>
                <h1 className='flex items-center text-2xl font-bold'>Conheça a área do aluno</h1>
                <h2 className='text-gray-500 text-center lg:text-start'>Seja bem vindo! Acompanhe todos os detalhes do Aluno por aqui.</h2>
            </div>
            <div className='w-full h-5/6 flex lg:flex-row flex-col flex-wrap text-green-700 '>
                <div className='flex flex-col bg-amber-100 overflow-auto lg:w-1/4 border-8 rounded-xl border-white p-4'>                    
                <p className='flex items-center font-bold'><HiOutlineDocumentSearch/>CURSO ATUAL</p>
                <li className='flex mt-10 h-full'>Visualize o Histórico completo do Curso em Andamento ou Último Curso realizado pelo Aluno</li></div>
                <div className='flex flex-col bg-amber-100 overflow-auto lg:w-1/4 border-8 rounded-xl border-white p-4'>
                <p className='flex text-start items-center font-bold'><IoDocuments/>TODOS OS CURSOS</p>
                <li className='flex mt-10 h-full'>Visualize o Histórico completo do Curso em Andamento ou Último Curso realizado pelo Aluno</li></div>
                <div className='flex flex-col bg-amber-100 overflow-auto lg:w-1/4 border-8 rounded-xl border-white p-4'>
                <p className='flex items-center font-bold'><FaDollarSign/>COMPRAR NOVO CURSO</p>
                <li className='flex mt-10 h-full'>Realize uma nova matrícula para o Aluno, adiquira mais um dos Cursos disponíveis</li></div>
                <div className='flex flex-col bg-amber-100 overflow-auto lg:w-1/4 border-8 rounded-xl border-white p-4'>
                <p className='flex items-center font-bold'><BiBarcodeReader/>BOLETOS</p>
                <li className='flex mt-10 h-full'>Visualize e Imprima Boletos referentes a Matrícula, Compra de Curso, e Despesas Extras</li></div>
                <div className='flex flex-col bg-amber-100 overflow-auto lg:w-1/4 border-8 rounded-xl border-white p-4'>
                <p className='flex items-center font-bold'><MdMessage/>FALE CONOSCO</p>
                <li className='flex mt-10 h-full'>Caixa de Mensagens para comunicação direta com o setor de atendimento</li></div>
                <div className='flex flex-col bg-amber-100 overflow-auto lg:w-1/4 border-8 rounded-xl border-white p-4'>
                <p className='flex items-center font-bold'><RiLockPasswordFill/>ALTERAR SENHA</p>
                <li className='flex mt-10 h-full'>Altere a senha de acesso à Área do Aluno</li></div>
                <div className='flex flex-col bg-amber-100 overflow-auto lg:w-1/4 border-8 rounded-xl border-white p-4' onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
                <ul className='flex justify-between'><li className='flex items-center font-bold'><FiEdit/>ATUALIZAR CADASTRO</li><MdError color='red' size={25}/></ul>
                <li className='flex mt-10 h-full'>Visualize e Altere os Dados Pessoais do Aluno, Dados Penitenciários e os Dados do Responsável/Preposto</li></div>
                <div className='flex flex-col bg-amber-100 overflow-auto lg:w-1/4 border-8 rounded-xl border-white p-4'>
                <p className='flex items-center font-bold'><MdPowerSettingsNew/>SAIR</p>
                <li className='flex mt-10 h-full'>Efetue Logoff da Área do Aluno</li></div>
            </div>
            <Collapse in={open}><div className='w-full flex justify-center'><p className='border-white border-8 w-fit flex flex-wrap items-center bg-amber-100 p-2 rounded-sm text-red-500 text-lg'><MdError/>&nbsp;<b>Atenção! Mantenha sempre atualizado o cadastro do estudante/reeducando!</b></p></div></Collapse>
        </div>
    )
}