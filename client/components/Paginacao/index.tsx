import React from 'react';

const Paginacao = ({ itensPorPagina, itensTotal, paginar }) => {
  const numerosPaginas = [];

  for (let i = 1; i <= Math.ceil(itensTotal / itensPorPagina); i++) {
    numerosPaginas.push(i);
  }

  return (
    <nav>
      <ul className="pagination mb-0">
        {numerosPaginas.map((numero) => (
          <li key={numero}>
            <button onClick={() => paginar(numero)} className="page-link">
              {numero}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginacao;
