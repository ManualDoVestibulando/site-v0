import React from 'react';
import NotasChart from '../../../../components/NotasChart';
import NotasTable from '../../../../components/NotasTable';
import Layout from '../../../../components/Layout';
import axios from '../../../../lib/axios';
import { Col, Row } from 'react-bootstrap';

const Curso = ({ data, curso, notas }) => {
  return (
    <Layout>
      <Row className="mt-4">
        <Col md={12} xl={{ span: 8, offset: 2 }}>
          <h1>
            {curso.nome} - {curso.instituto.sigla}
          </h1>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={12} xl={{ span: 6, offset: 3 }}>
          <h2>Notas</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12} xl={{ span: 6, offset: 3 }}>
          <NotasChart notas={curso.notas} allNotas={notas} />
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={12} xl={{ span: 6, offset: 3 }}>
          <NotasTable notas={curso.notas} />
        </Col>
      </Row>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const query = `
    query Querry($curso: String!) {
      cursos(where: { slug_: $curso}) {
        nome
        instituto {
          sigla
        }
        notas(sort: "classificacao:asc"){
          fase1
          fase2dia1
          fase2dia2
          redacao
          classificacao
        }
      }
      notas{
        fase1
        fase2dia1
        fase2dia2
      }
    }
  `;

  const response = await axios.post('/graphql', {
    query,
    variables: {
      curso: params.curso,
    },
  });

  const data = response.data.data;
  console.log(data);
  let curso = { notas: [], instituto: { sigla: 'a' } };
  if (data.cursos) {
    curso = data.cursos[0];
  }

  let notas = data.notas.filter((value) => value != null);
  curso.notas = curso.notas.filter((value) => value != null);

  curso.notas.forEach((nota) => {
    nota.total =
      ((nota.fase1 / 90) * 1000 + nota.fase2dia1 * 10 + nota.fase2dia2 * 10) /
      3;
  });
  notas.forEach((nota) => {
    nota.total =
      ((nota.fase1 / 90) * 1000 + nota.fase2dia1 * 10 + nota.fase2dia2 * 10) /
      3;
  });

  curso.notas.forEach((nota) =>
    Object.keys(nota).forEach((key) => {
      try {
        nota[key] = Number(nota[key].toFixed(2));
      } catch (_) {}
    })
  );

  return {
    props: {
      curso,
      notas,
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const query = `
    {
      cursos {
        slug_
        instituto {
          slug_
        }
      }
    }
  `;

  const response = await axios.post('/graphql', {
    query,
  });

  const data = response.data.data;

  return {
    paths: data.cursos.map((curso) => {
      let institutoSlug = 'outro';
      if (curso.instituto != null) {
        if (typeof curso.instituto.slug_ === 'string') {
          institutoSlug = curso.instituto.slug_;
        }
      }
      return {
        params: {
          curso: curso.slug_,
          instituto: institutoSlug,
        },
      };
    }),
    fallback: false,
  };
};

export default Curso;
