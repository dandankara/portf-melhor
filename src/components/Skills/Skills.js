import React, { Component } from 'react';
import { Container, ListaSkill, Title } from './styles';

import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'

class Skills extends Component {
  render() {
    return (
      <Container>

        <Title> Skills</Title>

        <ListaSkill>
            <label> <AiFillHtml5 /> Html </label>
            <label> <FaCss3Alt /> Css </label>
            <label> <IoLogoJavascript /> JavaScript </label> 
            <label> <FaReact />  React </label>
        </ListaSkill >

      </Container >
    )
  }
}

export default Skills;