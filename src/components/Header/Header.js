import React, { Component } from 'react';

import { Container, Menu, Actions, Button } from './styles'


class Header extends Component {
  render() {
    return (

      <Container >
        <Menu>

          <Actions>
            <a href="#">Skills</a>
            <a href="#">Projetos</a>
            <a href="#">Sobre</a>
            <a href="#">Contatos</a>

            <Button> <a href="#"> Download CV </a> </Button>
          </Actions>

        </Menu>
      </Container>
    )
  }
}

export default Header;

