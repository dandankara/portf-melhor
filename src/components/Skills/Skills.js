import React, { Component } from 'react';
import { Container, ListaSkill, Title } from './styles';

class Skills extends Component {
  render() {
    return (
      <Container>

        <Title> Skills</Title>

        <ListaSkill>
          <div>
            <ul>
              <li className="html">Html</li>
              <li className="css">Css</li>
              <li className="javascript">JavaScript</li>
              <li className="react">React</li>
            </ul>
          </div>
        </ListaSkill >

      </Container >
    )
  }
}

export default Skills;