import React, { Component } from "react";
import ReactDOM from "react-dom";

class GoodsHeaders extends Component {
  render() {
    const category = this.props.product.category;

    return <th colSpan="2">{category}</th>;
  }
}

class GoodsItems extends Component {
  render() {
    const product = this.props.product;
    let name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class Catalog extends Component {
  render() {
    let rows = [],
      lastCategory = null;

    this.props.products.forEach((product, index) => {
      if (lastCategory !== product.category) {
        rows.push(<GoodsHeaders product={product} key={product.category} />);
      }

      rows.push(<GoodsItems product={product} key={product.name} />);

      lastCategory = product.category;
    });

    return (
      <div style={{ margin: "20px 0 0 0" }}>
        <table style={{ border: "1px solid #000" }}>
          <tr>
            <td>NAME</td>
            <td>PRICE</td>
          </tr>
          {rows}
        </table>
      </div>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <form>
        <input placeholder="Search..." />
        <br />
        <input type="checkbox" />
        Show only items in stock
      </form>
    );
  }
}

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class SearchBox extends Component {
  render() {
    return (
      <div>
        <Search />
        <Catalog products={PRODUCTS} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SearchBox />, rootElement);
