import styled from 'styled-components';

const Container = styled.header`
  background-color: #7C5E99;
  width: 100%;
  height:80px;
  display:flex;
  justify-content: flex-end;
 
`;

const Menu = styled.div`
  width: 100;
  height:60px;
  //top-right-bottom-left
  padding: 10px 20px 10px 718px;
  
`;

const Actions = styled.div`
  a{
    text-decoration:none;
    color:black;
    display:inline-flex;
    padding-left:20px;
    font-size:20px;  
  }
`;

const Button = styled.button`
  width:170px;
  height:60px;
  //top-right-bottom-left
  padding: 10px 20px 10px 0px;
  background-color: #F25A70;
  margin-left:40px;

  a{
    font-weight:500px;
    font-size:20px;
    font-style:normal;
    color:#FFFFFF;
    text-decoration:none
  }
`;

export { Container, Menu, Button, Actions }