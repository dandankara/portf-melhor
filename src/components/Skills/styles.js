import styled from 'styled-components';

const Container = styled.div`
  background-color: #F25A70;
  width:100%;
`;

const Title = styled.div`
  font-size:40px;
  text-align:center;
  color:#FFFFFF;
`;

const ListaSkill = styled.div`
  display:flex;
  margin-top:10px;
  justify-content:space-around;
  
  label{
    font-size:40px;
    color:#262626;
    filter: drop-shadow(1px 1px 1px #FFFFFF);
  }
`; 
export { Container, ListaSkill, Title };