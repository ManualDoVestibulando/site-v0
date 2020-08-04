import { initializeApollo } from './apollo';
import gql from 'graphql-tag';

export const institutoSlugQuery = gql`
  {
    institutos {
      nome
      sigla
    }
  }
`;

export interface IInstituto {
  nome?: string;
  sigla?: string;
  slug?: string;
}

export const institutoDataQuery = gql`
  query {
    institutos(where: { sigla: "poli" }) {
      nome
    }
  }
`;

export default {
  async getAll() {
    const apolloClient = initializeApollo();

    await apolloClient.query({ query: institutoSlugQuery });

    const data = apolloClient.cache.extract().ROOT_QUERY;
    return data.institutos as IInstituto[];
  },
  async findBySlug(slugInstituto) {
    const apolloClient = initializeApollo();
    const sigla = slugInstituto;

    await apolloClient.query({
      query: institutoDataQuery,
      variables: { sigla },
    });

    const data = apolloClient.cache.extract();
    return Object.values(data.ROOT_QUERY)[1][0];
  },
  addSlug(institutos: IInstituto[]) {
    return institutos.map((instituto) => {
      return {
        ...instituto,
        slug: instituto.sigla,
      };
    });
  },
};
