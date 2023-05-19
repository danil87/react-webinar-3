import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({ list, onActionWithItem, action }) {
  console.log(list);
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item} onActionWithItem={onActionWithItem} action={action} />
        </div>
      )}
    </div>
  )
}
List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onActionWithItem: PropTypes.func,
};

List.defaultProps = {
  onActionWithItem: () => { }
}

export default React.memo(List);
