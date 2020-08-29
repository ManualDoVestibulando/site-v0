import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Link from 'next/link';

const ListaDepoimentos = ({ depoimentos, loading }) => {
  if (loading) {
    return <h2 className="lead">Carregando...</h2>;
  }

  return (
    <ListGroup>
      {depoimentos.map((depoimento) => (
        <ListGroup.Item key={depoimento.id} className="mb-2" action>
          <a className="text-center p-0 m-0 lead" href={depoimento.link}>
            {depoimento.titulo}
          </a>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListaDepoimentos;
