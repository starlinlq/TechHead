import styled from "styled-components";
import { Link } from "react-router-dom";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  width: 100%;
  margin: 15px;
`;

export const Section = styled.div``;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55;
`;

export const Title = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: blue;
  margin-right: 1%;
`;
export const Price = styled.h4``;
export const ProductImg = styled.img`
  height: 200px;
  width: 200px;
  object-fit: contain;
`;

export const Button = styled.button`
  background: white;
  border: 1px solid salmon;
  padding: 1% 5%;
  margin-top: 2%;
  cursor: pointer;

  &:hover {
    border-color: red;
  }
`;
