import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { imgUrl, description, name, price } = this.props;
    return (
      <div className='col-12 col-sm-4'>
        <div className='card'>
          <img src={imgUrl} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{description}</p>
            <p className='text-danger text-right'>{price}</p>
            <a href='/' className='btn btn-primary'>Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
