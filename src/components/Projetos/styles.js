import styled from 'styled-components';

const MainContainer = styled.div`
  background-color:#000000;
  width:100%;
  height:200px;
`;

const Title = styled.h3`
  text-align:center;
  color:white;
  font-size:40px;
  padding-top:10px;
`;

const ListProjects = styled.div`
    display:grid;
    padding:10px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items:center;
  a{
    font-size:40px;
    text-decoration:none;
    color:#fffff0;
    margin:5px;
  }
`;

export { MainContainer,ListProjects, Title };