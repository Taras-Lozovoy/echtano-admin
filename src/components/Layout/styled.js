import styled from "styled-components";

export const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`