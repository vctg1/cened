import React from 'react'
import {FaUsers} from 'react-icons/fa'

export default function Tutoring() {
  return (
    <div className='mt-10 w-11/12 m-auto rounded-xl p-4 flex bg-blue-600 flex-col lg:flex-row justify-around items-center'>
			<div className='bg-white rounded-full h-32 w-32 flex justify-center items-center'>
				<FaUsers size={80} className='text-blue-600'/>
			</div>

			<div className='w-4/5 text-center lg:text-left text-white'>
				<h2 className='text-3xl mt-5 lg:mt-0 font-bold'>TUTORIA</h2>

				<p className='mt-5'>A tutoria EAD pode ser compreendida como sendo uma ação orientadora e pedagógica global, base para proporcionar a instrução de alunos na modalidade de educação a distância.</p>

				<p className='mt-5'>A EAD permite uma interatividade em tempos distintos, com ferramentas síncronas e assíncronas, acompanhada pela tutoria que desempenha papel importante no espaço de articulação e de suporte ao estudo cooperativo. A ideia principal articula-se ao trabalho grupal, cooperativo, sem abrir mão das características mais básicas da EaD, que é a autonomia do estudante e sua liberdade em aprender.</p>
			</div>

    </div>
  )
}
