import styled from "styled-components";

export default function Destaque() {
  return (
    <>
      <StyledDestaque>
        <div>
          <h2>
            O melhor serviço online para falar sobre seus filmes de terror
            favoritos
          </h2>
        </div>
      </StyledDestaque>
    </>
  );
}
const StyledDestaque = styled.article`
  div {
    background-image: url("/images/Fundo-destaque.png");
    width: 100%;
  }
`;
