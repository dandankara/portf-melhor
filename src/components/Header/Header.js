import React, { Component } from 'react';

import { MainHeader, Menu, Actions, Button } from './styles'

class Header extends Component {
  render() {
    return (

      <MainHeader >
        <Menu>
          <Actions>
            <label htmlFor="">Skills</label>
            <label htmlFor="">Projetos</label>
            <label htmlFor="">Sobre</label>
            <label htmlFor="">Contato</label>
          </Actions>
          
          <Button>Download CV</Button>
        </Menu>
      </MainHeader>
    )
  }
}

export default Header;

