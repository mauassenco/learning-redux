import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loginUser, logoutUser } from "../../redux/user/actions"
import {
  selectProductsCount,
  selectProductsTotalPrice,
} from "../../redux/cart/selectors"

// Components
import Cart from "../cart/index"

// Styles
import * as Styles from "./styles"

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false)
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)
  // const { products } = useSelector((rootReducer) => rootReducer.cartReducer)
  const productsQuantity = useSelector(selectProductsCount)
  const productsTotal = useSelector(selectProductsTotalPrice)

  const dispatch = useDispatch()

  const handleLoginClick = () => {
    dispatch(loginUser({ name: "Mauricio", email: "mau@gmail.com" }))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }

  const handleCartClick = () => {
    setCartIsVisible(true)
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>Hello {currentUser.name}</div>
            <div onClick={handleLogoutClick}>Logout</div>
          </div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>
          Carrinho{" "}
          {productsQuantity > 0 &&
            `(${productsQuantity})  R$ ${productsTotal.toFixed(2)}`}
        </div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  )
}

export default Header
