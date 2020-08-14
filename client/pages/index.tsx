import React from 'react';
import MainNavbar from '../components/MainNavbar';
import IndexCardDeck from '../components/IndexCardDeck';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Index() {
  return (
    <div>
      <MainNavbar />
      <Container>
        <Row className="mt-3">
          <Col md lg="8">
            <p className="mt-4">
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
          <Col md lg="4">
            <Image className="mt-3" src="logo_usp.png" fluid />
          </Col>
        </Row>
        <Row className="mt-4">
          <IndexCardDeck />
        </Row>
      </Container>
    </div>
  );
}
