import Head from "next/head";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";

type ScaffoldProps = {
    children: React.ReactNode;
    title: string;
}

const Flex = styled.div`
  display: flex;
`

const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export function Scaffold({children, title}: ScaffoldProps) {
    return (
        <>
            <Head>
                <title>{title} | Manipulafy</title>
            </Head>
            <Flex>
                <Sidebar />
                <Container>
                    {children}
                </Container>
            </Flex>
        </>
    )
}