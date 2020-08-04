import Layout from '../components/Layout';
import {initializeApollo} from '../lib/apollo'
import gql from 'graphql-tag';

const Home = () => (
    <Layout>
      <main>
        <h1>Notas USP</h1>
      </main>
    </Layout>
  )

export default Home