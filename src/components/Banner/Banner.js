import React, { Component } from 'react';
import { IconGit, MainBanner, Title } from './styles';

class Banner extends Component {
  render() {
    return (
      <MainBanner>

        <IconGit />

        <Title>
         <center> <h2>Daniel Cunha Barbosa</h2> </center>

          <p>
            Hoje, Daniel Cunha estudante e
            FrontEnd Developer, formado em técnico em informática atuou na
            área em 2018 pela Cooper Rubi, responsável pela manunteção de equipamentos em geral na empresa,
            alteração de funcionários no banco de dados da mesma. Atualmente busca o
            desenvolvimento pessoal e na área de Ti, usufruindo de
            linguagens como JavaScript, buscando uma
            oportunidade de desenvolvimento voltado para FrontEnd, sempre mantendo organização de
            seus projetos no Github.
          </p>

        </Title>


      </MainBanner>
    )
  }
}
export default Banner;