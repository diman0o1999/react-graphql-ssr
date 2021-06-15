import React from 'react';
import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { ALL_ITEMS } from '../gql/allItems'

const IndexPage = () => {
  const { loading, error, data } = useQuery(ALL_ITEMS);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>All Items</h1>
      <div>
        {data.items.map((data) => (
          <ul key={data.id}>
            <li>{data.title}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default withApollo({ ssr: true })(IndexPage);
