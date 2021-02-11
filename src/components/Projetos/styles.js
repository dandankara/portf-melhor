import styled from 'styled-components';

const MainContainer = styled.div`
  background-color:#000000;
  width:100%;
  height:200px;
`;

const Title = styled.div`
  text-align:center;
  color:white;
  font-size:40px;
  padding-top:20px;
`;

const ListProjects = styled.div`
  display:flex;
  margin-top:20px;
  padding:20px;
  justify-content:space-around;
  
  a{
    font-size:40px;
    text-decoration:none;
    color:#fffff0;
  }
`;

export { MainContainer,ListProjects, Title };