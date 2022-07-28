import React from 'react'
import {IoSchoolOutline} from 'react-icons/io5'
import background from '../images/backgroundInstitution.jpeg'

export default function AboutSchool() {
  return (
    <div className='lg:flex-row w-full'>
		<img src={background}  className='w-1/2 pl-10 rounded-lg' alt=''/>
			{/* <div className='w-full p-4 lg:w-1/4 border-b-2 border-black border-collapse lg:border-b-0 flex flex-col items-center'>
				<IoSchoolOutline size={80}/>
				<h1 className='text-3xl font-bold'>A ESCOLA CENED</h1>
				<ul className='list-disc mt-5'>
					<li>Técnico em Secretaria Escolar</li>
					<li>Técnico em Transações Imobiliárias</li>
					<li>Cursos de Qualificação Profisional</li>
					<li>EJA(SUPLETIVO)</li>
				</ul>
			</div>

			<div className='lg:w-3/4 border-l-0 border-black border-collapse lg:border-l-2 w-full p-4 overflow-y-auto'>
				<h2 className='text-center text-3xl font-bold'>A Instituição</h2>
				<p className='text-lg text-center mt-4'>A Escola CENED é instituição educacional privada de educação básica, credenciada pelo poder público, integra o sistema de ensino do Distrito Federal nas modalidades a seguir e é cadastrada no MEC/SISTEC - registro 43.079.</p>

				<div className='border-2 border-black p-2 mt-5'>
					<div className='flex'>
						<div className='border-r-2 border-black w-2/3'>
							<p className='flex items-center mt-2'>EJA – Ensino Fundamental – 6º ao 9º ano (antigo supletivo) – a distância</p>

							<p className='flex items-center mt-2'>EJA – Ensino Médio – 1º ao 3º ano (antigo supletivo) – a distância</p>

							<p className='flex items-center mt-2'>Cursos Técnicos de Nível Médio – a distância</p>

							<li className='mt-2'>Técnico em Secretaria Escolar</li>
							<li className='mt-2'>Técnico em Transações Imobiliárias</li>
						</div>

						<div className='p-2 w-1/3'>
							<p>Portaria nº 54/2018
							Secretaria de Educação do DF
							DODF nº 44, de 06/03/2018, pg. 4</p>
						</div>
					</div>

					<div className='flex border-t-2 border-black'>
						<div className='border-r-2 border-black w-2/3'>
							<p className='flex items-center mt-2'>Cursos Técnicos de Nível Médio – presencial</p>

							<li className='mt-2'>Técnico em Secretaria Escolar</li>
							<li className='mt-2'>Técnico em Transações Imobiliárias</li>
						</div>

						<div className='p-2 w-1/3'>
							<p>Portaria nº 27/2014
							Secretaria de Educação do DF,
							DODF nº 30, de 10/02/2014, pg. 3</p>
						</div>
					</div>
					
				</div>

				<p className='mt-5'>A ESCOLA CENED oferta também, cursos de  Formação Inicial e Continuada ou de Qualificação Profissional - EaD , assim tipificados pelo art. 39 da Lei de Diretrizes e Bases da Educação Nacional (LDB) nº 9.394/96 e pelo art. 2º da Resolução MEC CNE/CEB nº 6, de 20/09/2012.</p>

				<p className='mt-5'>Os cursos de qualificação ou capacitação profissional da Escola CENED estão cadastrados no MEC/SISTEC - Sistema Nacional de Informações da Educação Profissional e Tecnológica.</p>
			</div> */}
    </div>
  )
}
