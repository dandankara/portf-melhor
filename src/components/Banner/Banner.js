import React, { Component } from 'react';
import { MainBanner, Title } from './styles';


class Banner extends Component {
  render() {
    return (

      <MainBanner>
       
        <Title>
          <span>Daniel Cunha Barbosa</span> <br />
          <span>FrontEnd Developer</span>
          {/* <img src="https://avatars.githubusercontent.com/u/65553049?s=460&u=7616301b1e4aad0c062411c373c9c42c7f2ec8ef&v=4" alt="foto aqui"/> */}
        </Title>

      </MainBanner>
    )
  }
}

export default Banner;