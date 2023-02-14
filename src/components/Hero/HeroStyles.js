import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  height: 100vh;
  margin-top:25rem;
  content-align:center;
  text-align: center;
    @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    height: 50vh;
    flex-direction: column;
    margin: 0 auto;
    content-align:center;
    text-align: center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 50vh;
    margin-top:25rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    content-align:center;
    text-align: center;
  }
`;

export const Img = styled.img`
  width:70%;
  height:20%;
  margin-top:8rem;
  object-fit: cover;
  margin-left: auto;
  margin-right:auto;

  @media ${(props) => props.theme.breakpoints.md} {
    height:20%;
    margin-top:20rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height:20%;
    margin-top:20rem;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '50px' : '46px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    text-align:center;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    text-align:center;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`


export const SectionText = styled.p`
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  text-align:center;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
    text-align:center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
    text-align:center;
  }
`;

