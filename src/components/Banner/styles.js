import styled from 'styled-components';

const MainBanner = styled.div`
  background-color:#333333;
  display:flex;
  flex-direction:column;
`;

const Title = styled.div`
  background-color:#262626;
  border-radius:10px;
  color: #F25A70;
  width:50%;
  display:flex;
  flex-direction:column;
  align-self:center;
  padding:1rem;
  margin-bottom:1rem;
  text-align:justify;
  h2{
    margin-bottom:10px;
  }
  p{
    color:#FFFFFF;
    font-size:1.1rem;
  
  }
`;

const IconGit = styled.img.attrs({
  src: 'https://avatars.githubusercontent.com/u/65553049?s=460&u=7616301b1e4aad0c062411c373c9c42c7f2ec8ef&v=4',
})`
  width: 200px;
  height:200px;
  border-radius: 100px;
  border-top-right-radius:30px;
  border-bottom-left-radius:30px;
  padding:1rem;
  align-self:center;
`;


export { MainBanner, Title, IconGit };
