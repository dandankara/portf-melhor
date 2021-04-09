import React, {Component} from 'react';
import { ListProjects, MainContainer, Title } from './styles';

import {AiOutlineCalculator} from 'react-icons/ai';
import {SiInstagram} from 'react-icons/si';
import {BiUserCircle} from 'react-icons/bi';

class Projeto extends Component{
  render() {
    return(

      <MainContainer>

        <Title>Projetos</Title>

        <ListProjects>
          <a href="https://github.com/dandankara/Calculadora">Calculadora </a>
          <a href="https://github.com/dandankara/insta"> Instagram clone</a>
          <a href="https://github.com/dandankara/portf-melhor">Portifólio </a>
          <a href="https://github.com/dandankara/weather-location">Weather Location </a>
          <a href="https://github.com/dandankara/moveit-next">Moveit-next </a>
          <a href="https://github.com/dandankara/poke-list">Poke-list </a>
        </ListProjects>

      </MainContainer>
    )
  }
}

export default Projeto;
