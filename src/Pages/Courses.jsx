import React, {useEffect} from 'react'
import Title from '../components/Title'
import Flags from '../components/Flags'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function Courses() {
	useEffect(()=>{
		window.scrollTo(0, 0)
	  }, [])
  return (
	  <div>
		<Header/>
    	<div className='absolute bg-[#EBECF0] pt-10 w-screen min-h-screen'>
			<Title text={'CURSOS SUGERIDOS POR ESTADO'}>
				<p className='text-center flex text-lg items-center font-bold'>SELECIONE O ESTADO ONDE LOCALIZA-SE A PENITENCIÁRIA DO INTERNO/CUSTODIADO.</p>
			</Title>
			<Flags/>
			<Footer/>
		</div>
	</div>
  )
}
