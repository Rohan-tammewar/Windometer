import styled from 'styled-components';

const MaxEntriesSpeedContainer = styled.section`
    .wrapper {
        display: flex;
        justify-content: space-between;

        .heading .wrapper {
            width: 100%;
        }

        & > div {
            flex: 1;

            .search-details div {
                width: 80%;
            }
        }
    }
`;

export default MaxEntriesSpeedContainer;