import React, { useState, useEffect } from 'react'
import BoxLogin from '../components/BoxLogin'
import BoxInstructions from '../components/BoxInstructions'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios'


export default function Login() {
  let [loginVerify, setLoginVerify] = useState(false);
  let [valueCpf, setValueCpf] = useState(''),
  [valueSenha, setValueSenha] = useState(''),
  [cpfApi, setCpfApi] = useState(''),
  [verified, setVerified] = useState(undefined),
  [studentData, setStudentData] = useState(false),
  API = process.env.REACT_APP_API_KEY;
  useEffect(()=>{
    if(JSON.parse(sessionStorage.getItem('verified'))){
    setVerified(JSON.parse(sessionStorage.getItem('verified')));
    setStudentData(JSON.parse(sessionStorage.getItem('studentData')));}
  },[])

  useEffect(()=>{setCpfApi(valueCpf.replaceAll('.','').replaceAll('-',''))},[valueCpf])
  useEffect(()=>{if(studentData){sessionStorage.setItem('studentData', JSON.stringify(studentData));}
  }, [studentData])
  useEffect(()=>{
    axios.get(`${API}/alunos?Cpf=${cpfApi}`).then(response=>{
      if(response.data.data.length ===1){
      setStudentData(response.data.data[0])}
      else{axios.get(`${API}/alunos?Cpf=${valueCpf}`).then(response=>{
        if(response.data.data.length ===1){
        setStudentData(response.data.data[0])}
        });}
      if(valueCpf === studentData.cpf && valueSenha === studentData.senha ){
        setLoginVerify(true);}
      else if(cpfApi === studentData.cpf && valueSenha === studentData.senha ){
      setLoginVerify(true);}
      else{
        setLoginVerify(false);}
      });
  },[cpfApi, valueSenha])

  if(verified){window.location=`areadoaluno`;}
  else{
    return(
    <div className='absolute'>
        <Header/>
        <div className='w-screen min-h-screen flex flex-col lg:pt-40 pt-20'>
          <BoxInstructions/>
          <BoxLogin cpfApi={cpfApi} studentData={studentData} valueSenha={valueSenha} setValueSenha={setValueSenha} valueCpf={valueCpf} setValueCpf={setValueCpf} loginVerify={loginVerify}/>
        </div>
        <Footer/>
    </div>)
    }
  }

