import React from 'react';
import { withApollo } from 'libs/apollo';
import Layout from 'src/Layouts';
import GameTable from 'src/containers/GameTable';

const IndexPage = () => {
  return (
    <Layout title="Главная">
      <GameTable />
    </Layout>
  );
};

export default withApollo({ ssr: false })(IndexPage);
