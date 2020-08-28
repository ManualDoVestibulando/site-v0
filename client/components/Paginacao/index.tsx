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
          <li className="page-item item" key={numero}>
            <button onClick={() => paginar(numero)} className="page-link">
              {numero}
            </button>
          </li>
        ))}
      </ul>
      <style jsx global>
        {`
          .item {
            flex-wrap: wrap;
          }
        `}
      </style>
    </nav>
  );
};

export default Paginacao;
