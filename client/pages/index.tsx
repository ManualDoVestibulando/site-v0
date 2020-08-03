import Head from 'next/head';
import Layout from '../components/Layout';
import {initializeApollo} from '../lib/apollo'
import gql from 'graphql-tag';

const Home = ({ query }) => {
  console.log(query)
  return (
    <Layout>
      <Head>
        <title>Notas USP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Notas USP</h1>

        <div>

        </div>
      </main>
    </Layout>
  );
}

const query = gql`
  {
    intituto {
      sigla
    }
  }
`

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({ query })

  const data = apolloClient.cache.extract()

  return {
    props: {
      query: data
    }
  }
}


  export default Home