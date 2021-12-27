import Link from "next/link";
import styled from "styled-components";
import { Logo } from "../commons/Logo";
import { FaPlay, FaHeart } from "react-icons/fa";

const Aside = styled.aside`
    min-height: 100vh;
    width: 250px;
    background-color: #000000;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 50px rgba(0, 0, 0, .8);

    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
        width: 50px;
    }
`;

const NavLink = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem;
    
    a { 
        display: flex;
        align-items: center;
        transition: color 0.3s ease;
        padding: .5rem 0;
        font-weight: bold;

        & > svg {
            margin-right: 1rem;
        }

        &:hover {
            color: var(--primary);
        }
    }

    @media (max-width: 600px) {
        display: grid;
        margin: 0;

        span {
            display: none;
        }

        a > svg {
            margin-right: 0;
        }
    }
`;

const Divider = styled.div`
    height: 1px;
    background-color: #222;
    margin: 1rem 2rem;
`;

export function Sidebar() {
    return (
        <Aside>
            <Logo />
            
            <Divider />
            
            <NavLink>
                <Link href="/">
                    <a>
                        <FaPlay />
                        <span>Mais tocadas</span>
                    </a>
                </Link>

                <Link href="/favorites">
                    <a>
                        <FaHeart />
                        <span>Minhas favoritas</span>
                    </a>
                </Link>
            </NavLink>
        </Aside>
    )
}