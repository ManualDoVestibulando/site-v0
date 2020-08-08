import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ListaRedacoes = ({ redacoes, loading }) => {
  if (loading) {
    return <h2 className="lead">Carregando...</h2>;
  }

  return (
    <ListGroup>
      {redacoes.map((redacao) => (
        <ListGroup.Item key={redacao.id} className="mb-2">
          <p className="text-center p-0 m-0 lead">{redacao.titulo}</p>
          <br></br>
          <p className="text-center p-0 m-0">Nota: {redacao.nota}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListaRedacoes;
