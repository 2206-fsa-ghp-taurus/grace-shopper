import React from "react";
import { connect } from "react-redux";
import { fetchProducts, addToCart} from "../store/products";


class AllProducts extends React.Component {
    constructor() {
        super()
        this.state = {value: 'All'}
        this.handleChange= this.handleChange.bind(this)
        this.selectCategory = this.selectCategory.bind(this)
    }

  componentDidMount() {
    this.props.getProducts()
  }

  handleChange(evt) {
    this.setState({value: evt.target.value})
  }

  selectCategory() {  
    return this.props.products.filter(product => product.category === this.state.value)

  }


  render() {
    const {products} = this.props
    return (
        <div>
        <h1 className="">{this.state.value}</h1>
        <label htmlFor="category">Filter By Category:</label>
        <select name="category" value = {this.state.value} id="category" onChange ={this.handleChange}>
        <option value="All">All</option>
        <option value="Bread">Bread</option>
        <option value="Rolls">Rolls</option>
        <option value="Cookies">Cookies</option>
        <option value="Pies">Pies</option>
        <option value="Pastries">Pastries</option>
        <option value="Muffins">Muffins</option>
        <option value="Cakes">Cakes</option>
        </select>
        <div className="Container">
            {/* {this.state.value === 'All'? this.props.products.map(product => (
                <div key={product.id}>
                <img className="productImg" src={product.imageUrl} />
         <p>Product Name: {product.productName}</p>
         <p>Price: {product.price}</p>
        <button
          type="button"
          onClick={() => this.props.addToCart(product)
          }>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        </button>
        </div>
            ) ) :
            this.selectCategory.map((product) => (
                <div key={product.id}>
                <img className="productImg" src={product.imageUrl} />
         <p>Product Name: {product.productName}</p>
         <p>Price: {product.price}</p>
        <button
          type="button"
          onClick={() => this.props.addToCart(product)
          }>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        </button>
        </div>
            ))
          } */}
        </div>

      </div>
    )
  }
}

const mapState = (state) => {
  return {
    products: state.products
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    addToCart: (product) => dispatch(addToCart(product))
  };
};

export default connect(mapState, mapDispatch)(AllProducts);