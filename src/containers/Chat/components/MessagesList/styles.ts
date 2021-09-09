import styled from "styled-components";
import image from "src/assets/pink.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 1em;
  overflow: scroll;
  height: 70vh;
  border-radius: 0.5em;
  margin: 3vh 0;
  background-image: url(${image});
  background-size: cover;
  ::-webkit-scrollbar {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: lightGrey;
  }
  ::-webkit-scrollbar:horizontal {
    display: none;
  }
`;
