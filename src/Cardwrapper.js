import React, { Component } from 'react';
import Card from './Card';

class Cardwrapper extends Component {

  constructor() {
    super();
    this.state = { products: {} };
  }

  async componentDidMount() {
    const response = await fetch('https://react-mktplace.firebaseio.com/products/.json');
    const myData = await response.json();
    // console.log('hello', myData);
    const productsArray = [];
    Object.keys(myData).forEach((item) => {
      productsArray.push(item); // key
    });

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      products: myData,
    });

  }

  render() {
    const { products } = this.state;
    return (
      <div className='container'>
        <div className='row'>
          {
            Object.keys(products).forEach((item, index) => {
              const product = products[item];
              return (
                <Card
                  imgUrl={product.imgUrl}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  key={item}
                />
              );

            })
          }
        </div>
      </div>
    );
  }
}

export default Cardwrapper;
