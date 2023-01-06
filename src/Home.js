
import Header from "./Header"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "./Home.css"
import FiveCharacterMini from './FiveCharacterMini.js'

export default function Home(){

    return (
    <div>
      <Header />
      <Container fluid>
        <Row>
              <Col>
                <FiveCharacterMini
                    id={getRandomInt(1, 826)}
                />
              </Col>
              <Col>
                <FiveCharacterMini
                    id={getRandomInt(1, 826)}
                />
              </Col>
              <Col>
                <FiveCharacterMini
                    id={getRandomInt(1, 826)}
                />
              </Col>
              <Col>
                <FiveCharacterMini
                    id={getRandomInt(1, 826)}
                />
              </Col>
              <Col>
                <FiveCharacterMini
                    id={getRandomInt(1, 826)}
                />
              </Col>
        </Row>
    </Container> 
    </div>
    )

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
