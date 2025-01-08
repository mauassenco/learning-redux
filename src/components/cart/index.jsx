import { useSelector } from "react-redux"
import { selectProductsTotalPrice } from "../../redux/cart/selectors"
import CartItem from "../cart-item"

// Styles
import * as Styles from "./styles"

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false)

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer)
  const productsTotal = useSelector(selectProductsTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>
          {products.length === 0 ? "Seu carrinho está vazio" : "Carrinho"}
        </Styles.CartTitle>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        {products.length !== 0 && (
          <Styles.CartTotal>
            {`Total: R$ ${productsTotal.toFixed(2)}`}
          </Styles.CartTotal>
        )}
      </Styles.CartContent>
    </Styles.CartContainer>
  )
}

export default Cart
