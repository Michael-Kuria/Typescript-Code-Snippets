import React, { FunctionComponent, useState } from "react";
import { Header } from "./header";
import ProductItem from "./product";
import { CategoryList } from "./categories";
import { Product, Order } from "./data/entities";

interface Props {
  products: Product[];
  categories: string[];
  order: Order;
  addToOrder: (product: Product, quantity: number) => void;
}

export const ProductList: FunctionComponent<Props> = ({
  products,
  categories,
  order,
  addToOrder,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const selectCategory = (cat: string): void => {
    setSelectedCategory(cat);
  };

  const filteredProducts = (): Product[] => {
    return products.filter(
      (p) => selectedCategory === "All" || p.category === selectedCategory
    );
  };

  return (
    <div>
      <Header order={order} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 p-2">
            <CategoryList
              categories={categories}
              selected={selectedCategory}
              selectCategory={selectCategory}
            />
          </div>
          <div className="col-9 p-2">
            {filteredProducts().map((p) => (
              <ProductItem key={p.id} product={p} callback={addToOrder} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
