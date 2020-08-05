import React from 'react';
import NotasChart from '../../../../components/NotasChart';
import NotasTable from '../../../../components/NotasTable';
import Layout from '../../../../components/Layout';
import axios from '../../../../lib/axios';
import * as S from './style';

const Curso = ({ curso }) => {
  console.log(curso);
  return (
    <Layout>
      <S.Wrapper>
        <S.WrapperTitle>
          <S.Title>
            {curso.nome} - {curso.instituto.sigla}
          </S.Title>
        </S.WrapperTitle>
        <S.NotasWrapper>
          <S.SubTitle>Notas</S.SubTitle>
          <S.WrapperChart>
            <NotasChart />
          </S.WrapperChart>
          <S.WrapperTable>
            <NotasTable notas={curso.notas} />
          </S.WrapperTable>
        </S.NotasWrapper>
      </S.Wrapper>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const query = `
    query Querry($instituto: String!, $curso: String!) {
      cursos(where: { slug_: $curso, instituto: {slug_: $instituto} }) {
        nome
        instituto {
          sigla
        }
        notas(sort: "classificacao"){
          fase1
          fase2dia1
          fase2dia2
          redacao
          classificacao
        }
      }
    }
  `;

  const response = await axios.post('/graphql', {
    query,
    variables: {
      instituto: params.instituto,
      curso: params.curso,
    },
  });

  const data = response.data.data;
  const curso = data.cursos[0];
  //TODO: calcular total direito
  curso.notas.forEach((nota) => {
    nota.total = (nota.fase1 * 100) / 90;
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
    paths: data.cursos.map((curso) => ({
      params: {
        curso: curso.slug_,
        instituto: curso.instituto.slug_,
      },
    })),
    fallback: false,
  };
};

export default Curso;
