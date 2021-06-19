import React from 'react';
import { withApollo } from 'libs/apollo';
// import {useQuery} from '@apollo/react-hooks';
// import {ALL_ITEMS} from 'gql/allItems'
import Layout from 'src/Layouts';
import { isCurrentUserVar } from 'libs/cache';

const UsersPage = () => {
  const currentUser = isCurrentUserVar();
  // const {loading, error, data} = useQuery(ALL_ITEMS);
  return (
    <Layout title="Мой профиль">
      <h1>{currentUser.fullName}</h1>
      {/*{loading && (<h1>Loading...</h1>)}*/}
      {/*{error && (<h1>Error...</h1>)}*/}
      {/*{!loading && (*/}
      {/*    <>*/}
      {/*        <h1>All Items</h1>*/}
      {/*        <div>*/}
      {/*            {data.items.map((data: any) => (*/}
      {/*                <ul key={data.id}>*/}
      {/*                    <li>{data.title}</li>*/}
      {/*                </ul>*/}
      {/*            ))}*/}
      {/*        </div>*/}
      {/*    </>*/}
      {/*)}*/}
    </Layout>
  );
};

export default withApollo({ ssr: false })(UsersPage);
