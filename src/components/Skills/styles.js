import styled from 'styled-components';

const Container = styled.div`
  background-color: #F25A70;
  width:100%;
  height:350px;
  display:flex;
  flex-direction:column;
`;

const Title = styled.div`
  font-size:40px;
  text-align:center;
  color:#FFFFFF;
  padding-top:50px;
`;

const ListaSkill = styled.div`
  background-color:gray;

  li{
    margin:10px;
  }
  .html {
    color:red;
  }
  /* text-align:center; */
`; 


export { Container, ListaSkill, Title };