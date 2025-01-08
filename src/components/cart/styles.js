import styled from "styled-components"

export const CartContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;

  p {
    color: #222222;
  }
`

export const CartEscapeArea = styled.div`
  width: 100%;
`

export const CartContent = styled.div`
  height: 100%;
  min-width: 500px;
  z-index: 200;
  background-color: white;
  padding: 20px;
  overflow-y: scroll;

  @media (max-width: 768px) {
    min-width: 85%;
  }
`
export const CartTitle = styled.p`
  font-size: 1.325rem;
  font-weight: 600;
  margin-bottom: 15px;
`
export const CartTotal = styled.p`
  position: absolute;
  bottom: 40px;
  right: 40px;
  height: 50px;
  padding: 10px;
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 1px;
  background-color: rgba(0, 0, 0, 0.15);
`
