import React, { Component } from 'react';

import { Container, Actions } from './styles'


class Header extends Component {
  render() {
    return (

      <Container >

          <Actions>
            <a href="#ListaSkill">Skills</a>
            <a href="#Projetos">Projetos</a>
            <a href="#Sobre">Sobre</a>
            <a href="#Contatos">Contatos</a>
          </Actions>
          
      </Container>
    )
  }
}

export default Header;

