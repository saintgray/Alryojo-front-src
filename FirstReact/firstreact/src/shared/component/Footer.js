import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Logo from '@resource/image/logo.svg';

class Footer extends Component {
  render() {
    return (
      <Container className="footerwrap">
        <Row>
          <Col>
            <Link to='/'>
              <Image srcSet={Logo} className="mx-4" id="logo"/>
            </Link>
          </Col>
          <Col>
            <Row className="head">회사소개</Row>
            <Row>알려드림</Row>
            <Row>채용안내</Row>
          </Col>
          <Col>
            <Row className="head">고객안내</Row>
            <Row>이용안내</Row>
            <Row>이용약관</Row>
          </Col>
          <Col>
            <Row className="head">고객센터</Row>
            <Row>공지사항</Row>
            <Row>1:1문의</Row>
            <Row>자주 묻는 질문</Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer;