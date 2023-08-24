import { Component } from "react";
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { autobind } from "core-decorators";

@autobind
class BannerView extends Component {

  render() {
    const { banners } = this.props;
    const displayBanner = banners.filter((imageInfo) => imageInfo.displayF);
    return (
        <div className="banner-area" >
          {/*<Row>*/}
              <Image
                className = "main-banner-image"
                srcSet = { displayBanner && displayBanner[0] && displayBanner[0].resource }
                height = "auto"
              />
          {/*</Row>*/}
        </div>
    );
  }

}
export default BannerView;