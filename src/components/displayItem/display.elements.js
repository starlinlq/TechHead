import styled from "styled-components";

export const Color = styled.button`
  height: 35px;
  width: 35px;
  background-color: ${({ color }) => `${color}`};
  border-radius: 50%;
  margin: 0 5px;
  border: 1px solid lightgrey;
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

export const Label = styled.label`
  color: red;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;
`;

export const Section = styled.div``;
