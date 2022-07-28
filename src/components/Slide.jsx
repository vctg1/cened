import React, { useEffect, useState } from 'react'
import {MdWork} from 'react-icons/md'
import {GiBrazil} from 'react-icons/gi'
import {FaUserGraduate} from 'react-icons/fa'
import {FaBalanceScale} from 'react-icons/fa'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const itemGraduate = ()=>{
	return(
		<p className='text-xl mt-6'>
			• Contribuir para a elevação do nível de escolaridade dos apenados. <br /> • Favorecer a aquisição de conhecimentos por meio da leitura. <br /> • Promover o crescimento pessoal e profissional do interno durante o cumprimento da sua pena, visando à recuperação da sua dignidade.
		</p>
	)
}

function slideNext(){
	const element = document.querySelector('.slick-next')
	if(element){
		setTimeout(()=>{
			element.click()
		}, 2000)
	}
}

setInterval(slideNext, 8000)

export default function Slide() {
	const slideContent = [
		{
			icon: MdWork,
			text: 'Assegurar o direito do apenado à instrução escolar e formação profissional, em nível de iniciação ou de aperfeiçoamento',
			id: 1
		},
		
		{
			icon: GiBrazil,
			text: 'Atingir grande número de reeducandos, mesmo separados por distâncias geográficas, sociais e sem condições de frequentarem cursos presenciais, como oportunidades de crescimento intelectual',
			id: 2
		},

		{
			icon: FaUserGraduate,
			id: 3
		},

		{
			icon: FaBalanceScale,
			text: 'Possibilitar aos internos a pleitear o benefício de remição da pena pelo estudo, previsto na Lei nº 7.210/84 (Lei de Execução Penal) e regulamentado pela Resolução nº 391/2021, do Conselho Nacional de Justiça.',
			id: 4
		}
	]
	useEffect(()=>{
		const slick1 = document.getElementsByClassName('slick-arrow')[0]
		const slick2 = document.getElementsByClassName('slick-arrow')[1]
		slick1.style.display = 'none'
		slick2.style.display = 'none'
	}, [])
  return (
    <div className='mt-24 p-4 lg:mt-44 text-white bg-blue-600 w-11/12 m-auto rounded-xl'>
			<Slider>
			{slideContent.map((slide, key)=>{
				return(
					<div key={key} className='relative'>
						<slide.icon className='mt-0 m-auto' size={80}/>
						<div className='p-2 text-center'>
							<h2 className='text-2xl font-bold'>PROGRAMA DE QUALIFICAÇÃO PROFISSIONAL AOS INTERNOS DO SISTEMA PRISIONAL BRASILEIRO</h2>
							{slide.id === 3 ? itemGraduate() : <p className='text-xl mt-6'>{slide.text}</p>}
						</div>
					</div>
				)
			})}
			</Slider>
    </div>
  )
}
