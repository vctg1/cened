import React, { useEffect } from "react";
import "./RegisterForm.css";
import { useState } from "react";
import { FormControl, Collapse, Button, Grid, Box, FormGroup } from "@mui/material";
import axios from "axios";
import RegForm1 from "./RegForm1";
import RegForm2 from "./RegForm2";
import RegForm3 from "./RegForm3";
import RegForm4 from "./RegForm4";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  let Navigate = useNavigate();
  let api = process.env.REACT_APP_API_KEY;
  let [penitenciaria, setPenitenciaria] = useState([]);
  let [alert, setAlert] = useState(false),
  [alertTxt, setAlertTxt] = useState(""),
  startData = {
    nome: '',sexo: '',cpf: '',rg: '',orgaoExpedidor: '',dataNascimento: '',
    naturalidade: '',ufNaturalidade: '',nacionalidade: '',endereco: '',
    bairro: '',cidade: '',ufResidencial: '',cep: '',senha: '',confirmarSenha: '',
    celular: '',foneResidencial: '',foneComercial: '',email: '',
    nomePreposto: '',vinculo: '',sexoPreposto: '',cpfPreposto: '',
    rgPreposto: '',orgaoExpedidorPreposto: '',grauInstrucao: '',atuacaoHabilitacao: '',
    profissao: '',bloco: '',ala: '',cela: '',condicaoPreso: '',
    regime: '',infopen: '',mae: '',pai: '',
    penitenciaria: { idPenitenciaria: '', uf: '' }
  },
  [data, setData] = useState(startData);

  let [generalClauses, setGeneralClauses] = useState(false),
    keysPenitenciaria = Object.keys(data.penitenciaria),
    keysAluno = Object.keys(data),
    valueElements = [...keysAluno,...keysPenitenciaria];
  let emptyElements = [];
  valueElements.forEach((vl) => {
    if (data[vl] === '' || data.penitenciaria[vl] === '') {
      emptyElements.push(vl);
    }
  });
  function clearElements() {
    setData(startData)
  }
  const handleSubmit = event =>{
    event.preventDefault();
    let confirmarSenha = data.senha === data.confirmarSenha;
    if (confirmarSenha && !emptyElements.length > 0 && generalClauses) {
      NotificationManager.success('Aluno cadastrado', 'SUCESSO',500);
      setTimeout(function () {
        Navigate('/login')
      }, 500);
    }
    if (emptyElements.length > 0) {
      setAlert(true);
      NotificationManager.error(`${emptyElements.slice(0,4)}...`, 'HÁ ITENS INCOMPLETOS', 1500);
    }
    if (!confirmarSenha && !emptyElements.length > 0) {
      setAlert(true);
      NotificationManager.error('As senhas não coincidem', 'ERRO', 1500);
    }
    if (!emptyElements.length > 0 && !generalClauses) {
      setAlert(true);
      NotificationManager.error('Você deve aceitar as cláusulas gerais para continuar', 'ERRO', 1500);
    }
  }


  useEffect(()=>{
    axios.get(`${api}penitenciarias?Limit=400`).then(res=>{
      setPenitenciaria([]);
      let dataPenitenciaria = res.data.data;
      dataPenitenciaria.forEach((item)=>{
      if(data.penitenciaria.uf===item.uf){
        setPenitenciaria((data)=>[...data,item])
      }
    })
    })
  },[data.penitenciaria])
  return (
    <div className="flex flex-col mt-10">
      <form onSubmit={handleSubmit} style={{ fontSize: "20px", marginLeft: "40px" }}>
        <h1 className="titles"> 1 - DADOS DO REEDUCANDO</h1>
        <RegForm1 data={data} setData={setData} alert={alert} />
        <h2 className="titles">
          2 - DADOS DO RESPONSÁVEL: Familiar / Visitante / Advogado
        </h2>
        <RegForm2 data={data} setData={setData} alert={alert} />
        <h3 className="titles">3 - DADOS PRISIONAIS</h3>
        <RegForm3 data={data} setData={setData} alert={alert} penitenciaria={penitenciaria} />
        <h4 className="titles">4 - DADOS GERAIS</h4>
        <RegForm4 data={data} setData={setData} alert={alert} generalClauses={generalClauses} setGeneralClauses={setGeneralClauses} />
      <Box className="w-full flex justify-center gap-4 lg:gap-52" >
        <Button
          style={{minWidth:'15%'}}
          variant='contained'
          color='error'
          onClick={() => clearElements()}
          >
          <b>LIMPAR</b>
        </Button>
        <Button
          style={{minWidth:'20%'}}
          variant='contained'
          color='warning'
          type="submit"
          >
          <b>CONCLUIR CADASTRO</b>
        </Button>
      </Box>
          </form>
      <NotificationContainer/>
    </div>
  );
}
