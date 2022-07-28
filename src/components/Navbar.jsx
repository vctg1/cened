/* eslint-disable react/jsx-no-target-blank */
import {React, useState} from 'react'
import ListItem from './ListItem'
import {AiOutlineUser} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {Collapse } from '@mui/material'

export default function Navbar({translateNavbar}) {
  let [open, setOpen] = useState(false);
  let [openId, setOpenId] = useState(0);
  return (
    <div className='fixed'>
    <div className={`absolute ${translateNavbar ? 'translate-x-0' : 'translate-x-full'} items-center lg:translate-x-0 h-screen overflow-y-auto right-0 transition-transform lg:flex lg:justify-between lg:relative px-4 bg-[#F6B112] lg:p-0 lg:right-0 text-black md:p-4 lg:h-14 lg:overflow-y-visible lg:w-screen`}>
        <div className="navbar-links lg:items-center lg:h-full">
          <ul className='lg:items-center flex flex-col lg:flex-row h-full xl:text-sm text-xs'>
            <ListItem text={'Início'} link='/'/>
            <ListItem text={'Instituição'} link='/instituicao'/>
            <ListItem text={'Cursos'} link='/cursos'/>
            <div className='m-2' onMouseEnter={()=>{setOpen(true);setOpenId(1)}} onMouseLeave={()=>{setOpen(false)}}>
              <p className='w-fit lg:text-center p-2 lg:mb-0 font-bold h-auto transition-colors ease-in delay-70 lg:justify-center items-center hover:bg-blue-800 hover:text-white rounded-xl'>Como Funciona</p>
            <Collapse className='absolute lg:-mr-6 bg-gray-300 rounded-lg' in={openId===1?open:false}>
                <ul className='m-1'>
                <Link to='/passoapasso'><h1 className='hover:bg-blue-800 hover:text-white cursor-pointer rounded-lg p-1 font-normal transition-colors'>Passo a passo</h1></Link>
                <Link to='/programaeducacional'><h2 className='hover:bg-blue-800 hover:text-white cursor-pointer rounded-lg p-1 font-normal transition-colors'>Programa educacional</h2></Link>
                </ul>
            </Collapse>
            </div>
            <ListItem text={'Contato'} link='/contato'/>
            <ListItem text={'Trabalhe Conosco'} link='/trabalheconosco'/>
            <ListItem text={'Documentos'} link='/documentos'/>
          </ul>
        </div>
        <div className="lg:items-center flex flex-col lg:flex-row p-2 pt-2 font-bold lg:justify-end xl:text-sm right-0 text-xs gap-3">
            <Link to="/login" className='w-fit transition p-2 pr-2 pl-2 ease-in-out hover:scale-105 hover:text-white hover:bg-blue-800 duration-150 lg:mt-0 flex h-fit rounded-xl'>
              <AiOutlineUser size={15}/> <span>ÁREA DO ALUNO</span>
            </Link>
            <a target='_blank' href={'https://lucas-010.github.io/cened-penitenciaria/'} className="w-fit h-fit transition ease-in-out hover:bg-blue-800 hover:scale-105 hover:text-white duration-300 lg:mt-0 flex p-2 pr-2 pl-2 rounded-xl">
              <FiUsers size={15}/> <span>PENITENCIÁRIA</span>
            </a>
            <a target={'_blank'} href='https://lucas-010.github.io/cened-administracao-penitenciaria/' className='w-fit h-fit transition ease-in-out hover:bg-blue-800 hover:scale-105 hover:text-white duration-300 lg:mt-0 flex p-2 pr-2 pl-2 rounded-xl'>
              ADMINISTRAÇÃO PENITENCIÁRIA
            </a>
            <div onMouseEnter={()=>{setOpen(true);setOpenId(2)}} onMouseLeave={()=>{setOpen(false)}} className='xl:text-base text-sm'>
              <p className='w-max lg:text-center p-2 mr-5 font-bold h-auto transition ease-in-out lg:justify-center items-center bg-green-700 hover:scale-105 duration-300 hover:bg-blue-800 text-white rounded-xl'>MATRICULE-SE</p>
            <Collapse className='absolute rounded-lg bg-gray-300' in={openId===2?open:false}>
                <ul className='m-1'>
                <Link to='/login'><h1 className='hover:bg-blue-800 hover:text-white cursor-pointer rounded-lg p-1 font-normal transition-colors'>Já sou aluno</h1></Link>
                <Link to='/register'><h2 className='hover:bg-blue-800 hover:text-white cursor-pointer rounded-lg p-1 font-normal transition-colors'>Não sou aluno</h2></Link>
                </ul>
            </Collapse>
            </div>
        </div>
    </div>
    </div>
  )
}
