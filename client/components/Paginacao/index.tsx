import React from 'react';

const Paginacao = ({ itensPorPagina, itensTotal, paginar, pagAtual }) => {
  const numerosPaginas = [];

  for (let i = 1; i <= Math.ceil(itensTotal / itensPorPagina); i++) {
    numerosPaginas.push(i);
  }
  const numPaginasMostrar = 2;

  let ultimaPag =
    pagAtual + numPaginasMostrar > numerosPaginas.length
      ? numerosPaginas.length
      : pagAtual + numPaginasMostrar;

  const primeiraPag =
    pagAtual - numPaginasMostrar < 1 ? 1 : pagAtual - numPaginasMostrar;

  if (numerosPaginas.length >= 5 && (pagAtual == 1 || pagAtual == 2)) {
    ultimaPag = 5;
  }

  const numerosAtuais = numerosPaginas.slice(primeiraPag - 1, ultimaPag);

  return (
    <nav>
      <ul className="pagination mb-0">
        <li className="page-item" key={'a'}>
          <button onClick={() => paginar(pagAtual - 1)} className="page-link">
            {'<'}
          </button>
        </li>
        {numerosAtuais.map((numero) => (
          <li className="page-item" key={numero}>
            <button onClick={() => paginar(numero)} className="page-link">
              {numero}
            </button>
          </li>
        ))}
        <li className="page-item" key={'b'}>
          <button onClick={() => paginar(pagAtual + 1)} className="page-link">
            {'>'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginacao;
