import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  flex-direction: column;
  max-width: 1100px;

  @media (max-width: 850px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  }
`;

export const Link = styled.a`
  font-size: 14px;
  color: #757575;
  margin-bottom: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.div`
  color: #757575;
  margin-bottom: 40px;
  font-size: 16px;
`;

export const Text = styled.div`
  color: #757575;
  margin-top: 40px;
  font-size: 13px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
