import React, { Component } from 'react';
import { Title } from '../Projetos/styles';

import {About, Container} from './styles';

class Sobre extends Component{
  render(){
    return(
      <Container>

      <Title id="Sobre"> <label>Sobre</label></Title>

      <About>
        Hoje, Daniel Cunha estudante e FrontEnd Developer, formado em técnico em informática
        atuou na área em 2018 pela Cooper Rubi juntamente com a Rede Jovem Aprendiz, era responsável pela manunteção
        de equipamentos em geral na empresa, cadastro de usuários na época da safra. Atualmente busca
        o desenvolvimento pessoal e na área de Ti, usufruindo de linguagens como JavaScript. 
      Atualmente buscando uma oportunidade em desenvolvimento voltado para FrontEnd,
        sempre mantendo organização de seus projetos no Github e se aventurando nessa área de desenvolvimento.
      </About>

    </Container>
    )
  }
}

export default Sobre;
