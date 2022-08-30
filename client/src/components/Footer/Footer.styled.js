import styled from 'styled-components';

const FooterContainer = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.WHITE};
  background-color: ${(props) => props.theme.colors.BACKGROUND_COLOR};
`;

const CopyrightInfo = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;

  .copyright {
    p {
      margin: 20px 0;
      font-size: 12px;
      padding-right: 8px;
    }
  }

`;

export { FooterContainer, CopyrightInfo };
