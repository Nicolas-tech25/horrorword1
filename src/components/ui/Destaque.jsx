import styled from "styled-components";

export default function Destaque() {
  return (
    <>
      <StyledDestaque>
        <h2>
          O melhor serviço online para falar sobre seus filmes de terror
          favoritos
        </h2>
      </StyledDestaque>
    </>
  );
}
const StyledDestaque = styled.article`
  background-image: url("../../public/images/Fundo-destaque.png");
  width: 100%;
  height: 100%;
`;
