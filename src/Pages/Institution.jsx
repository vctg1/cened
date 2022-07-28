import React, {useEffect} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SchoolCened from '../components/SchoolCened'
import ContentInstution from '../components/ContentInstution'

export default function Institution() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='absolute'>
      <Header/>
        <div className='flex w-screen min-h-screen lg:min-h-full lg:flex-row flex-col items-center lg:items-start mt-28 lg:mt-52'>
          <SchoolCened/>
          <ContentInstution/>
        </div>
      <Footer/>
    </div>
  )
}
