import React, { useState } from "react";
import PropTypes from "prop-types";
import { plural } from "../../utils";
import './style.css';

function Item(props) {

    const callbacks = {
        onActionWithItem: (e) => {
            e.stopPropagation();
            props.onActionWithItem(props.item);
        }
    }

    return (
        <div className={'Item' + (props.item.selected ? ' Item_selected' : '')}>
            <div className='Item-code'>{props.item.code}</div>
            <div className='Item-title'>
                {props.item.title}
            </div>
            <div className='Item-price'>
                {props.item.price.toLocaleString() + ' ₽'}
            </div>
            <div className='Item-amount'>
                {`${props.item.amount} шт`}
            </div>
            <div className='Item-actions'>
                <button onClick={callbacks.onActionWithItem}>
                    Удалить
                </button>
            </div>
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.shape({
        code: PropTypes.number,
        title: PropTypes.string,
        selected: PropTypes.bool,
        count: PropTypes.number,
        price: PropTypes.number
    }).isRequired,
    onDelete: PropTypes.func,
    onSelect: PropTypes.func
};

Item.defaultProps = {
    onDelete: () => { },
    onSelect: () => { },
}

export default React.memo(Item);