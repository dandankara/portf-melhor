import React, { Component } from 'react';
import { Button, MainBanner, Title } from './styles';


class Banner extends Component {
  render() {
    return (

      <MainBanner>

        <Title>
          <span>Daniel Cunha Barbosa</span> <br />
          <span>FrontEnd Developer</span>
        </Title>
      </MainBanner>
    )
  }
}

export default Banner;