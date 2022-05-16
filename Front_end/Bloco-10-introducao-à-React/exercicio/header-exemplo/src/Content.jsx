import React from "react";

import './App.css'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() { 
    return <section className="pai">
        {conteudos.map((conteudo) => {
        const conteud = `O conteúdo é: ${conteudo.conteudo}`;
        const status = `Status: ${conteudo.status}`
        const bloco = `Bloco: ${conteudo.bloco}`
        return <div className="divs">
          <p>{conteud}</p>
          <p>{status}</p>
          <p>{bloco}</p>
        </div>
      } 
    )
};
    </section>
  }
}

export default Content;