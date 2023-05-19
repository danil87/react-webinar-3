import React from "react";
import PropTypes from 'prop-types';
import {plural} from "../../utils";
import './style.css';

function Controls({ onAdd, cart, setModalActive }) {
  return (
    <div className='Controls'>
      <div className='Controls-cart'>
        <span>В корзине:   <b>{cart.length ? 
        `${cart.length} ${plural(cart.length, {one: 'товар', few: 'товара', many: 'товаров'})} / 
        ${cart.reduce((sum, item) => (sum + item.price) * item.amount, 0).toLocaleString('ru', {style: 'currency', currency: 'RUB'})}` 
        : 'пусто'}</b></span>
      </div>
      <button onClick={() => setModalActive(true)}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  cart: PropTypes.array,
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => { }
}

export default React.memo(Controls);
