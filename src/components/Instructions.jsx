import React from "react";

export default function Instructions() {
  return (
    <div className="w-11/12 p-4 rounded-xl mt-0 m-auto">
      <span className="font-semibold text-xl">Amigo(a) interessado(a),</span>
      <p className="text-xl mt-5">
        Seja você pessoa FÍSICA ou JURÍDICA, convidamos-lhe a trabalhar conosco
        como parceiro no marketing e divulgação do nosso Programa de
        Qualificação Profissional as Pessoas Privadas de Liberdade, aplicado nos
        estados. Faça contato, por telefone ou via e-mail. No e-mail, escreva:
      </p>
      <div className="flex lg:flex-row flex-col justify-between mt-10 text-lg">
        <div className="rounded-xl p-8 bg-[#EBECF0] cursor-pointer shadow-lg hover:bg-transparent transition-colors mt-5 lg:mt-0">
          <h1>1.Assunto: Proposta de parceria.</h1>
          <h2>2.Nome Completo.</h2>
        </div>

        <div className="rounded-xl p-8 bg-[#EBECF0] cursor-pointer shadow-lg hover:bg-transparent transition-colors mt-5 lg:mt-0">
          <h1>3.Município e estado onde reside.</h1>
          <h2>4.Contatos telefônicos: celular e residencial.</h2>
        </div>

        <div className="rounded-xl p-8 bg-[#EBECF0] cursor-pointer shadow-lg hover:bg-transparent transition-colors mt-5 lg:mt-0">
          <h1>5.Profissão ou trabalho que exerce atualmente.</h1>
          <h2>6.Descreva a sua proposta.</h2>
        </div>
      </div>
    </div>
  );
}
