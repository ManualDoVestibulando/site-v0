import { initializeApollo } from './apollo';
import gql from 'graphql-tag';
import { IInstituto } from './institutoRepository';

export const cursoSlugQuery = gql`
  {
    cursos {
      nome
      instituto {
        nome
        sigla
      }
    }
  }
`;

export interface ICurso {
  nome?: string;
  instituto?: IInstituto;
  slug?: string;
}

export const cursoDataQuery = gql`
  query Curso($instituto: String!, $curso: String!) {
    cursos(where: { nome: $curso, instituto: { sigla: $instituto } }) {
      nome
      instituto {
        nome
        sigla
      }
    }
  }
`;

export default {
  async getAll() {
    const apolloClient = initializeApollo();

    await apolloClient.query({ query: cursoSlugQuery });

    const data = apolloClient.cache.extract().ROOT_QUERY;
    return data.cursos as ICurso[];
  },
  async findBySlug(slugCurso, slugInstituto) {
    const apolloClient = initializeApollo();
    const curso = decodeURI(slugCurso);
    const instituto = decodeURI(slugInstituto);

    await apolloClient.query({
      query: cursoDataQuery,
      variables: { curso, instituto },
    });

    const data = apolloClient.cache.extract();
    return Object.values(data.ROOT_QUERY)[1][0];
  },
  addSlug(cursos: ICurso[]) {
    return cursos.map((curso) => {
      return {
        ...curso,
        slug: encodeURI(curso.nome),
      };
    });
  },
};
