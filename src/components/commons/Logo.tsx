import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;

    * {
        margin-top: .5rem
    }

    img {
        width: 70px;
    }

    @media (max-width: 600px) {
        padding-top: .5rem;

        img {
            width: 40px;
        }

        h3 {
            display: none;
        }
    }
`;

export function Logo(){
    return (
        <Container>
            <img src="/images/logo.png" alt="Manipulafy" />
            <h3>Manipulafy</h3>
        </Container>
    )
}