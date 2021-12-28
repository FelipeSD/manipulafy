import Image from "next/image";
import styled from "styled-components"
import logo from "../../assets/images/logo.png"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;

    * {
        margin-top: .5rem
    }

    @media (max-width: 600px) {
        padding-top: .5rem;


        h3 {
            display: none;
        }
    }
`;

export function Logo(){
    return (
        <Container>
            <Image src={logo} width={70} height={70} alt="Manipulafy" />
            <h3>Manipulafy</h3>
        </Container>
    )
}