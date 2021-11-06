import styled from "styled-components";

export const Dropdown = styled.div`
  position: relative;
  width: 100%;
`

export const DropdownSelector = styled.div`
  padding: 20px 10px;
  background: white;
  border: 1px solid #e8e8e8;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  svg.rotated {
    transform: rotate(180deg);
  }
`

export const DropdownPlaceholder = styled.p`
  color: #6b6b6b;
`
