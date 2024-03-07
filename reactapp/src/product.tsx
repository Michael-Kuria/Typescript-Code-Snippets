import React, {FunctionComponent, useState} from "react";
import { Product } from "./data/entities";

interface Props{
  product: Product,
  callback: (product: Product, quantity: number) => void
}


const ProductItem: FunctionComponent<Props> = ({product, callback}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (ev:React.ChangeEvent<HTMLSelectElement>): void => {
    setQuantity(Number(ev.target.value));
  }

  const handleAddToCart = (): void =>{
    callback(product, quantity);
  }

  return (
    <div className="card m-1 p-1 bg-light">
    <h4>
      {product.name}
      <span className="badge badge-pill badge-primary float-right">
        ${product.price.toFixed(2)}
      </span>
    </h4>
    <div className="card-text bg-white p-1">
      {product.description}
      <button className="btn btn-success btn-sm float-right" onClick={handleAddToCart}>
        Add To Cart
      </button>
      <select className="form-control-inline float-right m-1" onChange={handleQuantityChange}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  </div>
  )
};
export default ProductItem;