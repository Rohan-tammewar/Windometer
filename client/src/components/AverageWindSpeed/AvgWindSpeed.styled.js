import styled from 'styled-components';

const AvgWindSpeedContainer = styled.section`
    &  > .wrapper {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        border-radius: 10px;
        padding: 30px 0 90px;
    }

    .heading .wrapper {
        width: 93%;
    }
    
    .search-details {
        display: flex;
        padding:0 3%;
        justify-content: center;

        form {
            width: 50%;

            .form-group {
                margin: 10px 2%;
            }

            .form-control {
                margin: 10px 0%;
            }
        }
    }

    .form-inline-group {
        display: flex ;
    }
`;

export default AvgWindSpeedContainer;
