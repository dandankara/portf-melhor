import React, { Component } from 'react';
import styled from 'styled-components';


class Header extends Component {
  render() {
    return (
      <Container>

        <Menu>
          <ul>
           <li> <a href="#"> Skills </a> </li>
           <li> <a href="#"> Projetos </a> </li>
           <li> <a href="#"> Sobre </a> </li>
           <li> <a href="#"> Contatos </a> </li>
          </ul>
          <Button> <content>Dowload CV</content></Button>
        </Menu>

      </Container>
    )
  }
}

export default Header;

const Container = styled.div`
  background-color: blue;
  height: 80px;
  width: 1440px;
  

  
`;

const Menu = styled.div`
  width: 702px;
  left: 718px;
  top: 10px;
  border-radius: 0px;


  ul{
    width: 1440;
    height: 80;
    display: inline-block;
  
  }

  li{
    display: inline-block;
  }
  
  a{
    color: black

  }
`;

const Button = styled.button`
  height: 60px;
  width: 170px;
  left: 1250px;
  top: 10px;
  border-radius: 0px;


  content{
    width: 132px;
    height: 25.57px;
    left: 1270px;
    top: 27px;
    font-style: normal;
    font-weight: 500px;
    font-size: 20px;
    line-height:26px;
    align-content: 'center';
    color: '#F25A70';
  }
`;
