import Layout from '../components/Layout';
import {initializeApollo} from '../lib/apollo'
import gql from 'graphql-tag';

const Home = ({ institutos }) => {
  console.log(institutos)
  return (
    <Layout>
      <main>
        {institutos?.map((instituto => (
          <div key={instituto.sigla}>
            <h2>{instituto.sigla}</h2>
          </div>
        )))}
      </main>
    </Layout>
  );
}

const query = gql`
  {
    institutos {
      sigla
    }
  }
`

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({ query })

  const data = apolloClient.cache.extract().ROOT_QUERY

  return {
    props: {
      institutos: data.institutos
    }
  }
}


  export default Home