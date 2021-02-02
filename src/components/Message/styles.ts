import styled from "styled-components";

interface Props {
  own: boolean;
}

export const Container = styled.div<Props>`
  border-radius: 2em;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  background-color: ${({ own }) =>
    own ? "lightBlue" : "	rgba(255,219,220, 0.7)"};
  opacity: 0.75;
  margin: ${({ own }) => (own ? "0.5em 0 0.5em auto" : "0.5em auto 0.5em 0")};
  min-width: 20vw;
  max-width: 65vw;
`;

export const Content = styled.div<Props>`
  display: flex;
  flex-direction: ${({ own }) => (own ? " row-reverse" : "reverse")};
`;

export const Photo = styled.img<Props>`
  width: 40px;
  height: 40px;
  border-radius: 1em;
  margin: 1em 0 0;
`;

export const Text = styled.p<Props>`
  word-wrap: break-word;
  max-width: 45vw;
  padding: 0.8em 1.1em;
  text-align: ${({ own }) => (own ? "right" : "left")};
  margin-bottom: 0;
`;

export const DateFooter = styled.p<Props>`
  font-size: 0.55em;
  padding: 0.8em 1.1em;
  color: #303030;
  margin: ${({ own }) => (own ? "0 1.1em 0 auto" : "0 auto 0 1.1em")};
`;
