import React from 'react'
import AC from '../images/flags/AC.png'
import AL from '../images/flags/AL.png'
import AM from '../images/flags/AM.png'
import AP from '../images/flags/AP.png'
import BA from '../images/flags/BA.png'
import CE from '../images/flags/CE.png'
import DF from '../images/flags/DF.png'
import ES from '../images/flags/ES.png'
import GO from '../images/flags/GO.png'
import MA from '../images/flags/MA.png'
import MG from '../images/flags/MG.png'
import MS from '../images/flags/MS.png'
import MT from '../images/flags/MT.png'
import PA from '../images/flags/PA.png'
import PB from '../images/flags/PB.png'
import PI from '../images/flags/PI.png'
import PE from '../images/flags/PE.png'
import PR from '../images/flags/PR.png'
import RJ from '../images/flags/RJ.png'
import RN from '../images/flags/RN.png'
import RO from '../images/flags/RO.png'
import RR from '../images/flags/RR.png'
import RS from '../images/flags/RS.png'
import SC from '../images/flags/SC.png'
import SE from '../images/flags/SE.png'
import SP from '../images/flags/SP.png'
import TO from '../images/flags/TO.png'

export default function Flags() {
  const flags = [
    {
      img: AC,
      text: 'Acre',
      abbre: 'ac'
    },

    {
      img: AL,
      text: 'Alagoas',
      abbre: 'al'
    },

    {
      img: AM,
      text: 'Amazonas',
      abbre: 'am'
    },

    {
      img: AP,
      text: 'Amapá',
      abbre: 'ap'
    },

    {
      img: BA,
      text: 'Bahia',
      abbre: 'ba'
    },

    {
      img: CE,
      text: 'Ceará',
      abbre: 'ce'
    },

    {
      img: DF,
      text: 'Distrito Federal',
      abbre: 'df'
    },

    {
      img: ES,
      text: 'Espírito Santo',
      abbre: 'es'
    },

    {
      img: GO,
      text: 'Goiás',
      abbre: 'go'
    },

    {
      img: MA,
      text: 'Maranhão',
      abbre: 'ma'
    },

    {
      img: MS,
      text: 'Mato Grosso do Sul',
      abbre: 'ms'
    },
    
    {
      img: MT,
      text: 'Mato Grosso',
      abbre: 'mt'
    },

    {
      img: MG,
      text: 'Minas Gerais',
      abbre: 'mg'
    },

    {
      img: PA,
      text: 'Pará',
      abbre: 'pa'
    },

    {
      img: PB,
      text: 'Paraíba',
      abbre: 'pb'
    },

    {
      img: PR,
      text: 'Paraná',
      abbre: 'pr'
    },
    {
      img: PE,
      text: 'Pernambuco',
      abbre: 'pe'
    },

    {
      img: PI,
      text: 'Piauí',
      abbre: 'pi'
    },

    {
      img: RJ,
      text: 'Rio de Janeiro',
      abbre: 'rj'
    },

    {
      img: RN,
      text: 'Rio Grande do Norte',
      abbre: 'rn'
    },

    {
      img: RO,
      text: 'Rondônia',
      abbre: 'ro'
    },

    {
      img: RR,
      text: 'Roraima',
      abbre: 'rr'
    },

    {
      img: RS,
      text: 'Rio Grande do Sul',
      abbre: 'rs'
    },

    {
      img: SC,
      text: 'Santa Catarina',
      abbre: 'sc'
    },

    {
      img: SE,
      text: 'Sergipe',
      abbre: 'se'
    },

    {
      img: SP,
      text: 'São Paulo',
      abbre: 'sp'
    },

    {
      img: TO,
      text: 'Tocantins',
      abbre: 'to'
    },

  ]
  return (
    <div  className='flex p-4 mt-10 lg:mt-0 w-11/12 justify-center flex-wrap m-auto'>
			{flags.map((flag, key)=>{
        return(
          <div className='transition hover:scale-110 w-48 p-2 flex flex-col justify-between items-center h-36 m-5 text-center' key={key}>
            <a href={`lista/${flag.abbre}`}><img className='w-40 h-28' src={flag.img} alt="" /></a>
            <span className='text-black font-bold'>{flag.text}</span>
          </div>
        )
      })}
      <div className='flex bg-[#0D9F16] rounded-xl flex-col mr-5 mt-7 p-6 h-28 justify-center border-2'>
        <h3 className='text-white text-center text-xl'>Cursos cadastrados no MEC/SISTEC</h3>
        <a target={'_blank'} className='text-center font-extrabold text-white' href="https://www.cenedqualificando.com.br/Arquivos/relacao-cursos-cadastrados-mec-sistec.pdf" rel="noreferrer">CLIQUE AQUI! LISTA DE CURSOS!</a>
      </div>
    </div>
  )
}
