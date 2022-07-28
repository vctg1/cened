import React from 'react';
import {Link} from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai';
import {MdPowerSettingsNew} from 'react-icons/md'
import imagemBackground from '../images/barraVictor.jpg'
import logo from '../images/logoCened.png'

export default function StudentAreaHeader(){
    return(
        <div className='fixed z-20 flex flex-col h-20 w-full font-bold' style={{backgroundImage: `url(${imagemBackground})`, backgroundSize:'cover'}}>
      <div className='text-white justify-between lg:text-lg self-center flex lg:justify-between w-11/12 h-full items-center'>
                <Link to={'/'}>
                <ul className='flex items-center'>
                  <img src={logo} alt='' className='lg:w-28 lg:h-20 w-24 h-20'/>
                </ul>
                </Link>
              <ul className='flex justify-between gap-10'>
                <Link to={'/'}>
                <li className='flex items-center gap-1 ease-in delay-70 transition-colors rounded-lg cursor-pointer p-1 hover:bg-blue-800 font-bold'><AiFillHome/>Voltar ao Site</li>
                </Link>
                <Link to={'/'}>
                <button onClick={()=>sessionStorage.setItem('verified', false)} className='flex items-center gap-1 ease-in delay-70 transition-colors rounded-lg cursor-pointer p-1 hover:bg-blue-800 font-bold'><MdPowerSettingsNew/>SAIR</button>
                </Link>
              </ul>
            </div>
        </div>
    )
}