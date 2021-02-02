import styled from 'styled-components';

const MainBanner = styled.div`
  max-width:100%;
  height:300px;
  background-color:#333333;
  //top-right-bottom-left
  padding:116px 0px 0px 91px;
`;

const Title = styled.div`
  background-color:#262626;
  width: 627px;
  height:184px;
  text-align:center;
  filter: drop-shadow(5px 5px 0px #262626);
  
  span{
    font-size:40px;
    line-height:40px;
    font-weight:400px;
    font-style:normal;
    margin: 42px 97px 102px 90px;
    color: #F25A70;

    &:last-child{
    font-weight:400px;
    font-style:normal;
    font-size:30px;
    line-height:30px;
    color:#FFFFFF;
    padding:110px 47px 44px 40px;
  }

  img{
    size:40px;
    width:60px;
    height:60px;
  }
} 
`;

export { MainBanner, Title };
