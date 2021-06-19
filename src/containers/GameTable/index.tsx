import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_ITEMS } from 'gql/allItems';
import Col from '@paljs/ui/Col';
import { Card } from '@paljs/ui/Card';
import { List, ListItem } from '@paljs/ui/List';
import User from '@paljs/ui/User';
import Row from '@paljs/ui/Row';

const GameTable = () => {
  const { loading, error, data } = useQuery(ALL_ITEMS);
  return (
    <Row>
      <Col breakPoint={{ xs: 12, md: 12 }}>
        <Card size="Small">
          <header>Game List</header>
          {loading && <h1>Loading...</h1>}
          {error && <h1>Error...</h1>}
          {!loading && (
            <List>
              {data.items.map(
                (item: any, index: React.Key | null | undefined) => (
                  // <ListItem key={index}>{JSON.stringify(fruit)}</ListItem>
                  <ListItem key={index}>
                    <User
                      image={item.gameLocation.locationUrl}
                      name={item.gameLocation.name}
                      title={`${item.gameLocation.name}`}
                    />
                  </ListItem>
                )
              )}
            </List>
          )}
        </Card>
      </Col>
    </Row>
  );
};
export default GameTable;

// yarn run apollo client:codegen --target typescript --local
