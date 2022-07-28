import React, {useEffect} from 'react'
import Footer from '../components/Footer'
import SelectContent from '../components/SelectContent'
import Title from '../components/Title'
import Header from '../components/Header'


export default function Education() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Header/>
    <div className='absolute pt-10 w-screen'>
			<Title text={'Programa de Qualificação Profissional às Pessoas Privadas de Liberdade'}>
      </Title>
			<SelectContent/>
      <Footer/>
    </div>
    </div>
  )
}
