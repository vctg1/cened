import React from 'react'
import BoxInfo from './BoxInfo'

export default function DetailInfo() {
  return (
    <div className='p-4 flex flex-col items-center'>
			<BoxInfo title={'Matrícula do Reeducando'} text={'Faça a matrícula do Reeducando neste site. O pagamento poderá ser feito em cartão de crédito, PIX ou boleto bancário referente ao valor total do curso que você escolheu.'}/>

			<BoxInfo title={'Entrega do material didático ao Reeducando (apostila)'}>
				<p>Confirmado o pagamento do curso, a Escola CENED etiquetará o material didático, identificando o nome completo e o endereço prisional do Reeducando.</p>

				<p><span className='font-extrabold'>NO DISTRITO FEDERAL:</span> O material didático será entregue, em mãos, ao Chefe do Núcleo de Ensino da Unidade Prisional onde se encontra o Interno.</p>
				<p><span className='font-extrabold'>NOS ESTADOS:</span> O material didático será encaminhado, via Correios, aos cuidados do Chefe do Núcleo de Ensino ou Agente de Ensino da Unidade Prisional onde se encontra o Reeducando.</p>
			</BoxInfo>

			<BoxInfo title={'Distribuição do material didático aos Internos'} text={'O Chefe do Núcleo de Ensino ou Agente de Ensino da Unidade Prisional repassará a cada Reeducando o seu material didático - apostila.'}/>

			<BoxInfo title={'Realização do curso'} text={'O Reeducando realizará o curso na própria cela. O curso consistirá no estudo sequencial dos módulos da apostila e realização de uma prova escrita final na unidade prisional.'}/>

			<BoxInfo title={'Acompanhamento do curso pelo familiar, visitante ou defensor'} text={'O familiar, visitante ou defensor poderá acompanhar, por meio do portal da Escola CENED, a realização do curso pelo Reeducando. No ato da inscrição on-line será criada a ÁREA DO ALUNO e neste ambiente o familiar ou visitante poderá acompanhar, passo- a-passo, em tempo real, a realização do curso: da confirmação da matrícula ao recebimento do certificado.'}/>

			<BoxInfo title={'Material didático - apostila'} text={'O material didático será composto por apostilas que se apresentarão em linguagem clara, simples, objetiva e acessível, que facilitará a autoaprendizagem. Os textos serão explicativos, exemplificando diversas situações características das profissões, além de disponibilizar orientações prático-teóricas que estimularão o raciocínio e o pensamento crítico.'}/>

			<BoxInfo title={'Avaliação presencial'} text={'O Reeducando realizará, ao final de cada curso, uma prova escrita obrigatória para aferição do seu rendimento. O estudante/reeducando realizará uma única prova, quando obtiver a nota mínima para aprovação, que será de 60% (sessenta por cento) do total da pontuação. Quando o estudante não obtiver a pontuação exigida, deverá realizar outra prova (recuperação da aprendizagem).'}/>

			<BoxInfo title={'Realização da prova final'}>
				<p className='text-lg'><span className='font-extrabold'>NO DISTRITO FEDERAL</span>
					<br /> <b>a)</b> Aplicação: serão aplicadas aos Reeducandos, na sua Unidade Prisional, as provas escritas relativas aos cursos concluídos. As provas serão aplicadas pelo Chefe do Núcleo de Ensino ou por quem o Diretor do estabelecimento prisional vier a designar, acompanhado de funcionário da Escola CENED.</p>
				
				<p className='text-lg'><b>b)</b> Ao final da aplicação: as provas serão recolhidas e encaminhadas pelo funcionário da Escola CENED para correção.</p>

				<p className='text-lg'><span className='font-extrabold'>NOS OUTROS ESTADOS</span>
				<br /><b>c)</b> Recebimento: a Escola CENED encaminhará, via Correios, com antecedência de 10 (dez) dias, as provas para serem aplicadas.</p>

				<p className='text-lg'><b>d)</b> Aplicação: serão aplicadas aos Reeducandos, na sua Unidade Prisional, as provas escritas relativas aos cursos concluídos. As provas poderão ser aplicadas pelo Chefe do Núcleo de Ensino ou por quem o Diretor do estabelecimento prisional vier a designar.</p>

				<p className='text-lg'><b>e)</b> Devolução: após realização, as provas serão encaminhadas, via Correios, à Escola CENED.</p>
			</BoxInfo>

			<BoxInfo title={'Correção e resultado das provas'}>
				<p className='text-lg'>A Equipe Pedagógica da Escola CENED fará a correção das provas. O Reeducando que: </p>
				<p className='text-lg'><b>a)</b> Obtiver a nota mínima para aprovação, que será de 60% (sessenta por cento) do total da pontuação, receberá o Certificado expedido por esta Instituição Educacional;</p>

				<p className='text-lg'><b>b)</b> Não alcançar a média mínima, realizará outra prova, isento de pagamento, contendo todo o conteúdo do curso estudado, porém com questões diferentes da primeira. Após estas duas avaliações, as demais serão aplicadas mediante pagamento de taxa.</p>
			</BoxInfo>

			<BoxInfo title={'Entrega do certificado ao Núcleo de Ensino'}>
				<p className='text-lg font-extrabold'>NO DISTRITO FEDERAL</p>

				<p className='text-lg'>A Escola CENED entregará, em mãos, os certificados dos reeducandos aprovados, aos cuidados do Chefe do Núcleo de Ensino, que por sua vez, os repassarão às Assessorias Jurídicas das Unidades Prisionais para as providências quanto à confecção da certidão relativa ao estudo para fins de remição de pena, junto às Varas de Execuções Penais.</p>

				<p className='text-lg font-extrabold'>NOS OUTROS ESTADOS</p>

				<p className='text-lg'>A Escola CENED encaminhará, via Correios, os certificados dos reeducandos aprovados, aos cuidados do Chefe do Núcleo de Ensino, que por sua vez, os repassarão às Assessorias Jurídicas das Unidades Prisionais para as providências quanto à confecção da certidão relativa ao estudo para fins de remição de pena, junto às Varas de Execuções Penais ou Criminais.</p>
			</BoxInfo>

			<BoxInfo title={'Da remição de pena'}>
				<p className='text-lg'>Conforme a Lei de Execução Penal, o estudante/reeducando poderá pleitear o benefício de 1 (um) dia de remição da pena a cada 12 (doze) horas <span className='underline'>de estudo</span> ou seja, a cada 3 (três) dias de estudo, 1 (um) dia de remição da pena.</p>

				<p className='text-lg'>Nos termos do artigo 126, parágrafo 2º, da Lei nº 7.210/84 (Lei de Execução Penal), a atividade de estudo desenvolvida a distância ou presencial tem o condão de remir parte do tempo de execução da pena se devidamente certificada pela instituição educacional competente e responsável pelos cursos realizados.</p>

				<p className='text-lg'>E, ainda, nos termos da LEP, para calcular os dias a serem remidos em razão do período estudado, desde que não ultrapasse 12 horas a cada três dias ou, em média, 4 horas/dia, será feito da seguinte forma: dividir-se-á a CARGA HORÁRIA TOTAL DO CURSO por 12 horas e encontrar-se-á o TEMPO A SER REMIDO.</p>

				<p className='text-lg'>A Resolução nº 391/2021, do Conselho Nacional de Justiça, regulamenta o direito à remição de pena por meio de atividades educacionais em unidades de privação de liberdade, que podem ser ofertadas por instituições de ensino públicas ou privadas.</p>
			</BoxInfo>

			<BoxInfo title={'Ação de cooperação educacional entre a Escola CENED e a unidade prisional'}>
				<p className='text-lg'>Em síntese, a realização dos cursos pelos Reeducandos será executada mediante a ação conjunta entre a Escola CENED e o Núcleo de Ensino do Estabelecimento Prisional, em cumprimento ao exercício do direito do preso à educação, com rotina semanal para: </p>

				<p className='text-lg'><b>a)</b> Entrega do material didático;</p>

				<p className='text-lg'><b>b)</b> Aplicação de provas; e</p>

				<p className='text-lg'><b>c)</b> Entrega dos certificados.</p>
			</BoxInfo>

			<BoxInfo title={'Matrícula em um novo curso'} text={'Será realizado um curso de cada vez, sendo que o início de um ocorrerá subsequentemente ao término de outro. O aluno/reeducando poderá ser matriculado em mais de um curso: o PRIMEIRO CURSO será ativado e os demais ficarão agendados no sistema, aguardando conclusão do curso em realização. Na hipótese de matrícula em mais de um curso, será encaminhado à Unidade Prisional o material didático, individualmente, de cada curso, conforme a sua conclusão.'}/>
    </div>
  )
}
