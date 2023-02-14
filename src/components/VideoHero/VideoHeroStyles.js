import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;


export const SectionVideo = styled.div`
  display:flex;
  width:100%;
  height:100%;
  left:0;
  position: absolute;
  overflow-x: hidden;
  background-size:cover;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`
