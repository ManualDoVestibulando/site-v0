import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Link from 'next/link';

const ListaRedacoes = ({ redacoes, loading }) => {
  if (loading) {
    return <h2 className="lead">Carregando...</h2>;
  }

  return (
    <ListGroup>
      {redacoes.map((redacao) => (
        <Link
          href="/redacoes/fuvest/[id]"
          as={`/redacoes/fuvest/${redacao.id}`}
        >
          <ListGroup.Item key={redacao.id} className="mb-2" action>
            <p className="text-center p-0 m-0 lead">{redacao.ano}</p>
            <br></br>
            <p className="text-center p-0 m-0">Nota: {redacao.nota}</p>
          </ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  );
};

export default ListaRedacoes;
