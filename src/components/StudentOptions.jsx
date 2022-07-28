import React from 'react';
import StudentOption from '../components/StudentOption'
import { useState } from 'react';

export default function StudentOptions({selected, setSelected}){
    return(
        <div className='flex flex-col h-full lg:w-1/6'>
            <StudentOption id={0} text={'ÁREA DO ALUNO'}/>
            <StudentOption id={1} selected={selected} setSelected={setSelected} text={'Instruções'}/>
            <StudentOption id={2} selected={selected} setSelected={setSelected} text={'Curso atual'}/>
            <StudentOption id={3} selected={selected} setSelected={setSelected} text={'Todos os cursos'}/>
            <StudentOption id={4} selected={selected} setSelected={setSelected} text={'Comprar novo curso'}/>
            <StudentOption id={5} selected={selected} setSelected={setSelected} text={'Solicitar certificado'}/>
            <StudentOption id={6} selected={selected} setSelected={setSelected} text={'Boletos'}/>
            <StudentOption id={7} selected={selected} setSelected={setSelected} text={'Fale conosco'}/>
            <StudentOption id={8} selected={selected} setSelected={setSelected} text={'Alterar senha'}/>
            <StudentOption id={9} selected={selected} setSelected={setSelected} text={'Atualizar cadastro'}/>
            <StudentOption id={10} selected={selected} setSelected={setSelected} text={'Sair'}/>
        </div>
    )
}