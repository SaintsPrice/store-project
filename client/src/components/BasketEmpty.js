import { NavLink } from "react-router-dom"

function BasketEmpty() {
  return (
    <div className="basket_empty">
      <h2 className="basket_empty__title">Корзина пуста</h2>
      <p className="basket_empty__description">Посмотрите предложения на главной странице или воспользуйтесь каталогом</p>
      <div className="basket_empty__refs">
        <NavLink className="basket_empty__ref" to='/*'>На главную</NavLink>
        <NavLink className="basket_empty__ref" to='/type/Смартфоны'>В каталог</NavLink>
      </div>
    </div>
  )
}

export default BasketEmpty