import React from 'react'
import Footer from '../components/Footer'
import StudentAreaHeader from '../components/StudentAreaHeader'
import StudentOptions from '../components/StudentOptions'
import StudentStart from '../components/StudentStart'
import StudentCurrentCourse from '../components/StudentCurrentCourse'
import AllCourses from '../components/AllCourses'
import BuyNewCourse from '../components/BuyNewCourse'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ContactUsStudentArea from '../components/ContactUsStudentArea'
import { Grid } from '@mui/material'

export default function StudentArea() {
  let studentData = JSON.parse(sessionStorage.getItem('studentData')),
  API = process.env.REACT_APP_API_KEY;
  let [selected, setSelected] = useState(1);
  let [studentReg, setStudentReg] = useState('');
  let keys = Object.keys(studentReg);
  let currentCourse = [];
  
  useEffect(()=>{
    axios.get(`${API}documentos/consultas/matriculas?IdAluno=${studentData.idAluno}&limit=50`).then(response=>{
      setStudentReg(response.data);
    })
  },[])
  keys.forEach(item=>{if(studentReg[item].statusCurso === 2){currentCourse.push(studentReg[item]);}})
  if(currentCourse.length ===0){currentCourse = studentReg}
  if(JSON.parse(sessionStorage.getItem('verified'))===false){
    window.location='/cened/login'}
  else{
  return (
    <Grid className='bg-[rgb(229,247,252)] absolute'>
      <StudentAreaHeader/>
      <div className='min-h-screen w-screen flex flex-col pt-24 p-8'>
        <div className='w-full flex flex-col lg:flex-row'>
        <div className='lg:w-1/2'>
        <ul className='flex gap-4 flex-wrap'><li>Reeducando: <b>{studentData.nome}</b></li><li>CPF: <b>{studentData.cpf}</b></li></ul>
        <ul className='flex gap-4 flex-wrap'><li>UF: <b>{studentData.penitenciaria.ufDescricao}</b></li><li>Penitenciária: <b>{studentData.penitenciaria.nome}</b></li></ul>
        </div>
        <div className='lg:w-1/2 flex flex-col lg:items-end'>
        <ul className='flex gap-4 flex-wrap'><li>Responsável: <b>{studentData.nomePreposto}</b></li></ul>
        <ul className='flex gap-4 flex-wrap'><li>Email: <b>{studentData.email}</b></li></ul>
        </div>
        </div>
        <div className='flex flex-col overflow-auto lg:flex-row bg-white min-w-screen lg:min-w-min lg:border-4 mt-2 border-gray-400 rounded-lg'>
          <StudentOptions selected={selected} setSelected={setSelected}/>
        {
        selected ===1 ? <StudentStart/>
        :
        selected ===2 ? <StudentCurrentCourse currentCourse={currentCourse[0]}/>
        :
        selected ===3 ? <AllCourses data={studentReg}/>
        :
        selected ===4 ? <BuyNewCourse/>
        :
        selected ===5 ? <div className='text-center w-5/6'>Solicitar certificado</div>
        :
        selected ===6 ? <div className='text-center w-5/6'>Boletos</div>
        :
        selected ===7 ? <ContactUsStudentArea studentData={studentData}/>
        :
        selected ===8 ? <div className='text-center w-5/6'>Alterar senha</div>
        :<div className='text-center w-5/6'>Atualizar cadastro</div>}
        </div>
      </div>
        <Footer/>
    </Grid>
  )
  }
}
