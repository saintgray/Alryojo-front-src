import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import SearchIcon from '@resource/image/search-icon.svg';
import Logo from '@resource/image/logo.svg';

class Header extends Component {
  render() {
    return (
      <Container className="App" id="headerwrap">
        <Row xs="auto">
          <Link to='/'>
            <Image
              id="logo"
              srcSet={ Logo }
            />
          </Link>
          <InputGroup className="search-bar">
            <Image
              className='search-icon input-group-text'
              srcSet={ SearchIcon }
            />
            <Form.Control
              className="text-area"
              type="text"
              placeholder="어떤 서비스가 필요하세요?"
            />
          </InputGroup>
        </Row>
      </Container>
    );
  }
}

export default Header;
