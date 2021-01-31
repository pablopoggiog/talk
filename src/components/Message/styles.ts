import styled from "styled-components";

interface Props {
  own: boolean;
}

export const Container = styled.div<Props>`
  border-radius: 2em;
  min-width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: ${({ own }) => (own ? " row-reverse" : "reverse")};
  padding-left: auto;
  background-color: ${({ own }) =>
    own ? "lightBlue" : "	rgba(255,219,220, 0.7)"};
  opacity: 0.8;
  margin: 0.5em;
`;

export const Photo = styled.img<Props>`
  width: 40px;
  border-radius: 1em;
  margin: 1em 0;
  margin: ${({ own }) => (own ? "1em 0 1em auto" : "1em auto 1em 0")};
`;

export const Text = styled.p<Props>`
  margin: ${({ own }) => (own ? "0 0 0 auto" : "0 auto 0 0")};
`;
