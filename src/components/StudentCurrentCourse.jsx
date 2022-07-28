import React from 'react'
import {HiOutlineDocumentSearch} from 'react-icons/hi'

export default function StudentCurrentCourse({currentCourse}){
    let dateInitCourse = '', calcDays='',oldDate='',testDate='';
    let date = new Date(currentCourse.dataMatricula).toLocaleDateString('pt-BR');
    let datePayment = '', dateFinalTest = '', testGrade ='', testResult='';
    if(currentCourse.statusCurso === 4 || currentCourse.statusCurso === 7){testResult = `${currentCourse.statusCursoDescricao}. Fará 2ª Prova.`}
    else{testResult=currentCourse.statusCursoDescricao}
    if(currentCourse.dataPagamento){datePayment = new Date(currentCourse.dataPagamento).toLocaleDateString('pt-BR');}
    if(currentCourse.inicioCurso) {dateInitCourse = new Date(currentCourse.inicioCurso).toLocaleDateString('pt-BR');
    calcDays = (currentCourse.curso.cargaHoraria/4); oldDate = new Date(currentCourse.inicioCurso.toString());
    testDate= new Date(oldDate.getFullYear(),oldDate.getMonth(),oldDate.getDate()+calcDays).toLocaleDateString('pt-BR');}
    if(currentCourse.ultimaProvaRealizada)
    {dateFinalTest = new Date(currentCourse.ultimaProvaRealizada.dataRecebidaProva).toLocaleDateString('pt-Br');
    testGrade = currentCourse.ultimaProvaRealizada.nota}

    return(
        <div className='lg:w-5/6 h-full'>
            <div className='lg:p-10 p-5 flex flex-col items-center'>
                <h1 className='flex items-center text-2xl font-bold'><HiOutlineDocumentSearch/>Curso atual</h1>
                <h2 className='text-gray-500 text-center lg:text-start'>Histórico completo do Curso em Andamento ou Último Curso realizado pelo Aluno</h2>
            </div>
            <div className='w-full h-5/6 flex flex-col lg:flex-row border-8 border-white rounded-xl flex-wrap'>
                <div className='lg:w-1/2 p-2 overflow-auto lg:h-auto  border-gray-400'>
                    <p className='text-xl text-center font-bold mb-10'>Trâmites da Matrícula e do Curso</p>
                    <li className='border-2 list-none p-2 hover:bg-gray-200'>A pré-matrícula foi recebida/registrada na Escola CENED em: <b>{date}</b></li>
                    <li className='border-2 list-none p-2 hover:bg-gray-200'>Pré-matrícula realizada no site por: <b>{currentCourse.aluno.nomePreposto}</b></li>
                    <li className='border-2 list-none p-2 hover:bg-gray-200'>Matrícula efetivada. Pagamento liquidado em: <b>{datePayment}</b></li>
                    <li className='border-2 list-none p-2 hover:bg-gray-200'>Início do curso: <b>{dateInitCourse}</b></li>
                    <li className='border-2 list-none p-2 hover:bg-gray-200'>Material didático enviado para: <b>{currentCourse.materialEnviadoParaDescricao}</b></li>
                    <li className='border-2 list-none p-2 hover:bg-gray-200'>Situação do curso: <b>{currentCourse.statusCursoDescricao}</b></li>
                    </div>
                <div className='lg:w-1/2 p-2 h-72 overflow-auto lg:h-auto lg:border-l-2 border-gray-400'>
                    <p className='text-xl text-center font-bold mb-10'>Trâmite da Prova</p>
                    <li className='border-2 list-none p-2 hover:bg-gray-200'>Data prevista para realização da prova na Unidade Prisional: <b>{testDate}</b></li>
                    <li className={`${dateFinalTest === '' ? 'hidden':''} border-2 list-none p-2 hover:bg-gray-200`}>PROVA realizada. Resultado da prova: <b>{testGrade} - {testResult}</b></li>
                    </div>
            </div>
        </div>
    )
}