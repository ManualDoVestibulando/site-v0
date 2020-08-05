import React from 'react';
import MainNavbar from '../components/MainNavbar';
import IndexCardDeck from '../components/IndexCardDeck';
import { Container, Row, Col } from 'react-bootstrap';

export default function Index() {
  return (
    <div>
      <MainNavbar />
      <Container>
        <Row className="py-5"></Row>
        <Row>
          <Col>
            <p className="align-bottom text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tempus tellus id quam aliquam, vitae bibendum tellus
              suscipit. Cras fermentum blandit dui ac auctor. Suspendisse
              malesuada ut dui sed volutpat. Maecenas bibendum rutrum velit id
              eleifend. Nunc id massa lorem. Nulla posuere sed urna sed ornare.
              Suspendisse sed nulla et felis bibendum tempus nec a turpis.
              Quisque quis lectus lectus. Maecenas auctor efficitur dui vel
              varius.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <IndexCardDeck />
        </Row>
      </Container>
    </div>
  );
}
