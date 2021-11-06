import styled from "styled-components";

export const ItemsWrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-top: 0;
`

export const Item = styled.p`
  padding: 15px;

  &:hover {
    cursor: pointer;
    background: #f5f5f5;
  }
`
