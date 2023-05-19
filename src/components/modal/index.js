import React from "react";
import PageLayout from "../page-layout";
import List from "../list";
import Head from "../head";
import PropTypes from "prop-types";
import './style.css';

function Modal({ active, setModalActive, cart, onDeleteItem }) {

    return (
        <div className={`Modal` + (active ? ' active' : '')}>
            <div className='Modal-PageLayoute'>
                <PageLayout>
                    <Head title='Корзина' setModalActive={setModalActive} active={active}/>
                    <List list={cart} action='Удалить' onActionWithItem={onDeleteItem} />
                    <div className='reault-price'>
                        <b>{`Итого  ${cart.reduce((sum, item) => (sum + item.price) * item.amount, 0).toLocaleString('ru', { style: 'currency', currency: 'RUB' })}`}</b>
                    </div>
                </PageLayout>
            </div>
        </div>
    );
}

Modal.propTypes = {
    active: PropTypes.bool,
    cart: PropTypes.array,
    setModalActive: PropTypes.func,
    onDeleteItem: PropTypes.func
}

Modal.defaultProps = {
    setModalActive: () => {},
    onDeleteItem: () => {}
}

export default Modal;