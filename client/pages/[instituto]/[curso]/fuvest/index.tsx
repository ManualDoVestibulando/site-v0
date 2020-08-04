import React from 'react';
import gql from 'graphql-tag';
import Layout from '../../../../components/Layout';
import CursoRepository from '../../../../lib/cursoRepository';
import institutoRepository from '../../../../lib/institutoRepository';

const Curso = ({ curso }) => {
  const notas = curso[`notas({"sort":"classificacao"})`]
  console.log(notas)
  return (
    <Layout>
      <h2> {curso.instituto.nome} </h2>
      <h3> {curso.nome} </h3>
      <h4>Fuvest</h4>
      <article>
        <h1>Notas</h1>
        <table>
            <thead>
                <tr>
                    <td>Primeira fase</td>
                    <td>Segunda fase - Dia 1</td>
                    <td>Segunda fase - Dia 2</td>
                    <td>Redaçaõ</td>
                    <td>Classificação</td>
                </tr>
            </thead>
            <tbody>
                {notas.map(nota => (
                    <tr>
                        <td>{nota.fase1}</td>
                        <td>{nota.fase2dia1}</td>
                        <td>{nota.fase2dia2}</td>
                        <td>{nota.redacao}</td>
                        <td>{nota.classificacao}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </article>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const curso = await CursoRepository.findBySlug(
    params.curso,
    params.instituto
  );
  return {
    props: {
      curso,
    },
  };
};

export const getStaticPaths = async () => {
  let cursos = await CursoRepository.getAll();
  cursos = CursoRepository.addSlug(cursos);
  cursos = cursos.map((curso) => ({
    ...curso,
    instituto: institutoRepository.addSlug([curso.instituto])[0],
  }));

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
