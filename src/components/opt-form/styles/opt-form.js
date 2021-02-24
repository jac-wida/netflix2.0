import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  margin-top: 20px;

  @media (max-watch: 875px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  /* height: 70px; */
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  border: 0;
  font-size: 26px;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 875px) {
    height: 50px;
    font-size: 16px;
    margin-top: 0px;
    font-weight: bold;
  }

  @media (max-width: 665px) {
    height: 40px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 875px) {
      width: 16px;
    }
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 0;
  max-width: 350px;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    line-height: 22px;
    font-size: 16px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
