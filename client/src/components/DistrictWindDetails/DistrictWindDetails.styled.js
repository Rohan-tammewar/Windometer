import styled from 'styled-components';

const WindDetailsContainer = styled.section`
    margin-bottom: 30px;
    
    & > .wrapper {
        border-radius: 10px;
        box-shadow: 0 19px 38px rgb(0 0 0 / 30%), 0 15px 12px rgb(0 0 0 / 22%);
        padding: 10px 0;
    }
    .form-inline-group {
        display: flex ;
        margin-left: 5%;
        .form-group {
            margin: 10px 2%;
            width: 30%;
        }
    }
`;

export default WindDetailsContainer;