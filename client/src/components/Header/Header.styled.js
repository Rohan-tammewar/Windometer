import styled from 'styled-components';

const HeaderContainer = styled.header`
  background:linear-gradient(
    to right,
    hsla(141, 54%, 86%, 1) 0%,
    hsla(333, 73%, 85%, 1) 50%,
    hsla(211, 58%, 79%, 1) 100%
  );;

  .wrapper {
    display: flex;
    align-items: center;
    background: transparent;
    color: ${(props) => props.theme.colors.WHITE};

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }

    .navigation-menu {
      margin-left: 35%;
    }

    .site-logo {
      padding: 25px 0;
      width: 20%;
      display: flex;
      align-items: center;

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      h1 {
        width: 10%;
        @media screen and (max-width: 768px) {
          width: 58%;
        }

        
        figure {
          svg {
            path {
              fill: white ;
            }
         }
          a {
            display: block;
            
            img {
              width: 100%;
            }
          }
        }
      }
    }
    
    p {
      display: inline-block ;
      margin-top: 10px;
      font-weight: 700;
      font-size: 40px;
    }
    .navigation-menu {
      width: 35%;
    }
  }
`;

const NavigationContainer = styled.nav`
  ul {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    li {
      margin:0 1%;

      a {
        padding: 12px 15px;
        font-size: 18px;
        font-weight: 700;
        font-family: open-sans, sans-serif;
        text-transform: uppercase;
      }
    }
  }  
`;

export { HeaderContainer, NavigationContainer };
