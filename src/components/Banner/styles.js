import styled from 'styled-components';

const MainBanner = styled.div`
  max-width:100%;
  height:300px;
  background-color:#333333;
  //top-right-bottom-left
  padding:116px 0px 0px 91px;
  display:flex;
  flex-direction:row;
`;

const Title = styled.div`
  background-color:#262626;
  width: 627px;
  height:184px;
  filter: drop-shadow(5px 5px 0px #262626);
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  border-radius:10px;

  span{
    font-size:40px;
    color: #F25A70;

    &:last-child{
    font-size:30px;
    color:#FFFFFF;
  }
} 
`;

const IconGit = styled.img.attrs({
  src:'https://avatars.githubusercontent.com/u/65553049?s=460&u=7616301b1e4aad0c062411c373c9c42c7f2ec8ef&v=4',
})`
  width: 250px;
  height:250px;
  border-radius:50%;
  margin-left: 230px;
  margin-top:-15px;
`;


export { MainBanner, Title, IconGit };
