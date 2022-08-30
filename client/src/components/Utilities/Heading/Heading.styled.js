import styled from 'styled-components';

const StyledHeading = styled.h1`
  padding: 50px 0 15px;
  font-size: 32px;
  font-family: 'open-san',sans-serif;

  span {
    color: ${(props) => props.theme.colors.PRIMARY_COLOR};
    text-decoration: underline;
  }
`;

export default StyledHeading;
