import Head from "next/head";
import styled from "styled-components";
export default function Home() {
  return (
    <>
      <Head>
        <title>HorrorWord</title>
        <meta
          name="description"
          content="Web app para trazer curiosidades e abordar sobre filmes de terror"
        />
        <meta
          name="keywords"
          content="Cinema, Filmes, Crítica, Terror, Comentários"
        />
      </Head>
      <StyledHome>
        <h1>HorrorWord</h1>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section``;
