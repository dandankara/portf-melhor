import styled from 'styled-components';

const Container = styled.div`
  background-color: #F25A70;
  width:100%;
  height:300px;
`;

const Title = styled.div`
  font-size:40px;
  text-align:center;
  color:#FFFFFF;
  padding-top:20px;
`;

const ListaSkill = styled.div`
  /* background-color:gray; */
  font-size:35px;
  display:flex;
  flex-wrap:wrap;
  padding:20px;
  
  label{
    flex:1 1 500px;
    padding:20px;
  }
`; 


export { Container, ListaSkill, Title };