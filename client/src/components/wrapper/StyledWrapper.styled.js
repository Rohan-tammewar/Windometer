import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: 1440px;
  width: ${(props) =>
    props.wrapperWidth ? props.wrapperWidth : props.theme.wrapperWidth};
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: ${(props) => (props.wrapperWidth ? props.wrapperWidth : '95%')};
  }
`;

export default StyledWrapper;
