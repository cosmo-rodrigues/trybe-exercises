import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;
    return (
      <div className='Order'>
        <p>{user} bought {product} for {price.value} {price.currency}</p>
      </div>
    )
  }
}

export default Order;