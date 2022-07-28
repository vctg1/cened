import React from 'react';
import logo from '../images/logoCened.png'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import {AiOutlineMenu} from 'react-icons/ai';
import { useState, useEffect } from 'react';
import imagemBackground from '../images/headerimg.png';
import bandeiraDF from '../images/flags/DF.png';
import bandeiraBrasil from '../images/flags/bandeiradobrasil.jpg';


export default function Header() {
  const [translateNavbar, setTranslateNavbar] = useState(false);
  let [collapse, setCollapse] = useState(false);
  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 20) {
        setCollapse(true);
      } else {
        setCollapse(false);
      }
    }
    window.addEventListener("scroll", posicaoScroll);
    return () => window.removeEventListener("scroll", posicaoScroll);
  }, []);
  return (
    <div className={`fixed z-20`}>
      <div style={{backgroundImage: `url(${imagemBackground})`, backgroundSize: 'cover'}} className={`flex lg:justify-around w-screen items-center ${collapse ? 'lg:hidden' : ''}`}>
        <Link to={'/'}>
            <img src={logo} alt="Icone de um livro" className='lg:h-28 h-20'/>
        </Link>
        <AiOutlineMenu onClick={()=> setTranslateNavbar(!translateNavbar)} className='absolute right-5 md:right-8 lg:hidden cursor-pointer block' color='#fff' size={45}/>
        <div className='hidden p-4 text-white lg:block text-center'>
          <h1 className='font-bold text-lg'>CENTRO DE EDUCAÇÃO PROFISSIONAL</h1>
          <span>Credenciada na Secretaria de Educação do DF<br/>Cadastrada no SISTEC / MEC </span>
        </div>
        <div className='hidden p-4 text-white lg:block text-center'>
          <h1 className='font-bold'>PROGRAMA DE QUALIFICAÇÃO PROFISSIONAL <br/> ÀS PESSOAS PRIVADAS DE LIBERDADE</h1>
          <span className='text-base'>Ofertado há 9 anos!</span>
        </div>
        <div className='lg:flex md:blck hidden justify-center h-24 lg:flex-col-reverse text-white'>
          <h1 className='pt-1 lg:text-xl'>Brasil - Brasília - DF</h1>
          <div className='flex lg:justify-between'><img className='lg:w-20 w-14' src={bandeiraBrasil} alt=''/>
          <img className='lg:w-20 w-16' src={bandeiraDF} alt=''/></div>
        </div>
      </div>
      <Navbar translateNavbar={!translateNavbar}/>
    </div>
  )
}
