import React from 'react';
import NotasChart from '../../../../components/NotasChart';
import NotasTable from '../../../../components/NotasTable';
import Layout from '../../../../components/Layout';
import axios from '../../../../lib/axios';
import * as S from '../../../../styles/fuvest-style';

const Curso = ({ data, curso, notas }) => {
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
            <NotasChart notas={curso.notas} allNotas={notas} /> 
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
      instituto: params.instituto,
      curso: params.curso,
    },
  });

  const data = response.data.data;
  const curso = data.cursos[0];

  let notas = data.notas.filter((value) => value != null);
  curso.notas = curso.notas.filter((value) => value != null);

  curso.notas.forEach((nota) => {
    nota.total = ((nota.fase1 / 90)*1000 + nota.fase2dia1 * 10 + nota.fase2dia2 * 10)/3;
  });
  notas.forEach((nota) => {
    nota.total = ((nota.fase1 / 90)*1000 + nota.fase2dia1 * 10 + nota.fase2dia2 * 10)/3;
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
