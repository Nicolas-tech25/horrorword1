import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function Cabecalho() {
  return (
    <StyledHeader>
      <div className="limitador">
        <h1>
          <Link href="/">
            <Image
              src="/images/logo(1).png"
              width={48}
              height={48}
              alt="fantasminha camarada"
            />
            HorrorHub
          </Link>
        </h1>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  /* estilo.css */
  h1 {
    font-size: 1rem;
    display: flex;
    align-items: center;
  }

  .link {
    text-decoration: none;
    color: var(--cor-primaria);
    background-color: var(--cor-primaria-fundo);
    padding: 0.5rem 1.2rem;
    border-radius: var(--borda-arredondada);
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 0.5rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 1rem;
  }
`;
