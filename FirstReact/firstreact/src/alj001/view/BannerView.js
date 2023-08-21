import { Component } from "react";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { autobind } from "core-decorators";

@autobind
class BannerView extends Component {

  render() {
    const { banners } = this.props;
    return (
      <Container className="content-area">
        <Row>
          { banners.map((path,key) =>
            <Image
              className = "main-banner-image"
              srcSet = { path }
              height = "auto"
              key = { key }
            />)
          }
        </Row>
      </Container>
    );
  }

}
export default BannerView;