import styled from "styled-components"

const Container = styled.section`
    display: flex;
    background-color: var(--secondary);
    padding: 1rem 1.5rem;
`

const Input = styled.input`
    width: 50%;
    padding: .5rem 0;
    border: none;
    background-color: transparent;
    border-radius: 10px 0 0;
    border-bottom: 1px solid #fff;
    transition: border-color 0.2s ease;
    color: #fff;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export function SearchBox() {
    return (
        <Container>
            <Input placeholder="Pesquisar"/>
        </Container>
    )
}