import React from 'react';

const Paginacao = ({ itensPorPagina, itensTotal, paginar }) => {
  const numerosPaginas = [];

  for (let i = 1; i <= Math.ceil(itensTotal / itensPorPagina); i++) {
    numerosPaginas.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {numerosPaginas.map((numero) => (
          <li key={numero}>
            <a onClick={() => paginar(numero)} href="#" className="page-link">
              {numero}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginacao;
