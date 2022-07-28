import React from 'react'
import {BsCheckCircle} from 'react-icons/bs'
import Card from './Card.jsx'
import {MdOutlineMenuBook} from 'react-icons/md'
import {TiEdit} from 'react-icons/ti'
import {AiFillCreditCard} from 'react-icons/ai'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {IoSchoolOutline} from 'react-icons/io5'
import {HiDownload} from 'react-icons/hi'

export default function HowItWorks() {
  return (
    <div className='p-4 w-11/12 mt-10 m-auto'>
      <h2 className='mt-5 text-center text-4xl font-bold'>COMO FUNCIONA</h2>
			<div className='flex justify-center max-w-full flex-wrap items-center flex-col lg:flex-row '>
      <div className='text-black bg-[#EBECF0] mr-0 lg:mr-10 mt-10 rounded-xl h-64 flex flex-col items-center p-6 w-4/5 lg:w-1/4'>
          <h2 className='uppercase text-center font-bold text-xl'>1º PASSO: AUTORIZAÇÃO</h2>
          <BsCheckCircle size={70}/>
          <p className='text-lg text-center p-2'>Solicite a autorização de estudo junto à Unidade Prisional.</p>
          <a target={'_blank'} href="https://www.cenedqualificando.com.br/Arquivos/Requerimento.docx" rel="noreferrer">
            <button className="bg-black hover:bg-transparent border-2 text-white font-semibold hover:text-black py-0 px-2 flex items-center transition-colors hover:border-black rounded">
              BAIXAR REQUERIMENTO <HiDownload size={40}/>
            </button>
          </a>
        </div>
        <Card title={'2º PASSO: CURSO'} text={'Escolha um dos Cursos disponíveis no site.'}>
          <MdOutlineMenuBook size={70}/>
        </Card>

        <Card title={'3º PASSO: MATRÍCULA'} text={'Informe os dados Pessoais do Interno e do Responsável.'}>
          <TiEdit size={70}/>
        </Card>

        <Card title={'4º PASSO: PAGAMENTO'} text={'Escolha uma de nossas formas de pagamento na ÁREA DO ALUNO.'}>
          <AiFillCreditCard size={70}/>
        </Card>

        <Card title={'5º PASSO: ANDAMENTO'} text={'Acompanhe o histórico de andamento na ÁREA DO ALUNO.'}>
          <HiOutlineDocumentText size={70}/>
        </Card>

        <Card title={'6º PASSO: CONCLUSÃO'} text={'Após a aprovação será enviado um Certificado impresso.'}>
          <IoSchoolOutline size={70}/>
        </Card>
			</div>
    </div>
  )
}
