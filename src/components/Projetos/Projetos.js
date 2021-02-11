import React, {Component} from 'react';
import { ListProjects, MainContainer, Title } from './styles';

import {AiOutlineCalculator} from 'react-icons/ai';
import {SiInstagram} from 'react-icons/si';
import {BiUserCircle} from 'react-icons/bi';

class Projeto extends Component{
  render() {
    return(

      <MainContainer>

        <Title id="Projetos"> <label>Projetos</label></Title>

        <ListProjects>
          <a href="https://github.com/dandankara/Calculadora"> <AiOutlineCalculator />Calculadora </a>
          <a href="https://github.com/dandankara/insta"><SiInstagram/> Instagram clone</a>
          <a href="https://github.com/dandankara/portf-melhor"> <BiUserCircle />Portifólio </a>
        </ListProjects>

      </MainContainer>
    )
  }
}

export default Projeto;
