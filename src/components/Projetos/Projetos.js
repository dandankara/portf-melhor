import React, {Component} from 'react';
import { ListProjects, MainContainer, Title } from './styles';

class Projeto extends Component{
  render() {
    return(

      <MainContainer>

        <Title> <label>Projetos</label></Title>

        <ListProjects>
          <a href="#">Teste 1</a>
          <a href="#">Teste2</a>
          <a href="#">Teste3</a>
        </ListProjects>

      </MainContainer>
    )
  }
}

export default Projeto;