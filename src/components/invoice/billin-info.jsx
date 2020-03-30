import React from 'react';
import PropTypes from 'prop-types';
import './billin-info.scss';

function BillinInfo({ items }) {
  return (
    <div className="billin-info">
      { items && items.map((item) => (<div key={ item.title } className="billin-info__item">
        <p className="billin-info__title">{ item.title }</p>
        <p className="billin-info__info">{ item.info }</p>
      </div>)) }
    </div>
  )
}

BillinInfo.propTypes = {
  items: PropTypes.array
}

export default BillinInfo;
