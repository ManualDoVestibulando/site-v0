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
        <Link href="/redacoes/enem/[id]" as={`/redacoes/enem/${redacao.id}`}>
          <ListGroup.Item key={redacao.id} className="mb-2" action>
            <p className="text-center p-0 m-0 lead">{redacao.titulo}</p>
            <br></br>
            <p className="text-center p-0 m-0">Nota: {redacao.nota_total}</p>
          </ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  );
};

export default ListaRedacoes;
