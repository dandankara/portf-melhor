import React, { Component } from 'react';
import { IconGit, MainBanner, Title } from './styles';


class Banner extends Component {
  render() {
    return (

      <MainBanner>
       
        <Title>
          <span>Daniel Cunha Barbosa</span>   
          <span>FrontEnd Developer</span>
        </Title>
          
          <IconGit />
        

      </MainBanner>
    )
  }
}

export default Banner;