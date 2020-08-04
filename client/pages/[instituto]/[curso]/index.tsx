import React from 'react';
import { initializeApollo } from '../../../lib/apollo';
import gql from 'graphql-tag';
import Layout from '../../../components/Layout';
import CursoRepository from '../../../lib/cursoRepository';
import institutoRepository from '../../../lib/institutoRepository';

const Curso = ({ curso }) => {
  console.log(curso);
  return (
    <Layout>
      <main>
        <h2> {curso.instituto.nome} </h2>
        <h3> {curso.nome} </h3>
      </main>
    </Layout>
  );
};

const pathsQuery = gql`
  {
    cursos {
      nome
      instituto {
        sigla
      }
    }
  }
`;

const queryData = gql`
  query Curso($sigla: String!, $curso: String!) {
    cursos(
      where: { nome: $curso, instituto: { sigla: $sigla } }
    ) {
      nome
      instituto {
        nome
        sigla
      }
    }
  }
`;

export const getStaticProps = async ({ params }) => {
  const curso = await CursoRepository.findBySlug(params.curso, params.instituto)
  return {
    props: {
      curso,
    },
  };
};

export const getStaticPaths = async () => {
  let cursos = await CursoRepository.getAll()
  cursos = CursoRepository.addSlug(cursos)
  cursos = cursos.map(curso => ({
    ...curso,
    instituto: institutoRepository.addSlug([curso.instituto])[0]
  }))

  console.log(cursos[3])

  return {
    paths: cursos.map((curso) => ({
      params: {
        instituto: curso.instituto.slug,
        curso: curso.slug,
      },
    })),
    fallback: false,
  };
};

export default Curso;
