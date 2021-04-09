import styled from 'styled-components';

const Container = styled.header`
  background-color: #7C5E99;
  display:flex;
  justify-content:center;
  padding-bottom:16px;
`;

const Actions = styled.a`
  margin-top:20px;
  a{
    text-decoration:none;
    color:black;
    padding-left:20px;
    font-size:30px;
    color:#FFFFFF;
    line-height:26px; 
  }

  a:hover{
    text-decoration:underline;
    color:#000000;
  }
`;



export { Container, Actions }