import styled from "styled-components";

interface Props {
  own: boolean;
}

export const Container = styled.div<Props>`
  border-radius: 2em;
  display: flex;
  align-items: center;
  flex-direction: ${({ own }) => (own ? " row-reverse" : "reverse")};
  background-color: ${({ own }) =>
    own ? "lightBlue" : "	rgba(255,219,220, 0.7)"};
  opacity: 0.75;
  margin: ${({ own }) => (own ? "0.5em 0 0.5em auto" : "0.5em auto 0.5em 0")};
  max-width: 65vw;
`;

export const Photo = styled.img<Props>`
  width: 40px;
  border-radius: 1em;
  margin: 1em 0;
`;

export const Text = styled.p<Props>`
  word-wrap: break-word;
  max-width: 45vw;
  padding: 0.8em 1.1em;
  text-align: ${({ own }) => (own ? "right" : "left")};
`;
