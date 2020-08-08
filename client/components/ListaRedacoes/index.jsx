import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ListaRedacoes = ({ redacoes, loading }) => {
  if (loading) {
    return <h2>Carregando...</h2>;
  }

  return (
    <ListGroup>
      {redacoes.map((redacao) => (
        <ListGroup.Item key={redacao.id}>{redacao.titulo}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListaRedacoes;
