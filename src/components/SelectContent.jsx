import React, { useState } from 'react'

export default function SelectContent() {
	const [currentBox, setCurrentBox] = useState(1)
	const boxContents = [
		{
			text: 'DESCRIÇÃO',
			active: true,
			id: 1
		},

		{
			text: 'OBJETIVO GERAL',
			active: false,
			id: 2
		},

		{
			text: 'OBJETIVOS ESPECÍFICOS',
			active: false,
			id: 3
		},

		{
			text: 'FUNDAMENTAÇÃO LEGAL',
			active: false,
			id: 4
		},

		{
			text: 'CURSOS',
			active: false,
			id: 5
		},

		{
			text: 'REMIÇÃO DA PENA POR ESTUDO',
			active: false,
			id: 6
		}

	]
  return (
    <div className='p-4 mt-2 w-screen h-screen'>
			<div className='flex flex-col items-center lg:flex-row justify-center'>
				{boxContents.map((bx, key)=>{
					return(
						<div onClick={()=> setCurrentBox(bx.id)} key={bx.id} className={`${currentBox === bx.id ? 'bg-transparent border-black text-black' : 'bg-[#EBECF0] text-black'} w-11/12 font-semibold md:h-1/4 lg:w-1/5 rounded-lg p-4 text-center mt-5 lg:mt-0 text-base lg:mr-4 cursor-pointer hover:border-black hover:bg-transparent border-2 hover:text-black transition-colors`}>
							<span>{bx.text}</span>
						</div>
					)
				})}
			</div>

			<div className='mt-0 m-auto'>
				<div className={`text-black text-xl ${currentBox === 1 ? 'block' : 'hidden'}`}>
				<h2 className='mt-5 text-2xl font-bold'>Título</h2>
				<p>Programa de Qualificação Profissional às Pessoas Privadas de Liberdade.</p>

				<h2 className='mt-5 text-2xl font-bold'>Identificação</h2>
				<p>Implantação de cursos de (re)qualificação profissional, na modalidade a distância, às pessoas privadas de liberdade, visando contribuir para a reintegração social destas pessoas, durante o cumprimento da pena e para a sua (re)inclusão no mercado de trabalho, após a sua saída.</p>

				</div>

				<div className={`text-black text-xl ${currentBox === 2 ? 'block' : 'hidden'}`}>
					<p className='mt-5'>Promover aos internos do sistema penitenciário de regime fechado e semiaberto das penitenciárias masculinas e femininas do país, oportunidades de qualificação profissional inicial e continuada, na forma de cursos de qualificação profissional – EaD, adaptadas às exigências atuais do mercado de trabalho e às necessidades dos estudantes reeducandos, visando à requalificação e à (re)inclusão no mundo do trabalho nas mais diversas áreas em que atuam/atuavam ou venham a atuar, em diferenciados setores produtivos, motivando-os a não reincidir no crime, dando-lhes os subsídios necessários à prática profissional.</p>
				</div>

				<div className={`text-black text-xl ${currentBox === 3 ? 'block' : 'hidden'}`}>
					<ul>
					<li className='mt-5'>✔ Promover a capacitação profissional dos internos do sistema penitenciário, de forma a assegurar o direito do apenado à instrução escolar e formação profissional, em nível de iniciação ou de aperfeiçoamento;</li>

					<li className='mt-5'>✔ Contribuir para a elevação do nível de escolaridade dos reeducandos;</li>

					<li className='mt-5'>✔ Favorecer a aquisição de conhecimentos por meio da leitura;</li>

					<li className='mt-5'>✔ Promover o crescimento pessoal e profissional do reeducando durante o cumprimento da sua pena, visando à recuperação da sua dignidade;</li>

					<li className='mt-5'>✔ Possibilitar a recuperação da autoestima do apenado por meio dos estudos que o qualificarão para o exercício de uma profissão útil à sociedade;</li> 

					<li className='mt-5'>✔ Promover a reinserção do interno ao convívio social;</li>

					<li className='mt-5'>✔ Qualificar os egressos do sistema penitenciário para a (re)inserção no mercado de trabalho, para que não voltem a reincidir no crime;</li>

					<li className="mt-5">✔ Desenvolver e aprimorar as habilidades profissionais dos alunos reclusos;</li>

					<li className="mt-5">✔ Dar condições aos internos para que se tornem aptos a usufruir o direito à remição de pena pelo estudo.</li>

					</ul>
				</div>

				<div className={`text-black text-xl ${currentBox === 4 ? 'block' : 'hidden'}`}>
					<p className='mt-5'>Lei de Diretrizes e Bases da Educação Nacional (LDB) - Lei nº 9.394/1996, em especial, os dispositivos que tratam da Educação Profissional e Tecnológica, que contempla os cursos de qualificação profissional.</p>

					<p className='mt-5'>Lei nº 7.210/84, que institui a Lei de Execução Penal, em especial o artigo 126 que trata da remição da pena pelo estudo, em atividade de ensino fundamental, médio, inclusive profissionalizante, ou superior, ou ainda de requalificação profissional, desenvolvidas de forma presencial ou por metodologia de ensino a distância e devem ser certificadas pelas autoridades educacionais competentes dos cursos frequentados.</p>

					<p className='mt-5'>Decreto nº 7.626/2011, que institui o Plano Estratégico de Educação no âmbito do Sistema Prisional, que contempla, dentre outras, a educação profissional e tecnológica – art. 2º, e que autoriza convênios, acordos de cooperação, ajustes ou instrumentos congêneres, com entidades privadas – art. 10º, com a finalidade de ampliar e qualificar a oferta de educação nos estabelecimentos penais. </p>

					<p className='mt-5'>Resolução/CNJ nº 391/2021, que reconhece o direito à remição de pena por meio de atividades educacionais, dentre outras atividades não-escolares, as de capacitação profissional às pessoas privadas de liberdade, ofertadas pelas instituições de ensino privadas, autorizadas pelo Sistema Penitenciário.</p>

					<p>Recomendação nº 69/2019, do Conselho Nacional do Ministério Público, que recomenda ao  Ministério Público da  União e  dos Estados que, para  fins  de  remição  de  parte  do  tempo  de  execução  da  pena  por  estudo,  sejam  incentivadas,  valoradas  e  consideradas  as  atividades  de  caráter complementar,  assim  entendidas  aquelas  que  ampliam  as  possibilidades  de  educação  nas prisões,  tais  como  as  de  natureza  cultural,  esportiva,  de  qualificação  profissional,  dentre  outras,  e  sejam  oferecidas  por instituição autorizada pelo Sistema Penitenciário.</p>

					<p>Resolução nº 14/1994, Conselho Nacional de Política Criminal e Penitenciária (CNPCP), que disciplina no art. 42 “Deverá ser permitido ao preso participar de curso por correspondência, rádio ou televisão, sem prejuízo da disciplina e da segurança do estabelecimento”.</p>
				</div>

				<div className={`text-black text-xl ${currentBox === 5 ? 'block' : 'hidden'}`}>
				<h2 className='mt-5 text-2xl font-bold'>Identificação</h2>
				<p>Cursos de capacitação ou qualificação profissional, dos quais estão inseridos no tópico das atividades de educação não-escolar, previstos no art. 2º, inciso II da Resolução nº 391/2021, do Conselho Nacional de Justiça.</p>

				<h2 className='mt-5 text-2xl font-bold'>Modalidade de ensino e material didático</h2>
				<p>Os cursos pertencem à modalidade de educação a distância, executados pelo método de autoaprendizagem, por meio de material didático impresso, em apostilas/módulos de formato brochura.</p>

				<h2 className='mt-5 text-2xl font-bold'>Carga horária e período de realização</h2>
				<p>Os cursos, que contemplam as diversas áreas e temas, têm cargas horárias, que variam entre 60 a 230 horas, parametrizadas conforme a extensão do conteúdo de suas matrizes curriculares. </p>

				<p className='mt-5'>O período de realização de cada curso é proporcional à sua carga horária total, de forma que a cada 12 (doze) horas de estudo, estas são divididas em, no mínimo, 3 (três) dias. Desta forma, a carga horária de estudos é de até 4 (quatro) horas/dia.</p>

				<p className='mt-5'>É realizado um curso de cada vez, sendo que o início de um ocorre subsequentemente ao término de outro.</p>

				<h2 className='mt-5 text-2xl font-bold'>Vagas</h2>
				<p>A oferta dos cursos é ilimitada, porém condicionada às condições do estabelecimento penitenciário.</p>

				<h2 className='mt-5 text-2xl font-bold'>Público-alvo</h2>
				<p>Pessoas privadas de liberdade, do sexo masculino e feminino.</p>

				<h2 className='mt-5 text-2xl font-bold'>Requisitos para o ingresso e formas de acesso</h2>
				<p>Os cursos são destinados a pessoas que, independentemente do nível de escolaridade, tenham capacidade de aproveitamento em termos de desenvolvimento de aprendizagens profissionais para o mundo do trabalho.</p>

				<p className='mt-5'>As inscrições podem ser realizadas pelos familiares/responsáveis dos estudantes/reeducandos no site: www.cenedqualificando.com.br</p>

				<h2 className='mt-5 text-2xl font-bold'>Local de realização</h2>
				<p>Os cursos são realizados no interior dos estabelecimentos penitenciários de custódia dos estudantes/reeducandos do regime fechado ou semiaberto.</p>

				<h2 className='mt-5 text-2xl font-bold'>Acompanhamento do curso pelo familiar ou visitante </h2>
				<p>O familiar ou visitante poderá acompanhar, por meio do portal da Escola CENED (www.cenedqualificando.com.br), a realização do curso pelo interno. </p>

				<p className='mt-5'>No ato da inscrição on-line, será criado o acesso à ÁREA DO ALUNO e neste ambiente o familiar ou visitante poderá acompanhar, passo a passo, a realização do curso: da confirmação da matrícula à certificação. Além disso, o familiar ou visitante receberá, via SMS (mensagem no celular cadastrado), as informações sobre as principais etapas de realização do curso.</p>
				</div>

				<div className={`text-black text-xl ${currentBox === 6 ? 'block' : 'hidden'}`}>
					<p className='mt-5'>A remição da pena por estudo está prevista no art. 126 da Lei nº 7.210/84 – Lei de Execução Penal. </p>

					<p className='mt-5'>Art. 126.  O condenado que cumpre a pena em regime fechado ou semiaberto poderá remir, por trabalho ou <b>por estudo</b>, parte do tempo de execução da pena. </p>

					<p className='mt-5'>§ 1º  A contagem de tempo referida no caput será feita à razão de: </p>

					<p className='mt-5'>I - <b>1 (um) dia de pena</b> a cada <b>12 (doze) horas</b> de frequência escolar - atividade de ensino fundamental, médio, <b>inclusive profissionalizante</b>, ou superior, ou ainda de <b>requalificação profissional</b> - divididas, no mínimo, em 3 (três) dias;</p>

					<p>§ 2º As atividades de estudo a que se refere o § 1o deste artigo poderão ser desenvolvidas de forma presencial ou por <b>metodologia de ensino a distância</b> e deverão ser certificadas pelas autoridades educacionais competentes dos cursos frequentados.</p>
				</div>
			</div>
    </div>
  )
}
