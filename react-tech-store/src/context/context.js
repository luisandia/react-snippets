import React, { Component } from 'react'

const ProductContext = React.createContext();

class ProductProvider extends Component {

  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0
  }

  handleSidebar = () => {
    this.setState((prevState) =>
      ({ sidebarOpen: !prevState.sidebarOpen }))
  }

  handleCart = () => {
    this.setState((prevState) =>
      ({ cartOpen: !prevState.cartOpen }))
  }

  openCart = () => {
    this.setState({ cartOpen: true });
  }

  closeCart = () => {
    this.setState({ cartOpen: false });
  }



  render() {
    return (
      <ProductContext.Provider value={{ ...this.state, handleSidebar: this.handleSidebar, handleCart: this.handleCart, closeCart: this.closeCart, openCart: this.openCart }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }