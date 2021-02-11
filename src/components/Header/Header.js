import React, { Component } from 'react';

import { Container, Menu, Actions, Button } from './styles'


class Header extends Component {
  render() {
    return (

      <Container >

          <Actions>
            <a href="#">Skills</a>
            <a href="#">Projetos</a>
            <a href="#">Sobre</a>
            <a href="#">Contatos</a>
          </Actions>
          
      </Container>
    )
  }
}

export default Header;

