import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Head({title, active, setModalActive}){
  return (
    <div className='Head'>
      <h1>{title}</h1>
      {active ? 
      <button onClick={() => setModalActive(false)}>Закрыть</button>
      : 
      ''}
    </div>
  )
}

Head.propTypes = {
  title: PropTypes.node,
  active: PropTypes.bool,
  setModalActive: PropTypes.func
};

Head.defaultProps ={
  active: false,
  setModalActive: () => {}
}

export default React.memo(Head);
