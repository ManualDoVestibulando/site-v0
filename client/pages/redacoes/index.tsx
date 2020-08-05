import React from 'react';
import { Row, ListGroup } from 'react-bootstrap';
import Layout from '../../components/Layout';

export default function Index() {
  return (
    <Layout>
        <Row className="mt-5">
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Row>
    </Layout>
  );
}
