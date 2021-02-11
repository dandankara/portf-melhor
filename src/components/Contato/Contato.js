import React, {Component} from 'react';

import { Main } from './styles'

import {SiGmail} from 'react-icons/si';
import {FaLinkedinIn} from 'react-icons/fa';

class Contato extends Component{
  render(){
    return(

      <Main id="Contatos">

        <label> <SiGmail /> Gmail - cunhacb22@gmail.com </label>
        <a href="https://www.linkedin.com/in/daniel-cunha001/"> <FaLinkedinIn /> Linkedin </a>

      </Main>
    )
  }
}

export default Contato;