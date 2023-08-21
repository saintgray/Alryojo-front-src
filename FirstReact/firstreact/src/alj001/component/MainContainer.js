import { Component } from 'react'
import { Container } from "react-bootstrap";
import { inject, observer } from "mobx-react";
import { autobind } from "core-decorators";
import BannerView from "../view/BannerView";

@inject('mainstore')
@observer
@autobind
class MainContainer extends Component {

  componentDidMount() {
    const {rolling} = this.props.mainstore;
    rolling();
  }

  componentDidUpdate = () => {

  }

  render() {
    const {getBanners} = this.props.mainstore;
    return (
      <Container>
        <BannerView banners={getBanners}/>
      </Container>
    )
  }
}
export default MainContainer;